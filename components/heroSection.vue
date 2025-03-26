<template>
    
        <section class=" lg:relative mx-auto lg:mx-40 max-w-7xl px-4 sm:px-6 lg:px-8 pt-5
        bg-gradient-to-b from-green-400 via-green-600 to-white
         dark:bg-gradient-to-b dark:from-green-400 dark:via-green-700 dark:to-black dark:text-gray-200 py-2
         flex-col items-center  text-gray-900  ">
        <img src="/perfil.jpg" alt="perfil" class="w-16 h-16 rounded-full mb-4" >

        <h1 class="text-4xl font-bold text-white">
            Software designer, founder, <br /> and amateur astronaut.
        </h1>
        <p class="mt-4 text-lg max-w-lg text-green-100">
            I'm Spencer, a software designer and entrepreneur based in New York City. 
            I'm the founder and CEO of Planetaria, where we develop technologies that 
            empower regular people to explore space on their own terms.
        </p>
        <div class="flex space-x-4 my-6">
            <a v-for="link in linkArray" :key="link" href="#" class="text-gray-400 dark:hover:text-white">
                <nuxt-icon :name='link'></nuxt-icon>
            </a>
        </div>
        <terminal class="hidden lg:block absolute top-20 right-0 -mr-40"></terminal>
    </section>
    

    


</template>
<script setup>
import terminal from './terminal.vue';
const linkArray = ['github','linkedin','instagram','twiter']
</script>
<style>
    .nuxt-icon svg{
        width: 2rem;
        height: 2rem;
    }
    
</style>