<template>
  <div>
    <SliderDemo />
    <br />
    <div style="width: 100%; height: 3px; background-color: #db8f15;"></div>
    <br />
    <AboutUs />
    <br />
    <div style="width: 100%; height: 3px; background-color: #db8f15;"></div>
    <br />

    <ServiceVisulize />
    <WhyChooseUs />
    <!-- <TeamMembers /> -->
    <!-- <OurClients /> -->
    <ContactPage />
  </div>
  <BackToTop />
</template>

<script setup>
import AboutUs from "@/views/AboutUs.vue";
import ServiceVisulize from "@/views/ServiceVisulize.vue";
import WhyChooseUs from "@/views/WhyChooseUs.vue";
// import TeamMembers from "@/views/TeamMembers.vue";
import ContactPage from "@/views/ContactPage.vue";
import SliderDemo from '@/components/SliderDemo.vue';
import BackToTop from '@/components/BackToTop.vue';
// import OurClients from '@/views/OurClients.vue';
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