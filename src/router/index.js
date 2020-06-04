import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import loanInspectionIndex from "@/views/loanInspection/index";
import creditFirstIndex from "@/views/loanInspection/creditFirst/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/almHome"
  },
  {
    path: "/almHome",
    name: "Home",
    // component: resolve => (["@/views/home/index.vue"], resolve)
    component: Home,
    meta: {
      title: "主页"
    },
    children: []
  },
  {
    path: "/almHome/loanInspection",
    name: "loanInspectionIndex",
    component: loanInspectionIndex,
    meta: {
      title: "贷后检查列表",
      tag: "operateIcon"
    },
    children: [
      {
        path: "/almHome/loanInspection/creditFirstIndex",
        name: "creditFirstIndex",
        component: creditFirstIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave"
        }
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
