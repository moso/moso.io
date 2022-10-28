<template>
    <div class="projects">
        <div class="project" v-for="(project, index) in projects" :key="index">
            <div class="project-header">{{ project.title }}</div>
            <div class="project-info">
                <a class="project-link" :href="project.githubLink" target="_blank" rel="noopener" :aria-label="project.title">
                    <span><GitHubIcon /></span>
                    <span>{{project.githubShort}}</span>
                </a>
                <span class="project-info-divider" v-show="project.url">—</span>
                <a class="project-secondary-link" :href="project.url" target="_blank" rel="noopener" :aria-label="project.title" v-show="project.url">
                    <span><Globe /></span>
                    <span>website</span>
                </a>
            </div>
            <p class="project-description">{{project.description}}</p>
            <ul class="project-tags" v-show="project.tags">
                <li v-for="(tag, index) in project.tags" :key="index">
                    <span># {{tag}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import GitHubIcon from '@/icons/github-small.svg';
import Globe from '@/icons/globe.svg';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import { Project } from '@/types';

export default defineComponent({
    data: () => ({
        projects: [
            {
                title: 'eslint-config',
                githubLink: 'https://github.com/moso/eslint-config',
                githubShort: '@moso/eslint-config',
                url: '',
                description: 'Opinionated collection of ESLint configurations, using best practices for core JavaScript and several frameworks including Vue 3, and React. Made for making consistent code across many projects, as setting up ESLint is sometimes a task in itself.',
                tags: ['ESLint', 'JavaScript', 'Vue', 'React'],
            },
            {
                title: 'Flexgrid',
                githubLink: 'https://github.com/moso/flexgrid',
                githubShort: '@moso/flexgrid',
                url: 'https://flexgrid.io',
                description: 'Free and open-source CSS grid-system based on flexbox. Flexgrid helps you build both simple and advanced grids for your modern sites and webapps. It\'s easy to hack into a new project, or adapt into a current one. Created before Bootstrap went full flexbox in version 4, and still used by many.',
                tags: ['Flexbox', 'CSS', 'Grid'],
            },
        ] as Project[]
    }),
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.projects {
    margin: 1rem 0 3rem;
}

.project {
    margin-top: 1.5rem;
    padding: 1rem 1.5rem .25rem;
    border: 1px solid rgba($gray, .25);
    border-radius: .25rem;

    .project-header {
        margin: 0 0 .5rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: $light;
    }

    .project-info {
        display: flex;
        align-items: center;

        a {
            display: inline-flex;
            align-items: center;
            font-size: .875rem;
            color: rgba($light, .35);
            text-decoration: none;
            transition: color .25s ease;

            @include hover-state() {
                color: $text-color;
            }

            span:first-of-type {
                font-size: 0;
            }

            svg {
                margin-top: 2px;
                width: .875rem;
                height: .875rem;
                margin-right: .25rem;
            }
        }
    }

    .project-info-divider {
        margin: 0 0 0 .5rem;
        color: rgba($light, .25);
    }

    .project-secondary-link {
        margin-left: .5rem;
    }

    .project-description {
        margin: 1.5rem 0;
    }

    .project-tags {
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: inline-flex;
            align-items: center;
            margin: 0 .5rem 1rem 0;
            padding: .25rem .75rem;
            background-color: rgba($gray, .25);
            border-radius: 33px;
            font-size: .75rem;
            font-weight: 500;
        }
    }
}
</style>
