<template>
  <div class="container-fluid py-5 px-5">
    <div class="text-center mx-auto mb-5" style="max-width: 600px">
      <h1 class="display-5 mb-0" style="color: rgb(242, 232, 198)">چرا ما!!!</h1>
      <hr class="w-25 mx-auto bg-primary" />
    </div>
    <div class="container dir-rtl my-5">
      <div class="row ">
        <!-- ستون اول -->
        <div class="col-md-4">
          <div class="triangle mb-3">
            <i class="fa fa-cubes fs-4 text-white"></i>
          </div>
          <h3>چرا مشاور؟</h3>
          <h5 style="color: rgb(242, 232, 198)">
            هر سازمان، برای رشد مستمر،<br />
            همواره نیاز به نگاه از بیرون دارد:
          </h5>
          <p class="mb-0 text-justify">
             همانند یک بازی شطرنج، کسی که تماشا می کند، معمولا پیشنهاد حرکت های بهتری دارد. نگاه از بیرون به اجزای سازمان، بی طرفانه و منطقی تر بوده و تصمیمات واقع گرایانه خواهد بود. عموما انجام فعالیت های برون سپاری و پروژه ای، از استخدام نیروی ثابت و همیشگی، کم هزینه تر می باشد. تمرکز مشاور تنها روی پروژه همکاری بوده و درگیر سایر مسائل سازمان نیست، لذا سرعت پیشرفت بالا می باشد
          </p>
          <br />
          <h5 style="color: rgb(242, 232, 198)">شبکه سازی و ارتباطات</h5>
          <p class="mb-0 text-justify">
          مشاور می تواند پلی باشد برای ارتباط با سایر صنایع و شبکه ایجاد شده منجر به خلق موقعیت های جدید در کسب و کار گردد. مشاور عموما دیدگاهی باز از مشکلات مشابه در صنایع مختلف دارد و می تواند راه حل های مناسبتری ارائه دهد.
            </p>
        </div>

        <!-- ستون دوم (تصویر) -->
        <div class="col-md-4 ">
          <img src="@/assets/img/chess.jpg" class="img-fluid" style="max-width: 100%; height: auto;" alt="مشاوره">
        </div>

        <!-- ستون سوم -->
        <div class="col-md-4">
          <div class="triangle mb-3">
            <i class="far fa-smile-beam fs-4 text-white"></i>
          </div>
          <h3>چرا آشا؟</h3>
          <h5 style="color: rgb(242, 232, 198)">
            گروه مشاوره آشا صرفا یک گروه دریافت مجوز نیست!
          </h5>
          <p class="mb-0 text-justify">
          بلکه اعضای اصلی آن، دارای تجربه تولیدی و دانش فنی لازم در زمینه تولید تجهیزات پزشکی بوده و با چالش های موجود در تولید آشنا می باشند. لذا، در انجام یک پروژه، چه دریافت مجوز تولید، چه پیاده سازی سیستم های مدیریت کیفیت، دانش بنیان و ...، رویکرد ما تولید محور، کاهش دغدغه های مدیریتی، بهینه سازی و کارآیی فرآیندهای سازمان می باشد.
          </p>
          <br />
          <p class="mb-0 text-justify">
          بواسطه پتانسیل موجود در اعضای گروه و تجارب آنها، هنگام ورود به یک سازمان، مجموعه ای از خدمات فنی و مهندسی قابل ارائه می باشد، به همین دلیل، افتخار می نماییم که با شرکت هایی که همکاری داشته ایم، عموما ارتباط ما قطع نشده وهمواره در پروژه ها و اشکال مختلف در کنار آنها بوده‌ایم.
          </p>
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
  scoped
  src="@/assets/css/bootstrap.v4.5.3.basco.min.css"
></style>
<style lang="scss" scoped src="@/assets/scss/consultancy.scss"></style>
<style lang="scss" scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent; /* نیمه راست مثلث */
  border-right: 30px solid transparent; /* نیمه چپ مثلث */
  border-bottom: 60px solid #f5841a;

  display: inline-block
}
</style>
