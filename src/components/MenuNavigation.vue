<template>
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
    <div class="container-fluid">
      <!-- ردیف اصلی: سه بخش به صورت افقی -->
      <div class="d-flex justify-content-between align-items-center py-2">
        <!-- قسمت سوم: تصویر -->
        <a href="index.html" class="logo-container">
          <img
            src="@/assets/img/logo-header.png"
            alt="Logo"
            class="logo-image"
          />
        </a>

        <!-- قسمت دوم: شماره تلفن و ایمیل -->
        <div class="d-flex flex-column align-items-center contact-info">
          <a href="tel:09007202530" class="text-dark px-3 py-1">
            <font-awesome-icon icon="fa-solid fa-phone" aria-hidden="true" />
            <i class="bi bi-telephone"></i> 09007202530
          </a>
          <a href="mailto:ashagroup.c@gmail.com" class="text-dark px-3 py-1">
            <font-awesome-icon icon="fa-solid fa-envelope" aria-hidden="true" />
            <i class="bi bi-envelope"></i> ashagroup.c@gmail.com
          </a>
        </div>

        <!-- قسمت اول: منو -->
        <div
          class="d-flex flex-row-reverse align-items-center justify-content-center"
        >
          <button class="openbtn" onclick="openNav()">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <router-link to="/about-us" class="nav-link text-dark px-3 py-2"
            >درباره ما</router-link
          >
          <router-link to="/contact-us" class="nav-link text-dark px-3 py-2"
            >تماس با ما</router-link
          >
          <router-link to="/download" class="nav-link text-dark px-3 py-2"
            >دانلود</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["menus"]),
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="scss" scoped src="@/assets/scss/responsive.basco.scss"></style>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 9px;
}
.logo-image {
  max-height: 78px;
  width: auto;
  transition: max-height 0.3s ease; /* انیمیشن نرم برای تغییر اندازه */
}
.contact-info a {
  font-size: 16px;
  transition: font-size 0.3s ease; /* انیمیشن نرم برای تغییر اندازه متن */
}
/* تنظیمات عمومی برای لینک‌ها */
.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: orange;
}

.text-dark {
  color: rgb(242, 232, 198);
}

.text-dark:hover {
  color: orange;
}

/* برای نمایش افقی */
.d-flex {
  display: flex;
}

/* اطمینان از اینکه بخش‌ها در یک ردیف نمایش داده شوند */
.d-flex.justify-content-between {
  justify-content: space-between;
  width: 100%;
}

/* برای فاصله بیشتر بین هر بخش */
.d-flex > * {
  margin: 0 10px; /* فاصله افقی بین بخش‌ها */
}

/* تنظیم flex-row-reverse برای ترتیب از راست به چپ */
.d-flex.flex-row-reverse {
  flex-direction: row-reverse;
}

/* اضافه کردن وسط‌ چینی عمودی */
.align-items-center {
  align-items: center;
}

/* برای تبلت‌ها */
@media (min-width: 768px) and (max-width: 1024px) {
  /* فقط منوی همبرگر باقی می‌ماند */
  /* مخفی کردن بقیه لینک‌ها */
  .nav-link {
    display: none;
  }
}

/* برای موبایل ها */
@media (max-width: 768px) {
  /* منوی همبرگر در سمت راست باقی بماند */
  .openbtn {
    position: absolute;
    right: 15px; /* قرار دادن همبرگر در سمت راست */
    top: 50%; /* وسط عمودی صفحه */
    transform: translateY(-50%); /* برای وسط‌چینی عمودی دقیق */
  }

  /* مخفی کردن بقیه لینک‌ها */
  .nav-link {
    display: none;
  }
  .logo-image {
    max-height: 60px; /* کوچک‌تر کردن لوگو برای موبایل */
  }

  .contact-info {
    flex-direction: column; /* تغییر شماره و ایمیل به حالت عمودی */
    align-items: flex-start; /* چسباندن به سمت چپ */
  }
  .contact-info a {
    font-size: 13px; /* کوچک‌تر کردن بیشتر متن شماره و ایمیل */
    margin-top: 5px; /* فاصله بین شماره و ایمیل */
  }
}

/*  برای صفحه‌های با ارتفاع کمتر از 600 */
@media (max-width: 500px) {
  .contact-info {
    flex-direction: column; /* تغییر شماره و ایمیل به حالت عمودی */
    align-items: flex-start; /* چسباندن به سمت چپ */
  }
  .contact-info a {
    font-size: 11px; /* کوچک‌تر کردن بیشتر متن شماره و ایمیل */
    margin-top: 0px;
  }
}
@media (max-width: 490px) {
  .d-flex {
    flex-wrap: wrap; /* فعال کردن قابلیت رفتن به خط بعد */
  }

  .logo-container {
    margin-bottom: 10px; /* فاصله از بخش زیرین */
  }
  .contact-info {
    flex-direction: row;
    gap: 10px; /* فاصله بین تلفن و ایمیل */
  }

  .contact-info a {
    font-size: 10px; /* کوچک‌تر کردن فونت */
  }
}
</style>
