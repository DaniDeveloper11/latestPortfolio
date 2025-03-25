<template>
  <div class="bg-gray-300 dark:bg-black" :class="colorMode">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage/>

    </NuxtLayout>
    <downloadButton class="fixed bottom-5 right-5"></downloadButton>
  </div>
</template>
<script setup>

import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();
</script>