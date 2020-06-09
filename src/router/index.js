import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import loanInspectionIndex from "@/views/loanInspection/index";
import creditFirstIndex from "@/views/loanInspection/creditFirst/definite-1";
import creditRoutineIndex from "@/views/loanInspection/creditRoutine/definite-12";
import definite13 from "@/views/loanInspection/creditRoutine/definite-13";
import definite11 from "@/views/loanInspection/creditRoutine/definite-11";
import definite10 from "@/views/loanInspection/creditRoutine/definite-10";
import definite5 from "@/views/loanInspection/creditRoutine/definite-5";
import definite3 from "@/views/loanInspection/creditRoutine/definite-3";
import definite1 from "@/views/loanInspection/creditFirst/definite-1";
import definite2 from "@/views/loanInspection/creditFirst/definite-2";

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
      //检查申请明细-1
      {
        path: ":type/:bizId",
        name: "creditFirstIndex",
        component: definite1,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          //检查申请明细-2
          {
            path: "definite2",
            name: "definite2",
            component: definite2,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-3
          {
            path: "definite3",
            name: "definite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          }
        ]
      },
      // 类型2
      {
        path: "/almHome/loanInspection/creditRoutine/:bizId",
        name: "creditRoutineIndex",
        component: definite10,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          // 申请明细13
          {
            path: "/almHome/loanInspection/creditRoutine/definite13/:bizId",
            name: "definite13",
            component: definite13,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细11
          {
            path: "/almHome/loanInspection/creditRoutine/definite11/:bizId",
            name: "definite11",
            component: definite11,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细10
          {
            path: "/almHome/loanInspection/creditRoutine/definite10/:bizId",
            name: "definite10",
            component: definite10,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细11
          {
            path: "/almHome/loanInspection/creditRoutine/definite5/:bizId",
            name: "definite5",
            component: definite5,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细11
          {
            path: "/almHome/loanInspection/creditRoutine/definite3/:bizId",
            name: "definite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          }
        ]
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

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
