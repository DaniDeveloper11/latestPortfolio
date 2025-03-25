<template>
       <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in navigation" :key="item.name">
              <div v-if="!item.children" :href="item.href" 
              :class="[isSelectedTechnology(item.name) ? 'bg-amber-500 scale-[1.07]' : '',
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              ' block rounded-md py-2 pr-2  text-sm/6 font-semibold text-gray-700 cursor-pointer transition-all duration-400 ease-in-out']"
              >
                <nuxt-img class=" inline-block size-8 mr-3 rounded-full" :src="item.src"></nuxt-img> 
                               <span class="text-gray-900 dark:text-gray-200 ">{{ item.name }}</span>
              </div>
              <Disclosure as="div" v-else default-open="true" v-slot="{ open }">
                <DisclosureButton :class="[isSelectedTechnology(item.src) ? 'bg-green-50 ring-2 ring-green-400' : '',
                  'clases-default', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer']">
                    <nuxt-icon class="text-gray-900 dark:text-gray-200" :name='item.icon'></nuxt-icon>
                  {{ item.name }}
                  <ChevronRightIcon :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'size-5 shrink-0']" aria-hidden="true" />

                </DisclosureButton>
                <DisclosurePanel as="ul" class="mt-1 px-2">
                  <li v-for="subItem in item.children" :key="subItem.name">
                    <DisclosureButton as="div" class="cursor-pointer w-50" 
                    :class="[isSelectedTechnology(subItem.name) ? 'bg-amber-400 scale-[1.15] ring-2 ring-amber-600 drop-shadow-2xl shadow-amber-600' : '',
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 dark:text-gray-200 font-extrabold transition-all duration-400 ease-in-out']">
                        <nuxt-img class="inline-block size-8 mr-3 rounded-full" :src="subItem.src"></nuxt-img>
                        {{ subItem.name }}
                    </DisclosureButton>
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { computed, onMounted } from 'vue'

import { useSelectedProjectStore } from '@/stores/useSelectedProjectStore'
const projectStore = useSelectedProjectStore();


const isSelectedTechnology = projectStore.isSelectedTechnology 
const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
  {
    name: 'Frontend',
    icon:'ux',
    current: false,
    children: [
      { name: 'Vue', src: '/vue.png' },
      { name: 'Angular', src: '/angular.png' },
      { name: 'VueStoreFront', src: '/storefront.jpg' },
      { name: 'Nuxt', src: 'nuxt.png'},
      { name: 'Laravel', src: '/laravel.jpg' },
    //   { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Style',
    icon:'css',
    current: false,
    children: [
      { name: 'Tailwindcss', src: 'tailwind.jpg' },
      { name: 'Bootstrap', src: 'bootstrap.jpg' },
      { name: 'Vuetify', src: 'vuetify.png' },
    //   { name: 'CSS', src: '#' },

    //   { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'UX | UI ',
    icon: 'diseno',
    current: false,
    children: [
      { name: 'Figma', src: 'figma.png' },
      { name: 'Canva',src: 'canva.jpg' },
      { name: 'Adobe', src: 'adobe.jpg' },
    ],
  },
  {
    name: 'Backend',
    icon: 'configuracion-web',
    current: false,
    children: [
      { name: 'Node', src: 'node.png' },
      { name: 'Sequelize', src: 'sequelize.png' },
      { name: 'Strapi', src: 'strapi.png' },


    ],
  },
  {
    name: 'Lenguajes',
    icon: 'lenguaje-de-codificacion',
    current: false,
    children: [
      { name: 'Javascript', src: 'javascript.jpg' },
      { name: 'Typescript', src: 'typescript.jpg' },
      { name: 'PHP', src: 'php.png' },
      { name: 'Python', src: 'python.png' },
      { name: 'C/C++', src: 'c.jpg' },
    ],
  },
  {
    name: 'Bases de Datos',
    icon: 'base-de-datos',
    current: false,
    children: [
      { name: 'SQL', src: 'sql.png' },
      { name: 'GraphQL', src: 'graphql.png' },
      { name: 'Firebase', src: 'firebase.png' },
    ],
  },
  { name: 'Git', src: 'git.png', current: false },
  { name: 'Docker', src: 'docker.png', current: false },
  { name: 'NPM', src: 'npm.png', current: false },
  { name: 'Postman', src: 'postman.jpg', current: false },
  { name: 'Vite', src: 'vite.jpg', current: false },
  { name: 'K6', src: 'k6.png', current: false },


  

]


</script>
<style>
    .nuxt-icon svg{
        width: 2rem;
        height: 2rem;
    }

</style>