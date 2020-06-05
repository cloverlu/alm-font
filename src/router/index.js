import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import loanInspectionIndex from "@/views/loanInspection/index";
import creditFirstIndex from "@/views/loanInspection/creditFirst/index";
import creditRoutineIndex from "@/views/loanInspection/creditRoutine/index";

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
      // 头部标题，根据当前设计页的头部决定
      title: "贷后检查列表",
      // 头部右上角的显示：1、图标：operateIcon；2、保存:resave；3、下一步：footerNext
      tag: "operateIcon",
      // 是否带上一步下一步
      footer: false
    },
    children: [
      //类型1
      {
        path: "/almHome/loanInspection/creditFirst/:bizId",
        name: "creditFirstIndex",
        component: creditFirstIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: []
      },
      // 类型2
      {
        path: "/almHome/loanInspection/creditRoutine/:bizId",
        name: "creditRoutineIndex",
        component: creditRoutineIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: []
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
