<template>
  <div class="container py-5 dir-rtl text-right">
    <h2 class="text-center mb-4" style="color: rgb(242, 232, 198)">فایل‌های قابل دانلود</h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="(file, index) in files" :key="index">
        <div class="card h-100 shadow-lg">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ file.title }}</h5>
            <p class="card-text text-muted mb-2">قیمت: {{ file.price }} تومان</p>
            <p class="card-text flex-grow-1">{{ file.description }}</p>
            <a :href="file.link" class="btn btn-primary mt-auto" target="_blank">خرید و دانلود</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          title: "فایل شماره ۱",
          price: "۱۵۰۰۰",
          description: " روش اجرایی آموزش ",
          link: "https://filemas.com/product/%d8%b1%d9%88%d8%b4-%d8%a7%d8%ac%d8%b1%d8%a7%db%8c%db%8c-%d8%a2%d9%85%d9%88%d8%b2%d8%b4/",
        },
        {
          title: "فایل شماره ۲",
          price: "۲۰۰۰۰",
          description: "راهنمای کامل مجوز تجهیزات پزشکی",
          link: "https://filemas.com/product/test-link-2",
        },
        // تا ۱۰ فایل همینجوری اضافه کن
      ],
    };
  },
};
</script>

<style scoped>
.card-title {
  color: #f5841a;
}
.btn-primary {
  background-color: #f5841a;
  border: none;
}
.btn-primary:hover {
  background-color: #da7315;
}
</style>
