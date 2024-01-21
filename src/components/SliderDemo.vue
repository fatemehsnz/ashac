<template>
  <div class="container-fluid mb-3">
    <div class="row px-xl-5">
      <div class="col-lg-8 col-md-8">
        <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item position-relative active" style="height: 430px">
              <img class="position-absolute w-100 h-100" src="@/assets/img/1.jpg" style="object-fit: cover" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px">

                  <div class="knb">
                    <img src="@/assets/img/KSTP.png" style="width: 70px; height: 70px;" />
                    <h3 style="right: 20px;" class="display-6 text-white mb-3 animate__animated animate__fadeInDown">
                      کارگزار رسمی پارک علم و فناوری خراسان
                    </h3>
                  </div>

                  <!-- <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما خدمات مشاوره خود را متناسب با نیاز شرکت شما طراحی
                    می‌کنیم
                  </p> -->
                  <router-link to="contact-us"
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">ارتباط با
                    ما</router-link>
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img class="position-absolute w-100 h-100" src="@/assets/img/2.jpg" style="object-fit: cover" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px">
                  <div class="knb">
                    <h3 style="right: 20px;" class="display-6 text-white mb-3 animate__animated animate__fadeInDown">
                      شرکت منتخب نخستین جشنواره ملی سرآمد و هفته پژوهش
                    </h3>
                  </div>
                  <!-- <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما اینجا هستیم تا موفقیت های شرکت شما را با هم جشن بگیریم
                  </p> -->
                  <router-link to="contact-us"
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">ارتباط با
                    ما</router-link>
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img class="position-absolute w-100 h-100" src="@/assets/img/3.jpg" style="object-fit: cover" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 700px">

                  <div class="knb">
                    <img src="@/assets/img/knb.png" style="width: 70px; height: 70px;" />
                    <h3 style="right: 20px;" class="display-6 text-white mb-3 animate__animated animate__fadeInDown">
                      عضو و کارگزار رسمی انجمن دانش بنیان
                    </h3>
                  </div>
                  <!-- <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما سطح کسب و کار شما را یک لیگ بالاتر می‌بریم
                  </p> -->
                  <router-link to="contact-us"
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">ارتباط با
                    ما</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="product-offer mb-30" style="height: 200px">
          <img class="img-fluid" src="@/assets/img/bourse-1.jpg" alt="" />
          <div class="offer-text">
            <h4 class="text-white mb-3">گواهی دانش بنیان</h4>
            <router-link to="knowledge-based-conditions" class="btn btn-primary" style="font-size: 12px">شرایط دانش بنیان
              را دارم!؟</router-link>
          </div>
        </div>
        <div class="product-offer mb-30" style="height: 200px">
          <img class="img-fluid" src="@/assets/img/Slide-R02.jpg" alt="" />
          <div class="offer-text">
            <h4 class="text-white mb-3">تجهیزات و ملزومات پزشکی</h4>
            <router-link to="process-obtaining-license-producing-medical" class="btn btn-primary"
              style="font-size: 12px">فرآیند دریافت مجوز و تولید کالای پزشکی</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" src="@/assets/css/bootstrap.v4.5.3.basco.min.css" scoped></style>
<style scoped>
.knb {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem !important;
}
</style>