import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    menus: [{
        name: "آشا",
        icon: "fa-solid fa-house",
        link: "/",
      },
      // submenus: [
      {
        name: "در باره ما",
        icon: "fa-solid fa-mouse",
        link: "about-us",
      },
      {
        name: "گالری تصاویر",
        icon: "fa-solid fa-mouse",
        link: "gallery",
      },
      // ],
      // },
      {
        name: "خدمات ما",
        icon: "fa-solid fa-briefcase",
        link: "services",
      },
      // submenus: [
      {
        name: "گواهی نامه ISO",
        icon: "fa-solid fa-mouse",
        link: "iso",
      },
      {
        name: "پروانه ساخت تجهیزات پزشکی",
        icon: "fa-solid fa-mouse",
        link: "jfdhg",
      },
      {
        name: "مهندسی تولید",
        icon: "fa-solid fa-mouse",
        link: "dsff",
      },
      {
        name: "دانش بنیان",
        icon: "fa-solid fa-mouse",
        link: "fgddfg",
      },
      {
        name: "آموزش",
        icon: "fa-solid fa-mouse",
        link: "fgdgf",
      },
      // ],
      // },
      {
        name: "تماس با ما",
        icon: "fa-solid fa-graduation-cap",
        link: "contact-us",
        // submenus: []
      },
    ],
    socials: [{
        title: "instagram",
        icon: "fa-brands fa-instagram",
        href: "https://www.instagram.com/ashac.ir/",
      },
      {
        title: "telegram",
        icon: "fa-brands fa-telegram",
        href: "http://t.me/",
      },
      {
        title: "linkedin",
        icon: "fab fa-linkedin",
        href: "https://www.linkedin.com/in/ashac-ir/",
      },
      {
        title: "whatsapp",
        icon: "fab fa-whatsapp",
        href: "https://api.whatsapp.com/send?phone=989151043668",
      },
    ],
    services: [
      {
        name: 'knowledge',
        title: 'دانش بنیان',
        id: 'knowledge-tab-md',
        controls: 'knowledge-md',
        items: [{
          title: 'دانش بنیان',
          img: 'danesh1.79dd5a6f.png',
          desc: '- چرا دانش بنیان شویم؟<br> - تسهیل اخذ گواهی دانش بنیان<br>- دریافت تسهیلات مختلف<br>- مشاوره حمایت های دانش بنیان<br>- مشاوره تولید دانش محور<br>  - قانون جهش تولید دانش بنیان<br>',
          style: 'padding_0 margin_right20'
        }
     ]
      },
      {
        name: 'license',
        title: 'پروانه ساخت',
        id: 'license-tab-md',
        controls: 'license-md',
        items: [{
          title: 'پروانه ساخت',
          img: 'qaza.ac5904cc.png',
          desc: '- برای تولید چه مجوزهایی لازم است؟<br> - تولید تجهیزات پزشکی<br>- مجوز واردات و صادرات محصولات غذایی و دارویی آرایشی و بهداشتی',
          style: 'padding_0 margin_right20'
        }
     ]
      },
      {
        name: 'iso',
        title: 'ایزو',
        id: 'iso-tab-md',
        controls: 'iso-md',
        items: [{
          title: 'ایزو',
          img: 'iso.bfa55c99.png',
          desc: '- ایزو چه کمکی به ما می کند؟<br>ISO 9001 (QUALITY MANAGEMENT SYSTEM)<br>ISO 13485 (MEDICAL DEVICE QUALITY MANAGEMENT SYSTEM)<br>IMS (INTEGRATED MANAGEMENT SYSTEM; 45001-14001-9001) <br>ISO 16949 (IATF: INTERNATIONAL AUTOMOTIVE TASK FORCE) <br>EFQM (EUROPEAN FOUNDATION FOR QUALITY MANAGEMENT) <br>CE (CONFORMITE EUROPEENNE)',
          style: 'padding_0 margin_right20'
        }
      ]
      }
      ,
      {
        name: 'support',
        title: 'شتاب دهی',
        id: 'support-tab-md',
        controls: 'support-md',
        items: [{
            title: 'آموزش سیستم های مدیریت کیفیت',
            img: 'asha.4f489db8.png',
            desc: '- سرمایه دارم! چی تولید کنم؟ آشا چه کمکی به شما میکند؟<br>- مزایای عضویت در پارک علم و فناوری<br>- خدمات مالکیت معنوی و فکری<br>- اخذ کارت بازرگانی و پروانه بهره برداری<br>- تدوین استراتژی های فروش و بازاریابی<br>- مطالعات امکان سنجی تولید(FS) <br>- تدوین طرح تجاری (BP)',
            style: 'padding_0 margin_right20'
          }
        ]
      }
      , {
        name: 'engineering',
        title: 'خدمات مهندسی',
        id: 'engineering-tab-md',
        controls: 'engineering-md',
        items: [{
          title: 'خدمات مهندسی',
          img: 'mohandes.e3423891.png',
          desc: '- چگونه طرح توجیهی تولید بنویسیم؟<br>- مدیریت ریسک و آنالیز ریسک چیست؟<br>- چگونگی بررسی بازار و تعیین استراتژی؟<br>- زمان سنجی و افزایش بهره وری<br>- برگزاری دوره های آموزشی<br>- پایش و برنامه ریزی تولید',
          style: 'padding_0 margin_right20'
        }
     ]
      }
    ],
    enamad: "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=465855&Code=mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=465855&Code=mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK' alt='' style='cursor:pointer' Code='mGoYW9Oajj8Y5887aGBPae4CJkOPjTwK'></a>"
  },
  getters: {},
  mutations: {},
  actions: {},
});