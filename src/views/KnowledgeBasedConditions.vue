<template>
  <div class="container dir-rtl ">
    <h1 class="title-color">شرایط دانش بنیان شدن و ثبت شرکت دانش بنیان</h1>
    <p class="text-white justify-text ">
      به طور کلی "دانش بنیان" به محصول یا خدمت تعلق می‌گیرد و برای اینکه
      محصول یا خدمت خود را دانش بنیان کنید، حتماً باید شرکت داشته باشید و
      درواقع شخصیت حقوقی باشید.<br />
      به شرکت یا موسسه‌ای که از لحاظ فنی، مالی و سیستمی پارامترهای مورد
      نظر آیین‌نامه ارزیابی شرکت‌های دانش بنیان را دارا باشد، دانش‌بنیان
      گفته می‌شود.<br /><br />
      ایجاد شرکت دانش‌بنیان، یا ثبت شرکت دانش‌بنیان امتیازات و مزایای
      بسیاری در راستای گسترش تولیدات دانش‌بنیان و توسعه محصولات و خدمات
      شرکت در پی خواهد داشت.
    </p>
  </div>

<div class="container dir-rtl">
    <h1 class="title-color">معیارهای ارزیابی شرکت‌ها، کالاها و خدمات دانش بنیان:</h1>
    <p class="text-white justify-text ">
      شرکت‌های متقاضی باید به نکات زیر توجه نمایند و در نظر داشته باشند که محصولات و کالاهای
      عرضه شده، می‌بایست تمامی این خصوصیات و شرایط را در بر داشته باشد:
    </p>
    <ul class="custom-list justify-text ">
      <li>
        <div class="highlight">شرط تولید:</div> 
        محصول ارائه شده می‌بایست در فرایند تولید باشد و یا حداقل در حد نمونه آزمایشگاهی ساخته شده باشد.<br>
        در مورد خدمت نیز، اسنادی رسمی مبتنی بر فروش این خدمات بایستی وجود داشته باشد. یعنی حداقل یک
        بار خدمت مورد نظر به صورت رسمی انجام شده باشد.
      </li>
      <li>
        <div class="highlight">سطح فناوری:</div> 
        خود محصول باید به سبب پیچیدگی‌های فنی سخت باشد.<br>
        فرایند تولید محصول نیز باید شامل پیچیدگی باشد.
      </li>
      <li>
        <div class="highlight">تسلط بر دانش فنی:</div> 
        دستیابی به پیچیدگی های فنی باید در گرو داشتن یک گروه متخصص توسعه و تحقیق باشد و از اول تا اخر روند تولید یا انجام خدمت ، مستنداتی برای ارائه وجود داشته باشد.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KnowledgeBaseCompany",
};
</script>

<style scoped>
.container {
  background-color: #242323;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
}
.title-color {
  color: #f5841a; 
}
.custom-list {
  list-style-type: disc; /* نمایش نقطه (bullet) */
  padding-left: 20px;
}

.custom-list li {
  margin-bottom: 10px; 
  color: #ffffff; 
}
.custom-list li::marker {
  color: #f5841a; /* رنگ نقاط لیست */
}
.highlight {
  color: #f5841a; 
  font-weight: bold; 
}
.justify-text {
  text-align: justify; /* تراز کردن متن به صورت یکنواخت */
}

/* Media Queries برای تغییر فونت‌ها و سایز‌ها در نمایشگرهای مختلف */
@media (max-width: 768px) {
  .container-fluid {
    padding: 15px;
  }
  h1 {
    font-size: 1.5rem;
  }
  p, .custom-list li {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .container-fluid {
    padding: 10px;
  }
  h1 {
    font-size: 1.2rem;
  }
  p, .custom-list li {
    font-size: 0.8rem;
  }
}
</style>
