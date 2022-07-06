<template>
    <header>
        <a href="/" class="logo" title="Logo" aria-label="Logo">
            <Logo />
        </a>
        <ul class="links">
            <li>
                <router-link class="link" :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/profile'}" to="/profile">
                    <span class="md-visible">Profile</span>
                    <Profile class="md-hidden" />
                </router-link>
            </li>
            <li>
                <router-link class="link" to="/projects">
                    <span class="md-visible">Projects</span>
                    <Projects class="md-hidden" />
                </router-link>
            </li>
            <li>
                <router-link class="link" to="/resume">
                    <span class="md-visible">Resume</span>
                    <Resume class="md-hidden" />
                </router-link>
            </li>
            <li>
                <a href="https://moso.dev" class="link" target="_blank" rel="noopener" title="Blog">
                    <span class="md-visible">Blog</span>
                    <Blog class="md-hidden" />
                </a>
            </li>
            <li>
                <a href="https://github.com/moso" target="_blank" rel="noopener" title="GitHub">
                    <GitHub />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/mosolicious" target="_blank" rel="noopener" title="Twitter">
                    <Twitter />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/moso" target="_blank" rel="noopener" title="LinkedIn">
                    <LinkedIn />
                </a>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import Logo from '@/icons/logo.svg'
import Profile from '@/icons/profile.svg'
import Resume from '@/icons/resume.svg'
import Projects from '@/icons/projects.svg'
import Blog from '@/icons/blog.svg'
import GitHub from '@/icons/github.svg'
import Twitter from '@/icons/twitter.svg'
import LinkedIn from '@/icons/linkedin.svg'
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

header {
    display: flex;
    align-items: center;
    padding: .5rem 1rem 0;
    height: 40px;

    @media (min-width: 992px) {
        height: 54px;
    }

    > a:first-of-type {
        display: flex;

        svg {
            width: auto;
            height: 35px;

            @media (min-width: 768px) {
                height: 40px;
            }
        }

        svg path {
            fill: $light;
        }
    }
}

.links {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;

    & > * + *  {
        margin-left: 1.2rem;
    }

    li {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            padding: 0 0 .5rem;
            margin: .5rem 0 .5rem;
            color: $light;
            font-weight: 500;
            border-bottom: 4px solid transparent;
            text-decoration: none;
            transition: color .25s ease;

            @include hover-state() {
                color: darken($light, 25%);
            }

            &.link {
                @include hover-state() {
                    border-bottom: 4px solid darken($light, 25%);
                }
            }

            &.router-link-active {
                border-bottom: 4px solid $light;
                text-decoration: none;

                @include hover-state() {
                    border-bottom: 4px solid $light;
                    text-decoration: none;
                }
            }
        }

        svg {
            width: auto;
            height: 24px;

            @include hover-state {
                cursor: pointer;
            }
        }
    }
}

.md-visible {
    @media (max-width: 768px) {
        display: none;
    }
}

.md-hidden {
    @media (min-width: 768px) {
        display: none;
    }
}
</style>
