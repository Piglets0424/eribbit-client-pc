import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";

// 路由规则
const routes: Array<RouteRecordRaw> = [
  //#region
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  //#endregion
];

// 创建路由实例
const router = createRouter({
  // 使用的时hash的路由模式
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
