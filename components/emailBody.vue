<template>
    <div class="items-start ">

      <div class="min-w-0 flex-1">
        <form @submit.prevent="handleSubmit" class="relative space-y-2">

          <input v-model="email" type="email" name="email" id="email" aria-label="Email" 
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
            placeholder="tu@correo.com"
            
           />

          <div class="rounded-lg bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-green-600">
            <label for="comment" class="sr-only">Agrega un comentario</label>
            <textarea rows="3" name="comment" id="comment" 
            class="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
             placeholder="Agrega un comentario..." 
            v-model="comment"
             ></textarea>
  
            <!-- Spacer element to match the height of the toolbar -->
            <div class="py-2" aria-hidden="true">
              <!-- Matches height of button in toolbar (1px border + 36px content height) -->
              <div class="py-px">
                <div class="h-9" />
              </div>
            </div>
          </div>
  
          <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
            <div class="flex items-center space-x-5">
              <div class="flex items-center">
                <button type="button" class="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                  <PaperClipIcon class="size-5" aria-hidden="true" />
                  <span class="sr-only">Attach a file</span>
                </button>
              </div>
              <div class="flex items-center">
                <Listbox as="div" v-model="selected">
                  <ListboxLabel class="sr-only">Your mood</ListboxLabel>
                  <div class="relative">
                    <ListboxButton class="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <span class="flex items-center justify-center">
                        <span v-if="selected.value === null">
                          <FaceSmileIcon class="size-5 shrink-0" aria-hidden="true" />
                          <span class="sr-only">Add your mood</span>
                        </span>
                        <span v-if="!(selected.value === null)">
                          <span :class="[selected.bgColor, 'flex size-8 items-center justify-center rounded-full']">
                            <component :is="selected.icon" class="size-5 shrink-0 text-white" aria-hidden="true" />
                          </span>
                          <span class="sr-only">{{ selected.name }}</span>
                        </span>
                      </span>
                    </ListboxButton>
  
                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                      <ListboxOptions class="absolute z-10 mt-1 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow-sm outline-1 outline-black/5 sm:ml-auto sm:w-64 sm:text-sm">
                        <ListboxOption as="template" v-for="mood in moods" :key="mood.value" :value="mood" v-slot="{ active }">
                          <li :class="[active ? 'relative bg-gray-100 outline-hidden' : 'bg-white', 'cursor-default px-3 py-2 select-none']">
                            <div class="flex items-center">
                              <div :class="[mood.bgColor, 'flex size-8 items-center justify-center rounded-full']">
                                <component :is="mood.icon" :class="[mood.iconColor, 'size-5 shrink-0']" aria-hidden="true" />
                              </div>
                              <span class="ml-3 block truncate font-medium">{{ mood.name }}</span>
                            </div>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <div class="shrink-0">
              <button type="submit" class="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    FaceFrownIcon,
    FaceSmileIcon,
    FireIcon,
    HandThumbUpIcon,
    HeartIcon,
    PaperClipIcon,
    XMarkIcon,
  } from '@heroicons/vue/20/solid'
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  
  import { sentMail } from '~/services/contactService'
  import { useAlertStore } from '@/stores/useAlertStore'

  const alertStore = useAlertStore()

  const moods = [
    { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
    { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
    { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
    { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
    { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
    { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
  ]
  
  const email = ref('');
  const comment = ref('');
  const success = ref(false);
  
const handleSubmit = async () => {
  try{
    await sentMail({
      email:email.value,
      message:comment.value
    });
    success.value = true;
    email.value = '';
    comment.value = ''
    alertStore.showSuccess()

  }catch(error){
    console.error(error);
  }
}

  const selected = ref(moods[5])
  </script>