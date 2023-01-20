<template>
  <!-- <div class="sidebar">
    <div class="sidebar__branding">
      <img src="@/assets/img/logo-asha.png" alt="Logo" class="sidebar__logo" />
      <h1 class="sidebar__title">گروه مشاوره آشا</h1>
    </div>

    <div class="sidebar__nav">
      <router-link
        class="sidebar__nav-item"
        :to="menu.link"
        v-for="(menu, index) in menus"
        :key="index"
      > -->
  <!-- <div class="sidebar__nav-icon">
          <font-awesome-icon :icon="menu.icon" />
        </div> -->
  <!-- <div class="sidebar__nav-title">{{ menu.name }}</div>
        <div class="sidebar__nav-submenu" v-if="menu.submenus">
          <font-awesome-icon icon="fa-solid fa-arrow-down" />
        </div>

        <div class="sidebar__nav-subitems">
          <router-link
            class="sidebar__nav-subitem"
            :to="submenu.link"
            v-for="(submenu, index2) in menu.submenus"
            :key="index2"
          > -->
  <!-- <div class="sidebar__nav-icon">
            <font-awesome-icon :icon="submenu.icon" />
          </div> -->
  <!-- <div class="sidebar__nav-title">{{ submenu.name }}</div>
          </router-link>
        </div>
      </router-link>
    </div>
  </div> -->

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
          <div class="col-sm-3">
            <div class="logo">
              <a href="index.html"
                ><img src="@/assets/img/logo-header.png"
              /></a>
            </div>
          </div>
          <div class="col-sm-3">
            <ul
              class="email dir-rtl"
              style="text-align: left; margin-top: -10px"
            >
              <li class="d_none">
                <a href="mailto:ashagroup.c@gmail.com?subject=feedback" style="font-size: 14px !important;"
                  >ashagroup.c@gmail.com
                  <font-awesome-icon
                    icon="fa-solid fa-envelope"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li class="d_none">
                <a href="tel:05137625727" style="font-size: 14px !important;">
                  5727 3762 051
                  <font-awesome-icon
                    icon="fa-solid fa-phone"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6">
            <ul class="email text_align_right">
              <li class="d_none">
                <router-link to="contact-us"> تماس با ما </router-link>
              </li>
              <li class="d_none">
                <router-link to="about-us"> درباره ما </router-link>
              </li>
              <li>
                <button class="openbtn" onclick="openNav()">
                  <font-awesome-icon icon="fa-solid fa-bars" />
                  <!-- <img src="@/assets/icon/menu_btn.png" /> -->
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

<!-- <style lang="scss" src="@/assets/scss/menu.scss"></style> -->
