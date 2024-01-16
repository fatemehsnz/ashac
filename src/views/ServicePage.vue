<template>
  <div class="services" v-for="service in services" :key="service">
    <div class="service" v-for="(item, index) in service.items" :key="index">
      <div class="service__img" v-if="this.$route.params.name == item.title">
        <img :src="require(`../assets/img/${item.img}`)" :alt="item.title" />
      </div>
      <div
        class="service__content"
        v-if="this.$route.params.name == item.title"
      >
        <div class="service__title">{{ item.title }}</div>
        <div class="service__desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["services"]),
  },
};
</script>

<style lang="scss" src="@/assets/scss/service.scss"></style>