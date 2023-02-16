<template>
  <LoaderVisulizer v-if="!isLoad" />
  <MenuNavigation v-if="isLoad" />
  <!-- <SliderSwiper v-if="isLoad" /> -->
  <div class="content" v-if="isLoad">
    <router-view></router-view>
  </div>
  <FooterVisulizer v-if="isLoad" />
</template>

<script setup>
import LoaderVisulizer from "@/components/LoaderVisulizer.vue";
import MenuNavigation from "@/components/MenuNavigation.vue";
import FooterVisulizer from '@/components/FooterVisulizer.vue';
// import SliderSwiper from '@/components/SliderSwiper.vue';

import { ref, onMounted } from "vue";

const isLoad = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoad.value = true;
  }, 1000);
});
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>