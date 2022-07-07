<template>
    <a class="theme-toggle" title="Toggle Theme" @click="toggleTheme">
        <Moon v-show="isDark" />
        <Sun v-show="!isDark" />
    </a>
</template>

<script setup lang="ts">
import { isDark } from '@/logic'
import Sun from '@/icons/sun.svg'
import Moon from '@/icons/moon.svg'

const toggleTheme = () => {
    isDark.value = !isDark.value
}
</script>

<style lang="scss" scoped>
.theme-toggle {
    cursor: pointer;
    user-select: none;
}
</style>
