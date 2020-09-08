import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/direct-message",
    name: "Direct",
    component: () =>
      import(/* webpackChunkName: "direct-message" */ "../views/direct-message")
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
      children:[
        {
          path: "",
          name: "ProfilePost",
          component: () =>
          import(/* webpackChunkName: "profilepost" */ "../views/profile/post")
        },
        {
          path: "igtv",
          name: "ProfileIGTV",
          component: () =>
          import(/* webpackChunkName: "profileigtv" */ "../views/profile/igtv")
        },
        {
          path: "tag",
          name: "ProfileTag",
          component: () =>
          import(/* webpackChunkName: "profiletag" */ "../views/profile/tag")
        },
        {
          path: "save",
          name: "ProfileSave",
          component: () =>
          import(/* webpackChunkName: "profilesave" */ "../views/profile/save")
        }
      ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
