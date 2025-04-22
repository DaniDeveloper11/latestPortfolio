<template>
    <header class="bg-transparent ">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12 bg-green-500 dark:bg-green-700 px-8 py-1.5 rounded-4xl opacity-90 z-50">
          <Popover class="relative">
            <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold  text-white cursor-pointer">
              Proyectos
              <ChevronDownIcon class="size-5 flex-none text-white" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute top-full -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-[#1d1f21] ring-1 shadow-lg ring-gray-900/5 ">
                <div class="p-4">
                  <div v-for="item in projects" :key="item.id"
                  :class="`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 dark:hover:bg-gray-700 ${item.color}`"
                  >
                    <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-[#1d1f21] transition duration-300 border border-gray-200">
                      <!-- <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> -->
                       <nuxt-icon :name="item.icon" class="text-gray-600 transition duration-300 group-hover:text-inherit"
                       ></nuxt-icon>
                    </div>
                    <div class="flex-auto">
                      <nuxt-link :to="`/projects/${getSlug(item.name)}`" 
                      class="block font-semibold text-gray-900 dark:text-gray-100 ">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </nuxt-link>
                      <p class="mt-1 text-gray-600 dark:text-gray-100 dark:hover:text-gray-900 line-clamp-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                   class="group relative flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                   :class="`${item.color}`"
                   >
                    <!-- <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" /> -->
                    <nuxt-icon :name="item.icon" class="text-gray-600 transition duration-300 group-hover:text-inherit"
                    ></nuxt-icon>
                    <span class="text-gray-700">{{ item.name }}</span>
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <a href="#" class="text-sm/6 font-semibold text-white">Acerca de mi</a>
          <a href="#experiencia" class="text-sm/6 font-semibold text-white">Mi experiencia</a>
          <a href="#contacto" class="text-sm/6 font-semibold text-white">Contactame</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
           <darkToggle/>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-[#1d1f21] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5 ring-1 ring-green-500 rounded-full">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto rounded-full" src="/perfil.jpg" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-green-500">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">
                    Proyectos
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <nuxt-link
                    @click="mobileMenuOpen = false"
                     v-for="item in [...projects]" :key="item.name" as="a" :to="`/projects/${getSlug(item.name)}`"
                     class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">{{ item.name }}
                    </nuxt-link>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">Acerca de mi</a>
                <a href="#experiencia" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">Mi experiencia</a>
                <a href="#contacto" @click="mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">Dejame un correo</a>
                <a href="https://drive.google.com/uc?export=download&id=1Tw9oNwLl45yYpONDOq1lj_3AMyOyU3cF"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50">Descarga mi Curriculum</a>
              </div>
              <div class="py-6 flex gap-4 ">
                <a type="button" 
                class="flex justify-center  flex-1 gap-3 rounded-full bg-transparent px-3.5 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-xs ring-1 ring-green-500 ring-inset"
                href="https://wa.me/5213314857062?text=Hola%20Daniel%2C%20Estoy%20interesado%20en%20tu%20perfil"
                > 
                <nuxt-icon name="whatsapp" class="text-green-500 transition duration-300"
                ></nuxt-icon>
                <span class="my-auto">Contactame</span>
              
              </a>
                <a  type="button" 
                class="flex gap-3 justify-center flex-1 rounded-full bg-green-500 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="tel:+5213314857062"
                >
                <nuxt-icon name="phone-icon" class="text-white transition duration-300"
                ></nuxt-icon>
                <span class="my-auto">Llamame</span>
              </a>
                <!-- <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a> -->
              </div>
            </div>
          </div>
          <footerComponent></footerComponent>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import footerComponent from '@/components/footer.vue';
  import { useColorMode } from '@vueuse/core'
  import darkToggle from '@/components/darkToggle.vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Curriculum',
     href:'https://drive.google.com/uc?export=download&id=1Tw9oNwLl45yYpONDOq1lj_3AMyOyU3cF',
      icon:"download",
      color:"text-green-500"
    },
    { name: 'Llamame', href: '#', icon: "phone-icon", color:"text-green-500" },
  ]
  const getSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");
};
  const colorMode = useColorMode()
  
  const mobileMenuOpen = ref(false)

  const projects = [
  {
    id: 1,
    name: "Azul ERP",
    description: " Con una interfaz intuitiva y herramientas avanzadas, AzulERP permite llevar un control eficiente de inventarios, facturación, compras, ventas y contabilidad en un solo lugar..",
    technologies: ["Vue.png", "Tailwind.jpg", "javascript.jpg", "node.png","sql.png","vite.jpg"],
    techName : ['Vue','Node','Vuetify','Javascript','Git'],
    status: "Complete",
    href: "https://miportafolio.com",
    icon: "agave",
    color:"text-blue-500"
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
    icon:'carro',
    color:"text-red-500"
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
    icon: 'carrito-de-compras',
    color:"text-indigo-500"
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
    icon:"restaurante",
    color:"text-orange-500"
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
    icon:"aplicacion",
    color:"text-yellow-500"
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
    icon:"bolsa-de-herramientas",
    color:"text-green-500"
  }
];
  </script>