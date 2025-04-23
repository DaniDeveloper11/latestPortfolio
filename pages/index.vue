<template>
    <div>
     <heroSection></heroSection>
      <imagesSection></imagesSection>
      <myDevelop></myDevelop>
      
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useSelectedProjectStore } from '@/stores/useSelectedProjectStore'

  import heroSection from '~/components/heroSection.vue';
  import imagesSection from '~/components/imagesSection.vue';
  import myDevelop from '~/components/myDevelop.vue';
  // import tenologiesGrid from '~/components/tenologiesGrid.vue';

  const selectedProject = useSelectedProjectStore()

onMounted(() => {
  selectedProject.clearProject()
})
</script>