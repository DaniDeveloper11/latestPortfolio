<template>
      <Transition
    enter="transition ease-out duration-300"
    enter-from="opacity-0 translate-y-5"
    enter-to="opacity-100 translate-y-0"
    leave="transition ease-in duration-200"
    leave-from="opacity-100 translate-y-0"
    leave-to="opacity-0 translate-y-5"
  >

  <div v-if="alertStore.successVisible" class="grid justify-items-center " > 
        <div  class="rounded-md bg-blue-100 p-4 w-1/2 fixed bottom-15">
      <div class="flex">
        <div class="shrink-0">
          <CheckCircleIcon class="size-5 text-green-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button @click="alertStore.hideSuccess()" type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-hidden">
              <span class="sr-only">Dismiss</span>
              <XMarkIcon class="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
</Transition>

 

  </template>
  
  <script setup>
  import { CheckCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  import { useAlertStore } from '@/stores/useAlertStore'

const alertStore = useAlertStore()
  </script>