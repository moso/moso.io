<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
    meta: [
        { property: 'author', content: 'Morten Sørensen' },
        { property: 'og:image', content: 'https://moso.io/images/og_image.png' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:creator', content: '@mosolicious' },
        { property: 'twitter:site', content: '@mosolicious' },
    ],
});
</script>

<template>
    <moso-header />
    <main>
        <router-view />
    </main>
    <moso-footer />
</template>
