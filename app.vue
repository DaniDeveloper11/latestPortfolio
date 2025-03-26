<template>
  <div class="transition-colors duration-500 ease-in-out bg-gray-100 dark:bg-black" >
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