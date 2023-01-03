<template>
  <div class="services_main">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage">
            <h2>خدمات ما</h2>
            <span
              >It is a long established fact that a reader will be distracted by
              the readable content
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ul
            class="nav nav-tabs md-tabs border_none"
            id="myTabMD"
            role="tablist"
          >
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab active"
                id="home-tab-md"
                data-toggle="tab"
                href="#home-md"
                role="tab"
                aria-controls="home-md"
                aria-selected="true"
                >RESIDENTAL</a
              >
            </li>
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab"
                id="profile-tab-md"
                data-toggle="tab"
                href="#profile-md"
                role="tab"
                aria-controls="profile-md"
                aria-selected="false"
                >RETAIL DESIGN</a
              >
            </li>
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab"
                id="contact-tab-md"
                data-toggle="tab"
                href="#contact-md"
                role="tab"
                aria-controls="contact-md"
                aria-selected="false"
                >SPACE ADAPTATION</a
              >
            </li>
          </ul>
          <div class="tab-content card back_bg" id="myTabContentMD">
            <div
              class="tab-pane fade show active"
              id="home-md"
              role="tabpanel"
              aria-labelledby="home-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6" :class="service.style" v-for="(service, index) in services" :key="index">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img :src="require(`../assets/img/${service.img}`)" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>{{ service.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile-md"
              role="tabpanel"
              aria-labelledby="profile-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img3.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col-md-4 col-sm-6
                    padding_0
                    margin_top70p margin_right20 margin_left20
                  "
                >
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img2.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img4.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170"
                >
                  <div class="services margin_left60">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img1.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact-md"
              role="tabpanel"
              aria-labelledby="contact-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img4.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col-md-4 col-sm-6
                    padding_0
                    margin_top70p margin_right20 margin_left20
                  "
                >
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img2.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img1.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170"
                >
                  <div class="services margin_left60">
                    <div class="services_img">
                      <figure>
                        <img src="img/service_img3.png" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>Reader will be distracted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
    {
        title: 'پروانه ساخت تجهیزات پزشکی',
        img: 'Untitled.png',
        desc: 'مشاوران ما با شناخت کامل الزامات و نیازهای تولید تجهیزات پزشکی، تهیه اسناد و دریافت پروانه تولید تجهیزات پزشکی را برای سازمان شما بسیار آسان خواهند نمود. ما با تسلط در تهیه مدارک و تکنیکال فایل محصول ضمن مطابقت مداوم با الزامات مشتری، تمام فرآیند اخذ پروانه تولید محصول را برای سازمان شما انجام می دهیم.',
        style: 'padding_0 margin_right20'
    },
    {
        title: 'ISO 13485',
        img: 'ISO-13485-2016-1.png',
        desc: 'با پیاده سازی، اجرا و پشتیبانی سیستم های مدیریت کیفیت و تضمین کیفیت شما در تمام مراحل فرآیند، ما به شما و شرکت شما کمک می کنیم تا بتوانید در کوتاه ترین زمان ممکن موفق به اخذ گواهینامه ISO 13485 / 9001 شوید. ما به شرکت‌ها کمک می کنیم تا بهترین و مناسب ترین سازمان صدور گواهینامه ISO را انتخاب کنند.',
        style: 'padding_0 margin_top70p margin_right20 margin_left20'
    },
    {
        title: 'آموزش',
        img: 'education-1-1.png',
        desc: 'ما برنامه های آموزشی ارائه می دهیم که برای معرفی اصول، فرآیندها ، اصطلاحات و الزامات سیستم مدیریت کیفت، آنالیز و مدیریت ریسک، تدوین FMEA، الزامات تولید تجهیزات پزشکی و تکوین محصول طراحی شده است. آموزش‌های ما کاربردی و مطابق نیاز سازمان شما طراحی و اجرا خواهد شد.',
        style: 'padding_0 margin_left20'
    },
    {
        title: 'دانش بنیان',
        img: 'education-1-1.png',
        desc: 'در بازار رقابتی امروز ، تمرکز بر شایستگی های اصلی شما برای به دست آوردن و حفظ رهبری صنعت بسیار مهم است. تیم تخصصی ما با بررسی و ارزیابی تولیدات شما، محصول شما را به سوی دریافت گواهی دانش بنیان پیش خواهد برد تا علاوه بر کسب اعتبار، از مزایا و حمایت های قانونی محصولات دانش بنیان برخوردار شوید.',
        style: 'offset-md-8 padding_0 margin_top170'
    },
    {
        title: 'پشتیبانی',
        img: 'education-1-1.png',
        desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
        style: 'offset-md-8 padding_0 margin_left20 margin_bottom70'
    }
]
</script>

<style>
</style>