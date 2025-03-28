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
        <a href="index.html" class="px-3">
          <img
            src="@/assets/img/logo-header.png"
            alt="Logo"
            style="max-height: 78px; width: 282px"
          />
        </a>

        <!-- قسمت دوم: شماره تلفن و ایمیل -->
        <div
          class="d-flex flex-row-reverse align-items-center justify-content-center"
        >
          <a href="tel:09007202530" class="text-dark px-3 py-2">
            <font-awesome-icon icon="fa-solid fa-phone" aria-hidden="true" />
            <i class="bi bi-telephone"></i> 09007202530
          </a>
          <a href="mailto:ashagroup.c@gmail.com" class="text-dark px-3 py-2">
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
  padding-top: 20px;
  padding-bottom: 20px;
}
/* تنظیمات عمومی برای لینک‌ها */
.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: orange;
}

.text-dark {
  color: white;
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

/* برای جلوگیری از چسبیدن به بالا، پایین، چپ و راست */
.container-fluid {
  padding-left: 15px;
  padding-right: 15px;
}

/* برای فاصله بیشتر بین هر بخش */
.d-flex > * {
  margin: 0 10px; /* فاصله افقی بین بخش‌ها */
}

/* تنظیم flex-row-reverse برای ترتیب از راست به چپ */
.d-flex.flex-row-reverse {
  flex-direction: row-reverse;
}

/* اضافه کردن وسط‌چینی عمودی */
.align-items-center {
  align-items: center;
}

/* برای موبایل ها */
@media (max-width: 768px) {
  /* منوی همبرگر در سمت راست باقی بماند */
  .openbtn {
    display: inline-block; /* نمایش منوی همبرگر */
    position: absolute;
    right: 15px; /* قرار دادن همبرگر در سمت راست */
    top: 50%; /* وسط عمودی صفحه */
    transform: translateY(-50%); /* برای وسط‌چینی عمودی دقیق */
  }

  /* قسمت اول منو باید مخفی شود (لینک‌های دیگر) */
  .nav-link {
    display: none; /* مخفی کردن لینک‌ها */
  }

  /* قسمت دوم و سوم (شماره تلفن و ایمیل و لوگو) به صورت عمودی نمایش داده شوند */
  .d-flex.flex-row-reverse.align-items-center {
    flex-direction: column; /* نمایش عمودی */
    align-items: flex-start; /* تراز به سمت چپ */
    width: 100%; /* عرض کامل */
    margin-left: 15px; /* فاصله از سمت چپ */
  }

  /* شماره تلفن و ایمیل به صورت عمودی نمایش داده شوند */
  .d-flex.flex-row-reverse.align-items-center a {
    margin-bottom: 10px; /* فاصله بین شماره تلفن و ایمیل */
  }

  /* قسمت لوگو هم عمودی در کنار شماره تلفن نمایش داده شود */
  .d-flex.flex-row-reverse.align-items-center img {
    margin-bottom: 10px; /* فاصله بین لوگو و شماره تلفن */
  }
}

/* برای تبلت‌ها */
@media (min-width: 768px) and (max-width: 1024px) {
  /* شماره تلفن و ایمیل به صورت عمودی زیر هم قرار می‌گیرند */
  #contact-info {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* فقط منوی همبرگر باقی می‌ماند */
  #menu {
    display: flex;
    justify-content: center;
  }

  /* مخفی کردن بقیه لینک‌ها */
  .nav-link {
    display: none;
  }

  /* برای اضافه کردن فاصله بیشتر بین شماره تلفن و ایمیل */
  #contact-info a {
    margin-bottom: 10px;
  }
}
</style>
