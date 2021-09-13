import { build, manifest, meta } from './config'

const isDev = process.env.NODE_ENV !== 'production'

export default {
    ssr: !isDev,
    modern: !isDev && 'client',

    target: 'static',

    watch: ['~/config/*'],

    meta,

    css: ['~/assets/scss/app.scss'],

    plugins: [],

    components: true,

    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/netlify-files',
        'nuxt-vite'
    ],

    modules: ['@nuxt/content', '@nuxtjs/pwa'],

    netlifyFiles: {
        existingFilesDirectory: './netlify'
    },

    content: {
        apiPrefix: 'api',
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-nord.css'
            }
        }
    },

    generate: {
        fallback: 'index.html'
    },

    manifest,

    build
}
