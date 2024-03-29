<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventListener } from '@vueuse/core';

const { frontmatter } = defineProps({
    frontmatter: {
        type: Object,
        required: true,
    },
});

const router = useRouter();
const content = ref<HTMLDivElement>();

onMounted(() => {
    const navigate = () => {
        if (location.hash)
            document.querySelector(decodeURIComponent(location.hash))?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAnchors = (event: MouseEvent & { target: HTMLElement }) => {
        const link = event.target.closest('a');
        if (
            !event.defaultPrevented
            && link
            && event.button === 0
            && link.target !== '_blank'
            && link.rel !== 'external'
            && !link.download
            && !event.metaKey
            && !event.ctrlKey
            && !event.shiftKey
            && !event.altKey
        ) {
            const url = new URL(link.href);

            if (url.origin !== window.location.origin) return;
            event.preventDefault();

            const { pathname, hash } = url;
            if (hash && (!pathname || pathname === location.pathname)) {
                window.history.replaceState({}, '', hash);
                navigate();
            }
            else {
                router.push({ path: pathname, hash });
            }
        }
    };

    useEventListener(window, 'hashchange', navigate);
    useEventListener(content.value!, 'click', handleAnchors, { passive: false });
    navigate();
    setTimeout(navigate, 500);
});
</script>

<template>
    <article ref="content" class="article" :class="frontmatter.class">
        <slot />
    </article>
</template>
