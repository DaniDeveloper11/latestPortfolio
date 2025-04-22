<template>
    <section>
        <div class=" hidden lg:flex space-x-5 overflow-x-auto px-12 -my-8 py-4 ">
      <img v-for="(img, index) in images" :key="index" :src="img" 
           class="w-64 h-80 object-cover rounded-xl shadow-lg hover:scale-105"
           :class="getRotation(index)"
           >
    </div>
    </section>
</template>
<script setup>
const images = [
  "/img/img1.jpg",
  "/img/img2.jpg",
  "/img/img3.jpg",
  "/img/img4.jpg",
  "/img/img5.jpg",
];

const getRotation = (index) => {
    return index % 2 ===0 ? 'rotate-3' : '-rotate-3';
}
</script>