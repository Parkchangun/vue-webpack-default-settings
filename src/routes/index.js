import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/routes/Home";
import TestRoute from "@/routes/TestRoute";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/test",
      component: TestRoute
    }
  ]
});
