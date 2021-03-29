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
                { hid: 'og:title', property: 'og:title', content: this.article.title },
                { hid: 'twitter:title', property: 'twitter:title', content: this.article.title }
            ]
        }
    }
}
</script>
