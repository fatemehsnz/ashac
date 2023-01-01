<template>
  <LoaderVisulizer v-if="!isLoad" />
  <MenuNavigation v-if="isLoad" />
  <div class="content">
    <router-view v-if="isLoad"></router-view>
  </div>
</template>

<script setup>
import LoaderVisulizer from "@/components/LoaderVisulizer.vue";
import MenuNavigation from "@/components/MenuNavigation.vue";
import { ref, onMounted } from "vue";

const isLoad = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoad.value = true;
  }, 500);
});
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>
<style lang="css" src="@/assets/css/bootstrap.min.css"></style>
<style lang="scss" src="@/assets/scss/style.scss"></style>
<style lang="css" src="@/assets/css/responsive.css"></style>