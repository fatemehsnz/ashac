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
    <router-link :to="menu.link" v-for="(menu, index) in menus" :key="index">
      {{ menu.name }}
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
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
          <div class="col-sm-9">
            <ul class="email text_align_right">
              <li class="d_none">
                <a href="#">
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    aria-hidden="true"
                  />
                  Location</a
                >
              </li>
              <li class="d_none">
                <a href="#"
                  ><font-awesome-icon
                    icon="fa-solid fa-phone"
                    aria-hidden="true"
                  />
                  09151043668 - 09153236199</a
                >
              </li>
              <li class="d_none">
                <a href="#"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    aria-hidden="true"
                  />
                  ashagroup.c@gmail.com</a
                >
              </li>
              <li class="d_none">
                <a href="#"
                  >Login
                  <font-awesome-icon icon="fa-solid fa-user" aria-hidden="true"
                /></a>
              </li>
              <li class="d_none">
                <font-awesome-icon
                  icon="fa-solid fa-search"
                  style="cursor: pointer"
                  aria-hidden="true"
                />
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

<script setup>
const menus = [
  {
    name: "آشا",
    icon: "fa-solid fa-house",
    link: "/",},
    // submenus: [
      {
        name: "در باره ما",
        icon: "fa-solid fa-mouse",
        link: "about-us",
      },
      {
        name: "گالری تصاویر",
        icon: "fa-solid fa-mouse",
        link: "gallery",
      },
    // ],
  // },
  {
    name: "خدمات ما",
    icon: "fa-solid fa-briefcase",
    link: "services",},
    // submenus: [
      {
        name: "گواهی نامه ISO",
        icon: "fa-solid fa-mouse",
        link: "iso",
      },
      {
        name: "پروانه ساخت تجهیزات پزشکی",
        icon: "fa-solid fa-mouse",
        link: "jfdhg",
      },
      {
        name: "مهندسی تولید",
        icon: "fa-solid fa-mouse",
        link: "dsff",
      },
      {
        name: "دانش بنیان",
        icon: "fa-solid fa-mouse",
        link: "fgddfg",
      },
      {
        name: "آموزش",
        icon: "fa-solid fa-mouse",
        link: "fgdgf",
      },
    // ],
  // },
  {
    name: "تماس با ما",
    icon: "fa-solid fa-graduation-cap",
    link: "education",
    // submenus: []
  },
];
</script>

<!-- <style lang="scss" src="@/assets/scss/menu.scss"></style> -->
