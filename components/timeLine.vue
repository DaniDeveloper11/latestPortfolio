<template>
    <div id="experiencia" class="flow-root my-10">
      <ul role="list" class="-mb-8">
        <li v-for="(event, eventIdx) in timeline" :key="event.id">
          <div class="relative pb-8">
            <span v-if="eventIdx !== timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            <div class="relative flex space-x-3">
              <div>
                <span :class="[event.iconBackground, 'flex size-8 items-center justify-center rounded-full ring-8 ring-white']">
                  <img class="rounded-full" :src="event.src" alt="">
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p class="text-sm text-gray-500 dark:text-white">
                    {{ event.content }} 
                  </p>
                  <a :href="event.href" class="font-medium text-sm text-gray-900 dark:text-gray-200">{{ event.target }}</a>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-200">
                  <p >{{ event.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid'
  
  const timeline = [
    {
      id: 1,
      src:'mavi.jpg',
      content: 'MAVI de Occidente',
      target: 'Full Stack Developer',
      href: '#',
      date: 'Junio 24 - Actualmente',
      datetime: '2020-09-20',
      icon: UserIcon,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      src:'hp.jpg',
      content: 'High Power de Mexico',
      target: 'Frontend Developer',
      href: '#',
      date: 'Octubre 23 - Mayo 24',
      datetime: '2020-09-22',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      src:'ibm.png',
      content: 'IBM',
      target: 'Test Analyzer',
      href: '#',
      date: 'Junio 23 - Oct 23',
      datetime: '2020-09-30',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 4,
      src:'cfe.png',
      content: 'CFE (Intern)',
      target: 'Full Stack Developer',
      href: '#',
      date: 'Feb 23 - Junio 23',
      datetime: '2020-09-28',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 5,
      content: 'Ingenieria en Computacion',
      target: 'CUCEI',
      href: '#',
      date: '2018 - 2023',
      datetime: '2020-10-04',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
  ]
  </script>