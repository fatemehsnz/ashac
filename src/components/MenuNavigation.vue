<template>
  <div id="mySidepanel" class="sidepanel">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
    <router-link
      :to="menu.link"
      v-for="(menu, index) in menus"
      :key="index"
      class="dir-rtl"
    >
      {{ menu.name }}
      <!-- <font-awesome-icon icon="fa-solid fa-chevron-down" /> -->
    </router-link>
    <!-- {{ menu.submenus }} -->
  </div>
  <header>
    <!-- header inner -->
    <div class="head-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-6">
            <div class="logo">
              <a href="index.html"
                ><img src="@/assets/img/logo-header.png"
              /></a>
            </div>
          </div>
          <div class="col-12 col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-0">
            <ul
              class="email dir-rtl"
              style="text-align: left; margin-top: -10px"
            >
              <li>
                <a href="mailto:ashagroup.c@gmail.com?subject=feedback" style="font-size: 11px !important;"
                  >ashagroup.c@gmail.com
                  <font-awesome-icon
                    icon="fa-solid fa-envelope"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <!-- <li>
                <a href="tel:05136039420" style="font-size: 11px !important;">
                  9420 3603 051
                  <font-awesome-icon
                    icon="fa-solid fa-phone"
                    aria-hidden="true"
                  />
                </a>
              </li> -->
              <li>
                <a href="tel:09007202530" style="font-size: 11px !important;">
                  30 25 20 09007
                  <font-awesome-icon
                    icon="fa-solid fa-phone"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-xxl-7 col-xl-6 col-lg-6 col-md-4 col-sm-2 col-xs-3">
            <ul class="email text_align_right">
              <li class="d_none">
                <router-link to="download">دانلود</router-link>
              </li>
              <li class="d_none">
                <router-link to="contact-us">تماس با ما</router-link>
              </li>
              <li class="d_none">
                <router-link to="about-us">درباره ما</router-link>
              </li>
              <li>
                <button class="openbtn" onclick="openNav()">
                  <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script >
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["menus"]),
  },
};
</script>

<style lang="css" scoped src="@/assets/css/bootstrap.v4.5.3.basco.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="scss" scoped src="@/assets/scss/responsive.basco.scss"></style>

<style lang="scss" scoped>
header {
    position: sticky; 
    top: 0;  
    z-index: 1000; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }

</style>