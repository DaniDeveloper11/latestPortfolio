<template>
    <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2 mt-24 ">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 xl:flex">
 

        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          <!-- Main area -->
          <div class="border-b border-green-600 dark:border-green-800 pb-5">
            <h3 class="text-base font-semibold text-gray-900 dark:text-gray-200">Proyectos Reales</h3>
          </div>

          <projectList></projectList>
        </div>
      </div>

      <div class="shrink-0 border-t border-green-500 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6">
        <!-- Right column area -->

        <div class="border border-green-500 dark:border-green-800 t px-4 py-5 sm:px-6 rounded-2xl">
          
            <div id="contacto" class=" border-gray-200 text-wrap pb-5">

            <h3 class="flex text-base font-semibold text-green-800 dark:text-gray-200">
                <nuxt-icon name='gmail' class="mr-2 text-green-500 dark:text-green-600"></nuxt-icon>
                  Dejame un Mensaje</h3>
            <p class="text-gray-900 dark:text-gray-200">Me comunicare contigo a la brevedad, solo deja correo y un mensaje </p>
            </div>
            <div class="">
                <emailBody></emailBody>
            </div>


          
         </div>
         <timeLine></timeLine>
      </div>
    </div>
  
</template>

<script setup>
    import emailBody from './emailBody.vue';
    import timeLine from './timeLine.vue';
    import projectList from './projectList.vue';

</script>