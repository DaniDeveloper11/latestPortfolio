<template>
    
        <section class=" lg:relative mx-auto lg:mx-40 max-w-7xl px-4 sm:px-6 lg:px-8 pt-5
        bg-gradient-to-b from-green-400 via-green-600 to-white
         dark:bg-gradient-to-b dark:from-green-600 dark:via-green-700 dark:to-[#1d1f21] dark:text-gray-200 py-2
         flex-col items-center  text-gray-900  ">
        <img src="/perfil.jpg" alt="perfil" class="w-16 h-16 rounded-full mb-4" >

        <h1 class="text-4xl font-bold text-white">
    Desarrollador Frontend, Diseñador,<br /> y Creador de experiencias digitales.
</h1>
<p class="mt-4 text-lg max-w-lg text-green-100">
    Soy Daniel, un apasionado del diseño y desarrollo web con base en México. 
    Combino creatividad y precisión técnica para construir interfaces modernas, 
    intuitivas y escalables. Actualmente colaboro en proyectos que transforman ideas en productos reales.
</p>

        <div class="flex space-x-4 my-6">
            <a v-for="link in linkArray" :key="link" :href="link.link" target="_blank" class="text-gray-400 hover:text-white">
                <nuxt-icon :name='link.icon'></nuxt-icon>
            </a>
        </div>
        <terminal class="hidden lg:block absolute top-20 right-0 -mr-40"></terminal>
    </section>
    

    


</template>
<script setup>
import terminal from './terminal.vue';
// const linkArray = ['github','linkedin','whatsapp']
const linkArray = [
    {icon:'github',link:'https://github.com/DaniDeveloper11'},
    {icon:'linkedin',link:'https://www.linkedin.com/in/daniel-montes-28686a258/'},
    {icon:'whatsapp',link:'https://wa.me/5213314857062?text=Hola%20Daniel%2C%20Estoy%20interesado%20en%20tu%20perfil'}
    ]
</script>
<style>
    .nuxt-icon svg{
        width: 2rem;
        height: 2rem;
    }
    
</style>