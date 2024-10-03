<template>
  <div class="services_main dir-rtl">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="titlepage">
            <h2 >خدمات آشا</h2>
          </div>
        </div>
        <div class="col-sm-9">
          <ul class="nav nav-tabs md-tabs border_none" id="myTabMD" role="tablist">
            <li class="nav-item lisertab" v-for="service in services" :key="service">
              <a class="nav-link servi_tab" :class="service.name == 'license' && 'active'" :id="service.id"
                data-toggle="tab" :href="'#' + service.controls" role="tab" :aria-controls="service.controls"
                :aria-selected="service.name == 'license'">{{ service.title }}</a>
            </li>
          </ul>
          <div class="tab-content card back_bg" id="myTabContentMD">
            <div v-for="service in services" :key="service" class="tab-pane fade"
              :class="service.name == 'license' && 'show active'" :id="service.controls" role="tabpanel"
              :aria-labelledby="service.id">
              <div class="services border p-4">
                <div class="col-md-12" v-for="(item, index) in service.items" :key="index">
                  <router-link :to="{ name: 'service', params: { name: item.title } }" class="service-link">
                    <div class="d-flex align-items-start ">
                      <div class="image-container" style="flex: 1 1 33%;">
                        <img :src="require(`../assets/img/${item.img}`)" :alt="item.title" class="service-image" />
                      </div>
                      <div class="service-text" style="flex: 2 1 67%;">
                        <p class="description" v-html="item.desc"></p>
                        <span class="more-link">بیشتر...</span>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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

<style lang="css" scoped src="@/assets/css/bootstrap.v4.5.3.basco.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="scss" scoped src="@/assets/scss/responsive.basco.scss"></style>

<style>
@keyframes shadow {
  0% {
    transform: scaleX(1, 1);
  }
  100% {
    transform: scale(.3, .3);
  }
}

.services {
  border: 2px solid #000; 
  padding: 30px; 
  margin-bottom: 30px; 
  max-width: 750px;
}
.image-container {
  margin-left:20px;
  margin-right: 20px;
}
.service-image {
  transition: transform 0.4s ease; 
  max-width: 100%; 
  height: auto; 
}

.services:hover .service-image {
  transform: translateY(-5px) scale(1.1);
}

.service-text {
  padding-left: 20px; 
  padding-top: 20px; 
}

.description {
  display: block; 
  margin-top: 5px; 
  color: white
}
</style>
