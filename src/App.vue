<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useHead } from '@vueuse/head';

// Test of getting the CSP headers
const httpReq = new XMLHttpRequest();

onBeforeMount(() => {
    httpReq.open('GET', document.location.toString(), false);
    httpReq.send(null);
    httpReq.onload = () => {
        let headers = httpReq.getAllResponseHeaders().split('\n')
            .map(x => x.split(/: */, 2))
            .filter(x => x[0])
            .reduce((ac: any, x: any) => { ac[x[0]] = x[1]; return ac; }, {});

        console.log(headers['content-security-policy']);
    };
});

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
