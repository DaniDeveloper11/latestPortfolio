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
    <div class="mx-auto max-w-3xl md:px-4 relative ">
      <div class="overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <nuxt-link to="/"  
        type="button" class="flex justify-center0 rounded-4xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100">
            <nuxt-icon name="arrow-left-icon"></nuxt-icon>
          <span class="my-auto">Inicio</span>
        </nuxt-link>

        <div class="px-4 py-5 sm:p-6">
          <main class="prose max-w-none">
            <ContentRenderer :value="home" class="dark:text-gray-200" />
          </main>
        </div>
      </div>

      <floatingButton class="cursor-pointer bottom-0 -right-3 z-50 absolute "></floatingButton>

    </div>
  </div>


</template>
