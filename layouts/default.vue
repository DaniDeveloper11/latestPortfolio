<template>
    <div class="flex flex-col lg:space-y-20 sm:space-y-8 ">
      <header>
        <headerD/>
      </header>
  
      <main class=" flex mx-auto lg:mx-40 max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
        <!-- Left column area -->
          <rightNav></rightNav>
      </aside>
        <div class="flex-1">
        <slot />
        </div>
      </main>
  
      <footer>
        <p>© 2025 Daniel Montes</p>
      </footer>
    </div>
  </template>
  
    <script setup>
    import headerD from '@/components/headerD.vue'
    import rightNav from '~/components/rightNav.vue';
    </script>