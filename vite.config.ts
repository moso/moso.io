import { join, resolve } from 'node:path';
import crypto from 'node:crypto';
import { defineConfig } from 'vite';
import fs from 'fs-extra';
import Pages from 'vite-plugin-pages';
import Inspect from 'vite-plugin-inspect';
import Components from 'unplugin-vue-components/vite';
import Markdown from 'unplugin-vue-markdown/vite';
import Anchor from 'markdown-it-anchor';
import Vue from '@vitejs/plugin-vue';
import SvgLoader from 'vite-svg-loader';
import Matter from 'gray-matter';
import AutoImport from 'unplugin-auto-import/vite';
import LinkAttributes from 'markdown-it-link-attributes';
import { bundledLanguages, getHighlighter } from 'shikiji';

import { slugify } from './src/helpers/slugify';

const isDev = process.env.NODE_ENV !== 'production';

const cspNonce = crypto.randomBytes(32).toString('base64');

const promises: Promise<any>[] = [];

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
        ],
    },

    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
            script: {
                defineModel: true,
            },
        }),

        Pages({
            extensions: ['vue', 'md'],
            dirs: 'pages',
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));

                if (path.endsWith('.md')) {
                    const md = fs.readFileSync(path, 'utf-8');
                    const { data } = Matter(md);
                    route.meta = Object.assign(route.meta || {}, { frontmatter: data });
                }

                return route;
            },
        }),

        Markdown({
            wrapperComponent: 'page',
            wrapperClasses: 'page',
            headEnabled: true,
            exportFrontmatter: false,
            exposeFrontmatter: false,
            exposeExcerpt: false,
            markdownItOptions: {
                quotes: '""\'\'',
            },
            async markdownItSetup(md) {
                const shiki = await getHighlighter({
                    themes: ['nord'],
                    langs: Object.keys(bundledLanguages) as any,
                });

                md.use((markdown) => {
                    markdown.options.highlight = (code, lang) => {
                        return shiki.codeToHtml(code, {
                            lang,
                            themes: {
                                light: 'nord',
                                dark: 'nord',
                            },
                        });
                    };
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
        }),

        Components({
            extensions: ['vue', 'md'],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),

        Inspect({
            enabled: !isDev,
        }),

        SvgLoader(),

        {
            name: 'await',
            async closeBundle() {
                await Promise.all(promises);
            },
        },
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },

    html: {
        cspNonce: `nonce-${cspNonce}`,
    },
});
