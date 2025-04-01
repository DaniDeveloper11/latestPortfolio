<template>
    <ul role="list" class="divide-y divide-green-500 dark:divide-green-800">
      <li v-for="project in projects" :key="project.id" @click="selectProject(project)" 
      class="flex items-center justify-between gap-x-6 py-5 cursor-pointer dark:hover:bg-green-900 hover:bg-green-500 px-4 rounded-lg">
        <div class="min-w-0">
          <div class="flex items-start gap-x-3">
            <p class="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">{{ project.name }}</p>
            <p :class="[statuses[project.status], 'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset']">{{ project.status }}</p>
          </div>
          <!-- <div class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
            <p class="whitespace-nowrap">
              Due on <time :datetime="project.dueDateTime">{{ project.dueDate }}</time>
            </p>
            <svg viewBox="0 0 2 2" class="size-0.5 fill-current">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <p class="truncate">Created by {{ project.createdBy }}</p>
          </div> -->
        </div>
        <div class="flex flex-none items-center gap-x-4">
         <techGroup :images="project.technologies"></techGroup>
          <nuxt-link :to="`/projects/${getSlug(project.name)}`"
          class="hidden rounded-md bg-white dark:bg-gray-900 dark:hover:bg-green-700 dark:text-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs  sm:block"
            >Ver Detalles<span class="sr-only">, {{ project.name }}</span></nuxt-link
          >
          <!-- <Menu as="div" class="relative flex-none">
            <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="size-5" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 focus:outline-hidden">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50 outline-hidden' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                    >Edit<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50 outline-hidden' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                    >Move<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50 outline-hidden' : '', 'block px-3 py-1 text-sm/6 text-gray-900']"
                    >Delete<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </div>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  // import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  // import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
  // import { fetchGithubProjects } from "@/services/githubService";
  import techGroup  from '@/components/techGroup.vue';
  import { useSelectedProjectStore } from '@/stores/useSelectedProjectStore'

  const selectedProject = useSelectedProjectStore()

  const projects = [
  {
    id: 1,
    name: "Azul ERP",
    description: " Con una interfaz intuitiva y herramientas avanzadas, AzulERP permite llevar un control eficiente de inventarios, facturación, compras, ventas y contabilidad en un solo lugar..",
    technologies: ["Vue.png", "Tailwind.jpg", "javascript.jpg", "node.png","sql.png","vite.jpg"],
    techName : ['Vue','Node','Vuetify','Javascript','Git'],
    status: "Complete",
    href: "https://miportafolio.com",
  },
  {
    id: 2,
    name: "Lion's Protection",
    description: "Tienda en línea conectada a Magento con Vue Storefront.",
    technologies: ["vue.png", "php.png", "javascript.jpg","vuetify.png","git.png"],
    status: "In progress",
    createdBy: "Daniel Montes",
    techName : ['Vue','PHP','Vuetify','Javascript','Git','SQL','NPM'],
    href: "https://ecommercevue.com",
  },
  {
    id: 3,
    name: "Muebles America",
    description: "Tienda en línea conectada a Magento con Vue Storefront.",
    technologies: ["storefront.jpg", "bootstrap.jpg", "typescript.jpg", "docker.png","node.png","graphql.png","git.png"],
    status: "In progress",
    createdBy: "Daniel Montes",
    techName : ['Vue','VueStoreFront','Bootstrap','Javascript','Git','SQL','NPM','Typescript','GraphQL','Node','Docker'],
    href: "https://ecommercevue.com",
  },
  {
    id: 4,
    name: "FoodFinders Adminpanel",
    description: "Aplicación para delivery con Angular y Firebase.",
    technologies: ["angular.png", "firebase.png", "tailwind.jpg","typescript.jpg","docker.png"],
    status: "In progress",
    createdBy: "Daniel Montes",
    techName : ['Angular','Tailwindcss','Git','Firebase','NPM','Typescript','Node','Docker'],
    href: "https://foodfinders.com",
  },
  {
    id: 5,
    name: "SoftCarmel",
    description: "Dashboard para restaurantes con estadísticas y reportes.",
    technologies: ["vue.png", "tailwind.jpg","javascript.jpg"],
    status: "Complete",
    createdBy: "Daniel Montes",
    techName : ['Vue','Tailwindcss','Git','NPM','Javascript'],
    href: "https://dashboard.com",
  },
  {
    id: 6,
    name: "Oaklan",
    description: "Aplicación para gestionar inventarios con Vue y Node.js.",
    technologies: ["vue.png", "node.png", "vuetify.png","javascript.jpg"],
    status: "Complete",
    createdBy: "Daniel Montes",
    techName : ['Vue','Node','Vuetify','Javascript','Git','SQL','NPM'],
    href: "https://inventariosapp.com",
  }
];
;

const statuses = {
    Complete: 'text-green-700 bg-green-50 ring-green-600/20',
    'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
  };

const getSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");
};

const selectProject = ( project ) => {
  selectedProject.setProject(project)
}
  
  </script>