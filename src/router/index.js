import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import loanInspectionIndex from "@/views/loanInspection/index";
import definite16 from "@/views/loanInspection/components/definite-16";
import definite18 from "@/views/loanInspection/components/definite-18";
import creditRoutineIndex from "@/views/loanInspection/creditRoutine/definite-12";
import definite13 from "@/views/loanInspection/components/definite-13";
import definite11 from "@/views/loanInspection/components/definite-11";
import definite10 from "@/views/loanInspection/components/definite-10";
import definite5 from "@/views/loanInspection/creditRoutine/definite-5";
import definite7 from "@/views/loanInspection/components/definite-7";
import definite3 from "@/views/loanInspection/components/definite-3";
import definite4 from "@/views/loanInspection/components/definite-4";
import definite1 from "@/views/loanInspection/creditFirst/definite-1";
import definite2 from "@/views/loanInspection/creditFirst/definite-2";
import newly1 from "@/views/loanInspection/dailyInspection/newly-1";
import newly2 from "@/views/loanInspection/dailyInspection/newly-2";
import newly3 from "@/views/loanInspection/dailyInspection/newly-3";
import newly4 from "@/views/loanInspection/dailyInspection/newly-4";
import newly5 from "@/views/loanInspection/dailyInspection/newly-5";
import creditOverallIndex from "@/views/loanInspection/creditOverall/newly18";
import definite89 from "@/views/loanInspection/creditOverall/credit89";
import definite6 from "@/views/loanInspection/creditOverall/definite6";
import definite17 from "@/views/loanInspection/creditOverall/definite-17";
import repaymentInspectionIndex from "@/views/loanInspection/repaymentInspection/newly-9";
import processing4 from "@/views/loanInspection/repaymentInspection/processing2-4";
import definite14 from "@/views/loanInspection/fastCreditFirst/definite-14";

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
          //检查申请明细-17
          {
            path: "definite18",
            name: "routineDefinite18",
            component: definite18,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
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
      // 类型4
      {
        path: "4/:type/:bizId",
        name: "repaymentInspectionIndex",
        component: repaymentInspectionIndex,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          //检查申请明细-7
          {
            path: "definite7",
            name: "repaymentInspectionDefinite7",
            component: definite7,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 流程2-4
          {
            path: "processing4",
            name: "processing4",
            component: processing4,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            }
          }
        ]
      },
      // 类型5
      {
        path: "5/:type/:bizId",
        name: "fastCreditFirstIndex",
        component: definite14,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          //检查申请明细-16
          {
            path: "fastCreditFirstDefinite16",
            name: "fastCreditFirstDefinite16",
            component: definite16,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 申请明细3
          {
            path: "fastCreditFirstDefinite3",
            name: "fastCreditFirstDefinite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
            },
            children: []
          }
        ]
      },
      // 类型6 新增1
      {
        path: "6/:type/:bizId",
        name: "dailyInspectionIndex",
        component: newly1,
        meta: {
          title: "检查申请明细",
          tag: "resave",
          footer: true
        },
        children: [
          // 新增1-2
          {
            path: "newly2",
            name: "newly2",
            component: newly2,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 新增1-3
          {
            path: "newly3",
            name: "newly3",
            component: newly3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 新增1-4
          {
            path: "newly4",
            name: "newly4",
            component: newly4,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 新增1-5
          {
            path: "newly5",
            name: "newly5",
            component: newly5,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          //检查申请明细 16
          {
            path: "newlyDefinite16",
            name: "newlyDefinite16",
            component: definite16,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: true
            }
          },
          // 申请明细3
          {
            path: "newlyDefinite3",
            name: "newlyDefinite3",
            component: definite3,
            meta: {
              title: "检查申请明细",
              tag: "resave",
              footer: false
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
