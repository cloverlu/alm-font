<!--
 * @Descripttion: 底部（上一步、下一步）
 * @Author: penglu
 * @Date: 2020-06-05 10:42:00
-->
<template lang="pug">
	.footer-next
		.prev(class="active" @click="footerPrev")
			span(class="iconfont iconxiayiye1")
			span 上一页
		span |
		.next(@click="footerNext")
			span 下一页
			span(class="iconfont iconxiayiye")
			
</template>

<script>
import { normalMixin } from "../../../utils/mixin";
export default {
  mixins: [normalMixin],
  computed: {},
  methods: {
    footerPrev() {
      this.$router.go(-1);
      //随机数
      const val = Date.now();
      //向vuex添加setPrevFooter的值，以方便所有组件判断是否点击了“上一步”
      this.setPrevFooter({ prevFooter: val });
    },
    footerNext() {
      //随机数
      const val = Date.now();
      //向vuex添加nextFooter的值，以方便所有组件判断是否点击了“下一步”
      this.setNextFooter({ nextFooter: val, tag: "nextFooter" });

      // const currentName = this.$route.name;
      // const currentType = this.$route.params.type;
      // this.footerRoute(currentType, currentName);

      // // console.log(this.$route);
      // if (currentType === "loanCreditFirst") {
      //   if (currentName === "creditFirstIndex") {
      //     this.$router.push({ name: "firstDefinite2" });
      //   } else if (currentName === "firstDefinite2") {
      //     // setTimeout(() => {
      //     //   this.$router.push({ name: "firstDefinite16" });
      //     // }, 500);
      //     this.$router.push({ name: "firstDefinite16" });
      //   } else if (currentName === "firstDefinite16") {
      //     this.$router.push({ name: "firstDefinite3" });
      //   }
      // } else if (currentType === "loanCreditRoutine") {
      //   if (currentName === "creditRoutineIndex") {
      //     this.$router.push({ name: "definite13" });
      //   } else if (currentName === "definite13") {
      //     this.$router.push({ name: "definite11" });
      //   } else if (currentName === "definite11") {
      //     this.$router.push({ name: "definite10" });
      //   } else if (currentName === "definite10") {
      //     this.$router.push({ name: "definite5" });
      //   } else if (currentName === "definite5") {
      //     this.$router.push({ name: "routineDefinite18" });
      //   } else if (currentName === "routineDefinite18") {
      //     this.$router.push({ name: "routineDefinite3" });
      //   }
      // } else if (currentType === "loanDailyInspection") {
      //   if (currentName === "dailyInspectionIndex") {
      //     this.$router.push({ name: "newly2" });
      //   } else if (currentName === "newly2") {
      //     this.$router.push({ name: "newly3" });
      //   } else if (currentName === "newly3") {
      //     this.$router.push({ name: "newly45" });
      //   } else if (currentName === "newly45") {
      //     this.$router.push({ name: "newlyDefinite16" });
      //   } else if (currentName === "newlyDefinite16") {
      //     this.$router.push({ name: "newlyDefinite3" });
      //   }
      // } else if (currentType === "loanCreditOverall") {
      //   if (currentName === "creditOverallIndex") {
      //     this.$router.push({ name: "overalltDefinite13" });
      //   } else if (currentName === "overalltDefinite13") {
      //     this.$router.push({ name: "overalltDefinite11" });
      //   } else if (currentName === "overalltDefinite11") {
      //     this.$router.push({ name: "overalltDefinite10" });
      //   } else if (currentName === "overalltDefinite10") {
      //     this.$router.push({ name: "overalltDefinite89" });
      //   } else if (currentName === "overalltDefinite89") {
      //     this.$router.push({ name: "overalltDefinite6" });
      //   } else if (currentName === "overalltDefinite6") {
      //     this.$router.push({ name: "overalltDefinite17" });
      //   } else if (currentName === "overalltDefinite17") {
      //     this.$router.push({ name: "overalltDefinite3" });
      //   }
      // } else if (currentType === "loanRepaymentInspection") {
      //   if (currentName === "repaymentInspectionIndex") {
      //     this.$router.push({ name: "repaymentInspectionDefinite7" });
      //   } else if (currentName === "repaymentInspectionDefinite7") {
      //     this.$router.push({ name: "processing4" });
      //   }
      // } else if (currentType === "loanFastCreditFirst") {
      //   if (currentName === "fastCreditFirstIndex") {
      //     this.$router.push({ name: "fastCreditFirstDefinite16" });
      //   } else if (currentName === "fastCreditFirstDefinite16") {
      //     this.$router.push({ name: "fastCreditFirstDefinite3" });
      //   }
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.footer-next {
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  display: flex;
  span {
    color: #c6c6c6;
    font-size: px2rem(17);
    line-height: px2rem(38);
  }
  .prev,
  .next {
    flex: 1;
    text-align: center;
    font-size: px2rem(15);
    color: #9f9f9f;
    line-height: px2rem(38);
    &:hover,
    &.active {
      span {
        color: #4d77db;
      }
    }
    .iconfont {
      font-size: px2rem(12);
      line-height: 1;
    }
    span {
      &:first-child {
        margin-right: px2rem(5);
      }
    }
  }
}
</style>
