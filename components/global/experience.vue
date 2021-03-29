<template>
    <ul class="list">
        <li v-for="(experience, index) in experiences" :key="index">
            {{ experience.period }}: <strong>{{ experience.title }}</strong> &#64;{{ experience.location }}
        </li>
    </ul>
</template>
<script>
export default {
    data: () => ({
        experiences: [
            {
                'period': 'Oct 2019 - present',
                'title': 'Interface Consultant',
                'location': 'Netcompany'
            },
            {
                'period': 'May 2019 - Jul 2019',
                'title': 'Web Developer',
                'location': 'Tea Solutions'
            },
            {
                'period': 'Oct 2018 - May 2019',
                'title': 'Freelance',
                'location': 'Various'
            },
            {
                'period': 'Apr 2018 - Sep 2018',
                'title': 'Front-End Developer',
                'location': 'Aidgency'
            },
            {
                'period': 'Oct 2017 - Apr 2018',
                'title': 'Interface Consultant',
                'location': 'Netcompany'
            },
            {
                'period': 'Apr 2017 - Oct 2017',
                'title': 'Lead Front-End Developer',
                'location': 'Indexed'
            },
            {
                'period': 'Apr 2015 - Apr 2017',
                'title': 'Front-End Developer',
                'location': 'Eyeforce'
            }
        ]
    })
}
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
