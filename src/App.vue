<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useHead } from '@vueuse/head';

// Test of getting the CSP headers
const httpReq = new XMLHttpRequest();

onBeforeMount(() => {
    httpReq.open('GET', document.location.toString(), true);
    httpReq.send(null);
    httpReq.onload = () => {
        let headers = httpReq.getAllResponseHeaders();
        headers = headers.split(/\n|\r|\r\n/g).reduce((a: any, b: any) => {
            if (b.length) {
                const [key, value] = b.split(': ');
                a[key] = value;
            }
            return a;
        }, {});

        console.log(headers);
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
