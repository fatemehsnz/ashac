<template>
  <div class="container-fluid mb-3">
    <div class="row px-xl-5">
      <div class="col-lg-8 col-md-8">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mb-30 mb-lg-0"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
            <li data-target="#header-carousel" data-slide-to="3"></li>
            <li data-target="#header-carousel" data-slide-to="4"></li>
            <li data-target="#header-carousel" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner"
            style="
            box-shadow: 0 0 10px rgba(200, 200, 200, 0.15), 0 0 20px rgba(180, 180, 180, 0.2);"
          >
            <div
              class="carousel-item position-relative active"
              style="height: 430px "
            >
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/2.jpg"
                style="object-fit: cover ;"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb ">
                  <img
                    src="@/assets/img/KSTP.png"
                    class="animate-image"
                    style="width: 65px; height: 65px"
                  />
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  کارگزار رسمی پارک علم و فناوری خراسان
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/1.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb">
                  <img
                    src="@/assets/img/ferdowsi.png"
                    class="animate-image"
                    style="width: 65px; height: 100px"
                  />
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  کارگزار رسمی پارک علم و فناوری دانشگاه فردوسی
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/healthBack.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb">
                  <img
                    src="@/assets/img/healthPark.png"
                    class="animate-image"
                    style="width: 65px; height: 65px"
                  />
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  کارگزار رسمی پارک علم و فناوری سلامت
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/kng.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb">
                  <img
                    src="@/assets/img/knb.png"
                    class="animate-image"
                    style="width: 70px; height: 70px"
                  />
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  عضو و کارگزار رسمی انجمن دانش بنیان
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/medical.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb">
                  <img
                    src="@/assets/img/Amedal.png"
                    class="animate-image"
                    style="width: 65px; height: 65px"
                  />
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  کارگزار انجمن تولید کنندگان تجهیزات پزشکی
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/3.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="knb">
                  <h3
                    class="text-white mb-0 p-2 animate__animated slide-in-left"
                  >
                  شرکت منتخب نخستین جشنواره ملی سرآمد و هفته پژوهش
                  </h3>
                </div>
                <router-link
                  to="contact-us"
                  class="btn btn-outline-light py-2 px-4 animate__animated animate__fadeInUp"
                  >ارتباط با ما</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="product-offer mb-30" style="height: 200px ;
        box-shadow: 0 0 10px rgba(200, 200, 200, 0.15), 0 0 20px rgba(180, 180, 180, 0.2);">
          <img class="img-fluid" src="@/assets/img/danesh.jpg" alt="" />
          <div class="offer-text">
            <h4 class="text-white mb-3">گواهی دانش بنیان</h4>
            <router-link
              to="knowledge-based-conditions"
              class="btn btn-primary"
              style="font-size: 12px"
              >شرایط دانش بنیان را دارم!؟</router-link
            >
          </div>
        </div>
        <div class="product-offer mb-30" style="height: 200px ;
        box-shadow: 0 0 10px rgba(200, 200, 200, 0.15), 0 0 20px rgba(180, 180, 180, 0.2);">
          <img class="img-fluid" src="@/assets/img/tajhiz2.jpg" alt="" />
          <div class="offer-text">
            <h4 class="text-white mb-3">تجهیزات و ملزومات پزشکی</h4>
            <router-link
              to="process-obtaining-license-producing-medical"
              class="btn btn-primary"
              style="font-size: 12px"
              >فرآیند دریافت مجوز و تولید کالای پزشکی</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style
  lang="css"
  src="@/assets/css/bootstrap.v4.5.3.basco.min.css"
  scoped
></style>
<style scoped>
.knb {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin-bottom: 9rem;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  height: 100px;
}
/* تعریف انیمیشن سفارشی */
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* اعمال انیمیشن */
.slide-in-left {
  animation: slide-in-left 1s ease-out;
}
/* انیمیشن تصویر */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-image {
  animation: fade-in 1s ease-in-out;
}
@media (max-width: 380px) {
  .knb {
    flex-direction: column;
    padding: 0px;
  }
  .knb h3 {
    font-size: 20px;
  }
}
</style>
