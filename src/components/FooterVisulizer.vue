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
                <a :href="social.href" target="_blank"
                  ><font-awesome-icon :icon="social.icon"
                /></a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="reader">
              <a href="index.html"
                ><img src="@/assets/img/logo-header.png" alt="#"
              /></a>
              <p class="padd_flet40">
                این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح بندی آن،
                با محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از
                Lorem Ipsum این است که دارای توزیع کم و بیش نرمال حروف است.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="reader">
              <h3>نوشته های اخیر</h3>
              <ul class="re_post">
                <li><img src="images/re_img1.jpg" alt="#" /></li>
                <li><img src="images/re_img2.jpg" alt="#" /></li>
                <li><img src="images/re_img3.jpg" alt="#" /></li>
                <li><img src="images/re_img4.jpg" alt="#" /></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="reader">
              <h3>ارتباط با ما</h3>
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

<script >
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["socials"]),
  },
};
</script>

<style lang="css" scoped src="@/assets/css/bootstrap.v4.5.3.basco.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="css" scoped src="@/assets/css/responsive.basco.css"></style>