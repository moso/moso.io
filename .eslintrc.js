module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 11
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:nuxt/recommended',
        'plugin:vue/essential'
    ],
    plugins: [
        'prettier',
        'vue'
    ],
    // add your custom rules here
    rules: {}
}
