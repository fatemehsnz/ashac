import {
  createRouter,
  createWebHashHistory, 
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import( /* webpackChunkName: "home" */ "@/views/MainPage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import( /* webpackChunkName: "AboutUs" */ "@/views/AboutUs.vue")
  },
  {
    path: "/services",
    name: "services",
    component: () => import( /* webpackChunkName: "services" */ "@/views/ServiceVisulize.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import( /* webpackChunkName: "404" */ '@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "sidebar__nav-item--active",
});

export default router;