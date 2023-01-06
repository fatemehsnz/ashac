<template>
  <div>
    <AboutUs />
    <ServiceVisulize />
    <WhyChooseUs />
    <ContactUs />
  </div>
</template>

<script setup>
import AboutUs from '@/views/AboutUs.vue';
import ServiceVisulize from '@/views/ServiceVisulize.vue';
import WhyChooseUs from '@/views/WhyChooseUs.vue';
import ContactUs from '@/views/ContactUs.vue';

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