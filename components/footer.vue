<template>
    <footer class="">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-4 lg:px-8">
        <nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
          <a v-for="item in main" :key="item.name" :href="item.href" class="text-gray-400 hover:text-white">{{ item.name }}</a>
        </nav>
        <div class="mt-16 flex justify-center gap-x-10">
            <a v-for="link in linkArray " :key="link" :href="link.link" target="_blank" class="text-gray-400 dark:hover:text-white">
                <nuxt-icon :name='link.icon'></nuxt-icon>
            </a>
        </div>
        <p class="mt-10 text-center text-sm/6 text-gray-400">&copy;Angel Daniel Montes Villarreal.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  
    const main =  [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ]
    const linkArray = [
    {icon:'github',link:'https://github.com/DaniDeveloper11'},
    {icon:'linkedin',link:'https://www.linkedin.com/in/daniel-montes-28686a258/'},
    {icon:'whatsapp',link:'https://wa.me/5213314857062?text=Hola%20Daniel%2C%20Estoy%20interesado%20en%20tu%20perfil'}
    ]

  </script>