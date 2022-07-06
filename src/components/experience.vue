<template>
    <ul class="list">
        <li v-for="(experience, index) in experiences" :key="index">
            {{ experience.period }}: <strong>{{ experience.title }}</strong> &#64;{{ experience.location }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
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
})
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

<style lang="scss">
$code-dark: #2f3136;
$code-light: #f6f8fa;
$code-blue: #81A1C1;
$code-green: #A3BE8C;
$code-teal: #8FBCBB;
$code-light-blue: #85C0D0;

article > div {
    > pre {
        padding: .75rem;
        background: $code-dark !important;
        font-family: monospace !important;
        font-size: 80%;
    }

    .keyword, .operator, .punctuation {
        color: $code-blue;
    }

    .method, .function, .property-access {
        color: $code-light-blue;
    }

    .string, .template-punctuation {
        color: $code-green;
    }

    .console {
        color: $code-teal;
    }
}

#i-love-working-with + ul {
    margin: 0 0 2rem;
    padding: 0;
    list-style: none;

    li {
        margin: 0;
    }
}
</style>
