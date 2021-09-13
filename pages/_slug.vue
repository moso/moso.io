<template>
    <nuxt-content :document="article" />
</template>

<script>
export default {
    async asyncData({ $content, params, error }) {
        const article = await $content(params.slug || 'profile')
        .fetch()
        .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
        });

        return { article }
    },

    head() {
        return {
            title: `${this.article.title} - moso.io`,
            meta: [
                { hid: 'description', name: 'description', content: this.article.description },
                { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.article.title },
                { hid: 'og:title', property: 'og:title', content: this.article.title },
                { hid: 'og:description', property: 'og:description', content: this.article.description },
                { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
            ]
        }
    }
}
</script>
