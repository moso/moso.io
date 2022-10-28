<template>
    <ul class="list">
        <li v-for="(education, index) in educations" :key="index">
            {{ education.period }}: <strong>{{ education.title }}</strong>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Education } from '@/types';

export default defineComponent({
    data: () => ({
        educations: [
            {
                'period': 'Mar, 2016',
                'title': 'Webintegrator',
            },
            {
                'period': 'Sep, 2012',
                'title': 'IT-Supporter',
            },
            {
                'period': 'Sep, 2012',
                'title': 'CCNA',
            },
        ] as Education[]
    }),
});
</script>

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
