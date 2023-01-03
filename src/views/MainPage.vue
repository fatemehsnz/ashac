<template>
  <div>
    <AboutUs />
    <ServiceVisulize />
  </div>
</template>

<script setup>
import AboutUs from '@/components/AboutUs.vue';
import ServiceVisulize from '@/components/ServiceVisulize.vue';
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;

  & * {
    margin-bottom: 5%;
  }
}
</style>