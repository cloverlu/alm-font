import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import loanInspectionIndex from "@/views/loanInspection/index";
import definite16 from "@/views/loanInspection/components/definite-16";
import creditRoutineIndex from "@/views/loanInspection/creditRoutine/definite-12";
import definite13 from "@/views/loanInspection/components/definite-13";
import definite11 from "@/views/loanInspection/components/definite-11";
import definite10 from "@/views/loanInspection/components/definite-10";
import definite5 from "@/views/loanInspection/creditRoutine/definite-5";
import definite3 from "@/views/loanInspection/components/definite-3";
import definite4 from "@/views/loanInspection/components/definite-4";
import definite1 from "@/views/loanInspection/creditFirst/definite-1";
import definite2 from "@/views/loanInspection/creditFirst/definite-2";
import newly1 from "@/views/loanInspection/dailyInspection/newly-1";
import creditOverallIndex from "@/views/loanInspection/creditOverall/newly18";
import definite89 from "@/views/loanInspection/creditOverall/credit89";
import definite6 from "@/views/loanInspection/creditOverall/definite6";
import definite17 from "@/views/loanInspection/creditOverall/definite-17";

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
        path: "1/:type/:bizId",
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
            name: "firstDefinite2",
            component: definite2,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-16
          {
            path: "definite16",
            name: "firstDefinite16",
            component: definite16,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-3
          {
            path: "definite3",
            name: "firstDefinite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            }
          }
        ]
      },
      // 类型2
      {
        path: "2/:type/:bizId",
        name: "creditRoutineIndex",
        component: creditRoutineIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          // 申请明细13
          {
            path: "definite13",
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
            path: "definite11",
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
            path: "definite10",
            name: "definite10",
            component: definite10,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细5
          {
            path: "definite5",
            name: "definite5",
            component: definite5,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            },
            children: []
          },
          // 申请明细3
          {
            path: "definite3",
            name: "routineDefinite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            },
            children: []
          },
          //检查申请明细-4
          {
            path: "definite4",
            name: "definite4",
            component: definite4,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            }
          }
        ]
      },
      //类型3
      //新增1-8
      {
        path: "3/:type/:bizId",
        name: "creditOverallIndex",
        component: creditOverallIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          //检查申请明细-13
          {
            path: "definite13",
            name: "overalltDefinite13",
            component: definite13,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-11
          {
            path: "definite11",
            name: "overalltDefinite11",
            component: definite11,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-10
          {
            path: "definite10",
            name: "overalltDefinite10",
            component: definite10,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细-8/检查申请明细-9
          {
            path: "definite89",
            name: "overalltDefinite89",
            component: definite89,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细6
          {
            path: "definite6",
            name: "overalltDefinite6",
            component: definite6,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细17
          {
            path: "definite17",
            name: "overalltDefinite17",
            component: definite17,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细3
          {
            path: "definite3",
            name: "overalltDefinite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            }
          }
        ]
      },
      // 类型6
      {
        path: ":type/:bizId",
        name: "dailyInspectionIndex",
        component: newly1,
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

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
