<template>
    <div class="flex flex-col lg:space-y-20 sm:space-y-8 ">
      <header>
        <headerD/>
      </header>
  
      <main class="flex mx-auto lg:mx-0 2xl:mx-40 max-w-8xl px-4 sm:px-6 lg:px-8">
        <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
        <!-- Left column area -->
          <rightNav></rightNav>
      </aside>
        <div class="flex-1 min-w-0 overflow-hidden">
        <slot />
        </div>
      </main>
  
      <footerComponent></footerComponent>
    </div>
  </template>
  
    <script setup>
    import headerD from '@/components/headerD.vue'
    import rightNav from '~/components/rightNav.vue';
    import footerComponent from '~/components/footer.vue';
    </script>