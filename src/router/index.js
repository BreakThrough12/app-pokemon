import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",

    component: () =>
      import(/* webpackChunkName: "solicitud" */ "../components/HomePage.vue"),
  },
  {
    path: "/Main",
    name: "Main",

    component: () =>
      import(/* webpackChunkName: "solicitud" */ "../view/MainView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;
