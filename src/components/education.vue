<script setup lang="ts">
import { Education } from '@/types';

const educations: Education[] = [
    {
        period: 'Mar, 2016',
        title: 'Webintegrator',
    },
    {
        period: 'Sep, 2012',
        title: 'IT-Supporter',
    },
    {
        period: 'Sep, 2012',
        title: 'CCNA',
    },
];
</script>

<template>
    <ul class="list">
        <li v-for="(education, index) in educations" :key="index">
            {{ education.period }}: <strong>{{ education.title }}</strong>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.list {
    margin: 0 0 2.5rem;
    padding: 0;
    list-style: none;

    li {
        margin: .625rem 0 0;
    }
}
</style>
