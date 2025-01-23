import Vue from "vue";
import VueRouter from "vue-router";
import SchoolView from "@/views/SchoolView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: SchoolView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
