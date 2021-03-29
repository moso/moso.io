<template>
    <article>
        <h1>{{ pageTitle }}</h1>
        <h2>🧙🏻 Not all those who wander are lost</h2>
        <p>You totally are, though...</p>
        <p>Renewed shall be the page that was broken, if you go <nuxt-link to="/">back home</nuxt-link>.</p>
    </article>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            pageTitle: '404 - page not found'
        }
    },
    head() {
        return {
            title: this.pageTitle + ' - moso.io'
        }
    },
    mounted() {
        this.$store.commit('setPageTitle', this.pageTitle)
    }
}
</script>
