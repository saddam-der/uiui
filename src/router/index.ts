import Vue from "vue";
import store from "../store/index";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

/**
 * route level code-splitting
 * this generates a separate chunk (about.[hash].js) for this route
 * which is lazy-loaded when the route is visited.
 * @param {string} page - Folder name
 * @param {string} page - File name
 */

const absoluteUrl = (module: string, page: string): object => (): object =>
  import("../views/" + module + "/" + page + ".vue");

// eslint-disable-next-line
const isAuthenticated = (to: any, from: any, next: any) => {
  if (store.getters["user/loginStatus"]) {
    return next();
  }
  return next("/");
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Auth",
    component: absoluteUrl("Auth", "Auth")
  },
  {
    path: "/summary",
    name: "Summary",
    component: absoluteUrl("Summary", "Summary"),
    beforeEnter: isAuthenticated
  },
  {
    path: "/members",
    name: "Members",
    component: absoluteUrl("Members", "Members"),
    beforeEnter: isAuthenticated
  }
  // {
  //   path: "*",
  //   name: "error-404",
  //   component: absoluteUrl("Home.vue"),
  //   beforeEnter: isAuthenticated
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
