<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
const route = useRoute();
const slug = route.params.slug

const { data: home } = await useAsyncData(() => queryCollection('content').path(`/projects/${slug}`).first())
</script>

<template>


<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="mx-auto max-w-3xl">
      <main>
        <ContentRenderer :value="home" />
      </main>
    </div>
  </div>
</template>
