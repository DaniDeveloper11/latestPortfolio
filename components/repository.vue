<template>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold text-gray-900 dark:text-white">Repositorio Github </h1>
          <p class="mt-2 text-sm text-gray-700 dark:text-white">En esta tabla encontraras <strong class="font-semibold text-violet-600">Proyectos personales, Experiementos, y Pruebas tecnicas</strong> Entra en cada uno de los repositorios para mas detalles.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <nuxt-link to="https://github.com/DaniDeveloper11" type="button" class="flex gap-3 rounded-2xl bg-violet-600/50 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
            <nuxt-icon name="github"></nuxt-icon>
            <span class="my-auto">Github</span>
          </nuxt-link>
        </div>
      </div>
      <div class="-mx-4 mt-10 ring-1 ring-violet-600 sm:mx-0 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-300 bg-violet-800/20">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">Nombre</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell dark:text-white">Tipo</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell dark:text-white">Tecnologias</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Select</span>
              </th>
              <!-- <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Tecnologias</th> -->

            </tr>
          </thead>
          <tbody>
            <tr v-for="(repo) in repositories" :key="repo.id">
              <td class="'relative py-4 pl-4 pr-3 text-sm sm:pl-6'">
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ repo.name }}
                  <span class="ml-1 text-indigo-600"> ({{ repo.type }})</span>
                </div>
              </td>
              <td class='hidden px-3 py-3.5 text-sm text-gray-900 dark:text-white lg:table-cell'>{{ repo.to }}</td>
              <td class='hidden px-3 py-3.5 text-sm text-gray-900 dark:text-white lg:table-cell line-clamp-3'>{{ repo.technologies }}</td> 
              <td class='relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                <a :href="repo.href" type="button" class="cursor-pointer inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">
                  ver
                </a>
                
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>

  const repositories = [
    {
      id:1,
      type:'Backend',
      to:"Api Hibrida",
      name: 'parking-api',
      technologies:"Node.js, Express, Graphql, Sequelize, Jest, Docker",
      href: "https://github.com/DaniDeveloper11/parking-api/tree/main",
      // color:""
    },
    {
      id:2,
      type:'Backend',
      to:"Api Rest",
      name: 'technical-test-back',
      technologies:"Node.js, Express,Sequelize, Bcrypt",
      href: "https://github.com/DaniDeveloper11/technical-test-back/tree/main",
      // color:""
    },
    {
      id:3,
      type:'Frontend',
      to:"Login, Crud",
      name: 'technical-test-front',
      technologies:"Angular, Bootstrap , axios, typescript, ",
      href: "https://github.com/DaniDeveloper11/technical-test-front",
      // color:""
    },
    {
      id:4,
      type:'Frontend & Backend',
      to:"Login, Crud , Api rest",
      name: 'pruebaTecnica-MAVI',
      technologies:"Vue, TaildwindCss , axios, javascript, Node.js, Express, Sequelize, jquery ",
      href: "https://github.com/DaniDeveloper11/technical-test-front",
      // color:""
    },
    {
      id:5,
      type:'Frontend',
      to:"To-do app",
      name: 'TodoApp',
      technologies:"Vue, TaildwindCss , axios, javascript ",
      href: "https://github.com/DaniDeveloper11/TodoApp",
      // color:""
    },
    {
      id:6,
      type:'Frontend & Backend',
      to:"Login, Crud, Blog",
      name: 'BlogLaravel',
      technologies:"Laravel, Blade, Axios, TawilwindCss, vite  ",
      href: "https://github.com/DaniDeveloper11/TodoApp",
      // color:""
    }
  ]
  </script>