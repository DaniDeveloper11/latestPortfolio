<template>
    
  <div class="flex -space-x-2 overflow-hidden">
    <img
    v-for="(image,index) in images" :key="index"
    class="inline-block size-8 rounded-full ring-2 ring-white" :src="image" alt="" />
  </div>
</template>
<script setup>
  defineProps({
    images:{
      type:Array,
      required:true
    }
  })

</script>