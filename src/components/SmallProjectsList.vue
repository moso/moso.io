<script setup lang="ts">
import type { Project } from '@/types';

const smallprojects: Project[] = [
    {
        title: 'FIFA',
        description: 'Modern web- and next-gen streaming-platform',
    },
    {
        title: 'Smarter Airports',
        description: 'Airport platform',
    },
    {
        title: 'The Danish Customs and Tax Administration',
        description: 'Claimant portal',
    },
    {
        title: 'The Danish Agency for Digitisation',
        description: 'Common Design System, Frontend Styleguide',
    },
    {
        title: 'The Danish Immigration Service',
        description: 'Portal for foreign nationals',
    },
];
</script>

<template>
    <ul class="small-projects">
        <li v-for="(project, index) in smallprojects" :key="index">
            <div class="project-title">{{ project.title }}</div>
            <div class="project-description">{{ project.description }}</div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.small-projects {
    margin: 1rem 0 2rem;
    padding: 0;
    list-style: none;

    li {
        margin: 0 0 .75rem;

        .project-title {
            margin-bottom: .15rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: $light;
        }

        .project-description {
            font-size: .875rem;
        }
    }
}
</style>
