import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Anasayfa",
    component: Home,
  },
  {
    path: "/search",
    name: "Gelişmiş Arama",
    component: Search,
  },
  {
    path: "/about",
    name: "Hakkımızda",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
