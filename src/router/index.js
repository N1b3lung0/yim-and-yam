import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const HOME = {
  path: "/",
  name: "Home",
};

export const ROUTES = {
  HOME,
};

const routes = [
  {
    path: HOME.path,
    name: HOME.name,
    component: () => import("@/views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
