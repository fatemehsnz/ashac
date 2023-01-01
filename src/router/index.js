import {
  createRouter,
  createWebHashHistory, 
} from "vue-router";

const routes = [{
    path: "/",
    name: "home",
    component: () => import( /* webpackChunkName: "home" */ "@/views/MainPage.vue")
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