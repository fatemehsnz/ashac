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
        title: "eitta",
        image :require('@/assets/img/eitaa-icon-colorful.png'),
        href: "https://eitaa.com/Ashagroup",
      },
      {
        title: "telegram",
        icon: "fa-brands fa-telegram",
        href:"https://t.me/armanshetab",
      },
      {
        title: "whatsapp",
        icon: "fab fa-whatsapp",
        href: "https://api.whatsapp.com/send?phone=989151043668",
      },
      {
        title: "instagram",
         icon: "fa-brands fa-instagram",
         href: "https://www.instagram.com/ashac.ir/",
      },
      {
        title: "linkedin",
        icon: "fab fa-linkedin",
        href: "https://www.linkedin.com/in/ashac-ir/",
      }
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
          desc: [
            { text: 'چرا دانش بنیان شویم؟', link: 'link1' },
            { text: 'تسهیل اخذ گواهی دانش بنیان', link: 'link2' },
            { text: 'دریافت تسهیلات مختلف', link: 'link3' },
            { text: 'مشاوره حمایت های دانش بنیان', link: 'link4' },
            { text: 'مشاوره تولید دانش محور', link: 'link5' },
            { text: 'قانون جهش تولید دانش بنیان', link: 'link6' }
        ],
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
          desc: [
            { text: 'برای تولید چه مجوزهایی لازم است؟', link: 'link1' },
            { text: 'تولید تجهیزات پزشکی', link: 'link2' },
            { text: 'مجوز واردات و صادرات محصولات غذایی و دارویی آرایشی و بهداشتی', link: 'link3' }
          ],
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
          desc: [
            { text: 'ISO 9001 (QUALITY MANAGEMENT SYSTEM)', link: 'link1' },
            { text: 'ISO 13485 (MEDICAL DEVICE QUALITY MANAGEMENT SYSTEM)', link: 'link2' },
            { text: 'IMS (INTEGRATED MANAGEMENT SYSTEM; 45001-14001-9001)', link: 'link3' },
            { text: 'ISO 16949 (IATF: INTERNATIONAL AUTOMOTIVE TASK FORCE)', link: 'link4' },
            { text: 'EFQM (EUROPEAN FOUNDATION FOR QUALITY MANAGEMENT)', link: 'link5' },
            { text: 'CE (CONFORMITE EUROPEENNE)', link: 'link6' }
        ],
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
            desc: [
              { text: 'سرمایه دارم! چی تولید کنم؟ آشا چه کمکی به شما میکند؟', link: 'link1' },
              { text: 'مزایای عضویت در پارک علم و فناوری', link: 'link2' },
              { text: 'خدمات مالکیت معنوی و فکری', link: 'link3' },
              { text: 'اخذ کارت بازرگانی و پروانه بهره برداری', link: 'link4' },
              { text: 'تدوین استراتژی های فروش و بازاریابی', link: 'link5' },
              { text: 'مطالعات امکان سنجی تولید(FS)', link: 'link6' },
              { text: 'تدوین طرح تجاری (BP)', link: 'link7' }
          ],
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
          desc: [
            { text: 'چگونه طرح توجیهی تولید بنویسیم؟', link: 'link1' },
            { text: 'مدیریت ریسک و آنالیز ریسک چیست؟', link: 'link2' },
            { text: 'چگونگی بررسی بازار و تعیین استراتژی؟', link: 'link3' },
            { text: 'زمان سنجی و افزایش بهره وری', link: 'link4' },
            { text: 'برگزاری دوره های آموزشی', link: 'link5' },
            { text: 'پایش و برنامه ریزی تولید', link: 'link6' }
        ],
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