<template>
  <div class="container-fluid mb-3">
    <div class="row px-xl-5">
      <div class="col-lg-8 col-md-8">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mb-30 mb-lg-0"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div
              class="carousel-item position-relative active"
              style="height: 430px"
            >
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/1.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                    تجربه و تخصص
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما خدمات مشاوره خود را متناسب با نیاز شرکت شما طراحی می‌کنیم
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >تماس با ما</a
                  >
                </div>
              </div>
            </div>
            <div class="carousel-item position-relative" style="height: 430px">
              <img
                class="position-absolute w-100 h-100"
                src="@/assets/img/2.jpg"
                style="object-fit: cover"
              />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                  تعهد ما
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما اینجا هستیم تا موفقیت های شرکت شما را با هم جشن بگیریم
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >تماس با ما</a
                  >
                </div>
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
                <div class="p-3" style="max-width: 700px">
                  <h1
                    class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                  >
                  اعتماد شما
                  </h1>
                  <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                    .ما سطح کسب و کار شما را یک لیگ بالاتر می‌بریم
                  </p>
                  <a
                    class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                    href="#"
                    >تماس با ما</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 ">
        <div class="product-offer mb-30" style="height: 200px">
          <img class="img-fluid" src="@/assets/img/Slide-R01.jpg" alt="" />
          <div class="offer-text">
            <h3 class="text-white mb-3">گواهی دانش بنیان</h3>
            <a href="" class="btn btn-primary" style="font-size: 12px;">شرایط دانش بنیان را دارم!؟</a>
          </div>
        </div>
        <div class="product-offer mb-30" style="height: 200px">
          <img class="img-fluid" src="@/assets/img/Slide-R02.jpg" alt="" />
          <div class="offer-text">
            <h3 class="text-white mb-3">تجهیزات و ملزومات پزشکی</h3>
            <a href="" class="btn btn-primary" style="font-size: 12px;">فرآیند دریافت مجوز و تولید کالای پزشکی</a>
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
