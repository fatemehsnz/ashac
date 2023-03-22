<template>
  <div class="service" v-for="service in services" :key="service">
    <div v-for="(item, index) in service.items" :key="index">
      <div class="service__img" v-if="this.$route.params.name == item.title">
        <img :src="require(`../assets/img/${item.img}`)" :alt="item.title" />
      </div>
      <div class="service__title" v-if="this.$route.params.name == item.title">
        {{ item.title }}
      </div>
      <div class="service__desc" v-if="this.$route.params.name == item.title">
        {{ item.desc }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  //   props: {
  // serviceData: Object,
  //   },
  computed: {
    ...mapState(["services"]),
  },
  //   onMounted(() => {
  //     this.$service = "";
  //   }),
};
</script>

<style lang="scss" src="@/assets/scss/service.scss"></style>