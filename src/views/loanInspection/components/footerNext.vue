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
import { loanInspectionMixin } from "../../../utils/mixin";
export default {
  mixins: [loanInspectionMixin],
  computed: {},
  methods: {
    footerPrev() {
      this.$router.go(-1);
      //随机数
      const val = Math.floor(Math.random() * 10000 + 1);
      //向vuex添加setPrevFooter的值，以方便所有组件判断是否点击了“上一步”
      this.setPrevFooter({ prevFooter: val });
    },
    footerNext() {
      const currentName = this.$route.name;
      const currentType = this.$route.params.type;

      console.log(this.$route);
      if (currentType === "loanCreditFirst") {
        if (currentName === "creditFirstIndex") {
          this.$router.push({ name: "firstDefinite2" });
        } else if (currentName === "firstDefinite2") {
          this.$router.push({ name: "firstDefinite16" });
        } else if (currentName === "firstDefinite16") {
          this.$router.push({ name: "firstDefinite3" });
        }
      } else if (currentType === "loanCreditRoutine") {
        if (currentName === "creditRoutineIndex") {
          this.$router.push({ name: "definite13" });
        } else if (currentName === "definite13") {
          this.$router.push({ name: "definite11" });
        } else if (currentName === "definite11") {
          this.$router.push({ name: "definite10" });
        } else if (currentName === "definite10") {
          this.$router.push({ name: "definite5" });
        } else if (currentName === "definite5") {
          this.$router.push({ name: "routineDefinite17" });
        } else if (currentName === "routineDefinite17") {
          this.$router.push({ name: "routineDefinite3" });
        }
      } else if (currentType === "loanDailyInspection") {
        if (currentName === "dailyInspectionIndex") {
          this.$router.push({ name: "newly2" });
        } else if (currentName === "newly2") {
          this.$router.push({ name: "newly3" });
        }
      } else if (currentType === "loanCreditOverall") {
        if (currentName === "creditOverallIndex") {
          this.$router.push({ name: "overalltDefinite13" });
        } else if (currentName === "overalltDefinite13") {
          this.$router.push({ name: "overalltDefinite11" });
        }
      }

      //随机数
      const val = Math.floor(Math.random() * 10000 + 1);
      //向vuex添加nextFooter的值，以方便所有组件判断是否点击了“下一步”
      this.setNextFooter({ nextFooter: val });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
