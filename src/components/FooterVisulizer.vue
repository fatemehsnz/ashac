<template>
  <div class="ltx-overlay-main-waves"></div>
  <div class="ltx-overlay-second-waves"></div>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <ul class="social_icon text_align_center">
              <li v-for="(social, index) in socials" :key="index">
                <a :href="social.href" target="_blank"><font-awesome-icon :icon="social.icon" /></a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="reader">
              <a href="index.html"
                ><img src="@/assets/img/logo-header.png" alt="#"
              /></a>
              <p class="padd_flet40">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="reader">
              <h3>Explore</h3>
              <ul class="xple_menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="reader">
              <h3>Recent Posts</h3>
              <ul class="re_post">
                <li><img src="images/re_img1.jpg" alt="#" /></li>
                <li><img src="images/re_img2.jpg" alt="#" /></li>
                <li><img src="images/re_img3.jpg" alt="#" /></li>
                <li><img src="images/re_img4.jpg" alt="#" /></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="reader">
              <h3>Contact Us</h3>
              <p>
                It is a lon <br />
                g established fact that a reader will be distracted by the
                readable content of a page when looking at its
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright text_align_center">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p>
                Copyright All Right Reserved By
                <a href="http://me.engameri.ir"> Engneer Ameri</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {
    title: "instagram",
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/ashac.ir/",
  },
  {
    title: "telegram",
    icon: "fa-brands fa-telegram",
    href: "http://t.me/",
  },
  {
    title: "linkedin",
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/ashac-ir/",
  },
  {
    title: "whatsapp",
    icon: "fab fa-whatsapp",
    href: "https://api.whatsapp.com/send?phone=989151043668",
  },
];
</script>

<style>
</style>