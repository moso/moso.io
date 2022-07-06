<template>
    <footer>
        <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener" title="CC BY-NC-SA 4.0">CC BY-NC-SA 4.0</a> 2016-present; &copy; Morten Sørensen.</p>
    </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

footer {
    margin: 1rem auto 2rem;
    padding: 1rem;
    border-top: 2px dashed rgba($light, .15);

    p {
        color: rgba($light, .25);
        margin: 0;
    }

    a {
        color: rgba($light, .25);
        transition: color .25s ease;

        @include hover-state {
            color: $text-color;
        }
    }
}
</style>
