<template>
    <header>
        <a href="/" title="Logo" aria-label="Logo">
            <svg viewBox="0 0 987 392" version="1.1" xmlns="http://www.w3.org/2000/svg" class="logo">
                <g transform="matrix(-4.16667,0,0,4.16667,1430.98,-661.571)">
                    <path fill="#444" d="M343.436,252.712L289.203,158.777L275.575,158.777L322.441,240.591L302.5,240.591L255.265,158.777L208.031,240.59L160.796,158.777L106.564,252.712L154.498,252.712L171.535,223.202L164.538,211.082L147.5,240.591L127.558,240.591L160.796,183.018L201.034,252.712L215.057,252.712L255.265,183.018L295.502,252.712L343.436,252.712ZM259.006,211.082L235.242,252.712L248.967,252.712L266.004,223.202L259.006,211.082ZM181.106,158.777L194.733,158.777L218.666,200.228L211.699,212.182L181.106,158.777Z" />
                </g>
            </svg>
        </a>
        <ul class="links">
            <li><nuxt-link to="/profile" :class="{'active': $route.fullPath ==='/' || $route.fullPath === '/profile'}">Profile</nuxt-link></li>
            <li><nuxt-link to="/cv">CV</nuxt-link></li>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
            <li><a href="https://moso.dev" target="_blank" rel="noopener" title="Blog">Blog</a></li>
            <li @click="modeToggle">
                <svg v-if="!darkmode" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
                    <path fill="#444444" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" verson="1.1" viewBox="0 0 24 24">
                    <path fill="#dddddd" d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z" />
                </svg>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            darkmode: false
        }
    },
    mounted() {
        if(localStorage.getItem('_darkmode') === 'enabled') {
            document.querySelector('body').classList.add('darkmode')
            this.darkmode = true
        } else if(document.querySelector('body').classList.contains('darkmode') && (localStorage.getItem('_darkmode') === false || localStorage.getItem('_darkmode') == null)) {
            document.querySelector('body').classList.remove('darkmode')
            this.darkmode = false
        } else {
            this.darkmode = false
        }
    },
    methods: {
        night() {
            document.querySelector('body').classList.add('darkmode')
            this.darkmode = true
            this.$emit('dark')
            localStorage.setItem('_darkmode', 'enabled')
        },
        day() {
            document.querySelector('body').classList.remove('darkmode')
            this.darkmode = false
            this.$emit('day')
            localStorage.removeItem('_darkmode')
        },
        checkStorage() {
            localStorage.getItem('_darkmode')
        },
        modeToggle() {
            if(this.darkmode || document.querySelector('body').classList.contains('darkmode') || this.checkStorage() === 'enabled') {
                this.day()
            } else {
                this.night()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/mixins';
header {
    > a:first-of-type {
        display: flex;
    }
}
.links {
    li {
        display: flex;
        align-items: center;
        svg {
            width: 16px;
            height: 16px;
            @include hover-state {
                cursor: pointer;
            }
        }
    }
}
</style>
