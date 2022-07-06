import { aliases } from './vite.config'
const mappedAliases = Object.entries(aliases).map((entry) => entry)

export default {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        'import/resolver': {
            typescript: {},
            alias: {
                map: mappedAliases,
                extensions: ['.ts', '.vue']
            }
        }
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@moso/eslint-config-ts'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: './',
        extraFileExtensions: ['.vue']
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        // ES6
        'template-curly-spacing': ['error', 'never'],

        // Vue 3
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['warn', { 'singleline': 5 }],
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 'off'
    }
}
