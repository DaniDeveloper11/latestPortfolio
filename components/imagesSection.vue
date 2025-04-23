<template>
    <section>
        <div class="flex space-x-5 overflow-x-auto px-12 -my-8 py-4 ">
      <nuxt-img v-for="(img, index) in images" :key="index" :src="img" 
           class="w-64 h-80 object-cover rounded-xl shadow-lg hover:scale-105"
           :class="getRotation(index)"
           ></nuxt-img>
    </div>
    </section>
</template>
<script setup>
const images = [
  "/foto4.jpg",
  "/foto1.jpg",
  "/foto6.jpg",
  "/foto3.jpg",
  "/foto5.jpg",
];

const getRotation = (index) => {
    return index % 2 ===0 ? 'rotate-3' : '-rotate-3';
}
</script>