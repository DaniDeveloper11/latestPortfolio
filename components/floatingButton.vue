<template>
    <a :href="href" target="_blank"  type="button" class="rounded-full bg-indigo-600 p-2 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <nuxt-icon name="arrow-right-icon"></nuxt-icon>
    </a>
</template>
<script setup lang="ts">
    const { href } = defineProps<{ href: string }>()

</script>