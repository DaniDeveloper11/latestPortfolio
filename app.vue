<template>
  <div class="transition-colors duration-500 ease-in-out bg-gray-200 dark:bg-[#1d1f21]" >
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage/>

    </NuxtLayout>
    <downloadButton class="fixed bottom-5 right-5"></downloadButton>
    <SuccessAlert></SuccessAlert>
  </div>
</template>
<script setup>

import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();
</script>