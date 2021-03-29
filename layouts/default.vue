<template>
    <div id="app">
        <moso-header />
        <main>
            <nuxt />
        </main>
        <moso-footer />
    </div>
</template>

<script>
export default {
    components: {
        'moso-header': () => import('~/components/header.vue'),
        'moso-footer': () => import('~/components/footer.vue')
    }
}
</script>
