<template>
  <br /><br />
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
            <div class="reader dir-rtl">
              <h3>ارتباط با ما</h3>
              <address>
                <font-awesome-icon
                  icon="fa fa-map-marker-alt"
                  aria-hidden="true"
                />
                دفتر مرکزی: معلم 11، پلاک 50، واحد 4
              </address>
              <address>
                <font-awesome-icon
                  icon="fa fa-map-marker-alt"
                  aria-hidden="true"
                />
                دفتر کارگزاری: پارک علم و فناوری خراسان، ساختمان مرکزی
              </address>
              <a href="mailto:ashagroup.c@gmail.com?subject=feedback">
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  aria-hidden="true"
                />
                ashagroup.c@gmail.com
              </a>
              <br />
              <a href="tel:05137625727">
                <font-awesome-icon
                  icon="fa-solid fa-phone"
                  aria-hidden="true"
                />
                27 57 62 05137
              </a>
              <br />
              <a href="tel:09007202530">
                <font-awesome-icon
                  icon="fa-solid fa-phone"
                  aria-hidden="true"
                />
                30 25 20 09007
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="reader dir-rtl">
              <h3>لینک‌های مفید</h3>
              <ul class="re_post">
                <li><a href="https://portal.kstp.ir/">پارک علم و فناوری خراسان</a></li>
                <li><a href="http://imed.ir/">اداره کل تجهیزات پزشکی</a></li>
                <li><a href="https://entities.ttac.ir/">سازمان غذا و دارو</a></li>
                <li><a href="https://irsherkat.ssaa.ir/">سامانه ثبت شرکت ها</a></li>
                <li><a href="https://mojavez.ir/">درگاه ملی مجوزها</a></li>
                <li><a href="https://reg.daneshbonyan.ir/">سامانه دانش بنیان</a></li>
                <li><a href="https://www.ntsw.ir/">سامانه جامع تجارت</a></li>
              </ul>
            </div>
          </div> 
          <div class="col-md-5 col-sm-6">
            <div class="reader dir-rtl">
              <a href="index.html"><img src="@/assets/img/logo-header.png" alt="#"/></a>
              <p class="padd_flet40">
                <ul style="list-style-type: armenian;">
                  <li>مشاوره و اخذ گواهی دانش بنیان</li>
                  <li>پیاده سازی سیتم‌های مدیریت کیفیت (CE، ISO)</li>
                  <li>اخذ مجوزهای تولید محصول (پزشکی، غذایی، صنعتی و ...)</li>
                  <li>تهیه تکنیکال فایل، امکان سنجی تولید و نکوین محصول (TF/FS/BP)</li>
                </ul>
              </p>
              <div class="row">
                <div class="col-3"></div>
                <div class="col-8">
                  <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=465855&Code=mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=465855&Code=mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK' alt='' style='cursor:pointer' Code='mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK'></a>
                  <!-- <div>{{ enamad }}</div> -->
                </div>
                <div class="col-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright text_align_center">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <p style="font-size: small;">
                Copyright All Right Reserved By
                <a href="http://engameri.ir"> Engneer Ameri</a>
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
    ...mapState(["socials", "enamad"]),
  },
};

</script>

<style lang="css" scoped src="@/assets/css/bootstrap.v4.5.3.basco.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="scss" scoped src="@/assets/scss/responsive.basco.scss"></style>
