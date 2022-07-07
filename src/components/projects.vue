<template>
    <div class="project" v-for="(project, index) in projects" :key="index">
        <div class="project-header">{{ project.title }}</div>
        <div class="project-info">
            <a class="project-link" :href="project.githubLink" target="_blank" rel="noopener" :aria-label="project.title">
                <span><GitHubIcon /></span>
                <span>{{project.githubShort}}</span>
            </a>
            <a class="project-secondary-link" :href="project.url" target="_blank" rel="noopener" :aria-label="project.title" v-show="project.url">
                <span><Globe /></span>
                <span>website</span>
            </a>
        </div>
        <p class="project-description">{{project.text}}</p>
        <ul class="project-tags" v-show="project.tags">
            <li v-for="(tag, index) in project.tags" :key="index">
                <span># {{tag}}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import GitHubIcon from '@/icons/github-small.svg'
import Globe from '@/icons/globe.svg'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        projects: [
            {
                title: '',
                githubLink: '',
                githubShort: '',
                url: '',
                text: '',
                tags: ['', '', '']
            }
        ]
    })
})

</script>
