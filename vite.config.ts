import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs-extra';
import Pages from 'vite-plugin-pages';
import Inspect from 'vite-plugin-inspect';
import Components from 'unplugin-vue-components/vite';
import Markdown from 'vite-plugin-vue-markdown';
import Shiki from 'markdown-it-shiki';
import Anchor from 'markdown-it-anchor';
import Vue from '@vitejs/plugin-vue';
import SvgLoader from 'vite-svg-loader';
import matter from 'gray-matter';
import AutoImport from 'unplugin-auto-import/vite';
import LinkAttributes from 'markdown-it-link-attributes';

import { slugify } from './src/logic';

const isDev = process.env.NODE_ENV !== 'production';

export const aliases = {
    '@/': resolve(__dirname, './src/'),
    '@/icons/': resolve(__dirname, './src/icons/'),
    '@/pages/': resolve(__dirname, './pages/'),
    '@/styles/': resolve(__dirname, './src/styles/'),
};

export default defineConfig({
    resolve: {
        alias: [
            { find: /~(.+)/, replacement: `${join(process.cwd(), './node_modules/$1')}` },
            { find: /@\//, replacement: `${join(process.cwd(), './src')}/` },
            { find: /@\/icons/, replacement: `${join(process.cwd(), './src/icons')}/` },
            { find: /@\/pages/, replacement: `${join(process.cwd(), './pages')}/` },
            { find: /@\/styles/, replacement: `${join(process.cwd(), './src/styles')}/` },
        ],
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
            '@vueuse/head',
        ],
    },

    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),

        SvgLoader(),

        Pages({
            extensions: ['vue', 'md'],
            pagesDir: 'pages',
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));
                const md = fs.readFileSync(path, 'utf-8');
                const { data } = matter(md);

                route.meta = Object.assign(route.meta || {}, { frontmatter: data });
                return route;
            },
        }),

        Markdown({
            wrapperComponent: 'page',
            wrapperClasses: 'page',
            headEnabled: true,
            markdownItOptions: {
                quotes: '""\'\'',
            },
            markdownItSetup(md) {
                md.use(Shiki, {
                    theme: 'nord',
                });
                md.use(Anchor, { slugify });
                md.use(LinkAttributes, {
                    pattern: /^https?:/,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                });
            },
        }),

        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                '@vueuse/head',
            ],
            dts: 'src/auto-imports.d.ts',
        }),

        Components({
            extensions: ['vue', 'md'],
            dts: 'src/components.d.ts',
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),

        Inspect({
            enabled: !isDev,
        }),
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    // @ts-expect-error
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },
});
