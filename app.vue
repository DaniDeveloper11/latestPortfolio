<template>
  <div class="bg-gray-300 dark:bg-gray-950" :class="colorMode">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage/>

    </NuxtLayout>
  </div>
</template>
<script setup>

import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();
</script>