<!--
 * @Descripttion: 贷后检查列表
 * @Author: penglu
 * @Date: 2020-06-04 15:13:03
-->
<template lang="pug">
	.loanIns-list
		.item(v-for="item in list" :key="item.bizId" @click="handleClick(item.bizStatus,item.bizType,item.bizId)")
			.item-header
				.item-header-state(class="shoulddo" v-if="item.bizStatus === 'shouldDo'" ) 应做
				.item-header-state(class="undo" v-if="item.bizStatus === 'notDo'" ) 未做
				.item-header-state(class="alreadydo" v-if="item.bizStatus === 'alreadyDo'" ) 已做
				.item-header-state(class="inreview" v-if="item.bizStatus === 'inReview'" ) 审批中
				.item-header-title  {{item.bizTypeName}}
			.item-username
				span(class="item-tag") 客户名称
				span(class="item-info") {{item.custNname}}
			.item-usercode
				span(class="item-tag") 借据编号
				span(class="item-info") {{item.billNo}}
			.item-info
				.item-info-time 
					span(class="item-tag") 提醒时间
					span(class="item-info") {{item.noticeDate}}
				.item-info-time 
					span(class="item-tag") 截止时间
					span(class="item-info") {{item.endDate}}
</template>

<script>
import { loanInsList, loanInsList2 } from "../../utils/dataMock.js";

export default {
  data() {
    return {
      list: []
    };
  },
  watch: {},
  mounted() {
    if (this.$route.name === "loanInspectionIndex") {
      this.list = loanInsList();
    } else if (this.$route.name === "approvalIndex") {
      this.list = loanInsList2();
    }
  },
  methods: {
    handleClick(bizStatus, type, id) {
      const moduleName = this.$route.name;
      const status = bizStatus;
      // console.log(moduleName);
      if (status !== "inReview") {
        if (moduleName === "loanInspectionIndex") {
          if (type === "m1") {
            this.$router.push({
              name: "creditFirstIndex",
              params: {
                bizId: id,
                type: "loanCreditFirst"
              }
            });
          } else if (type === "m2") {
            this.$router.push({
              name: "creditRoutineIndex",
              params: {
                bizId: id,
                type: "loanCreditRoutine"
              }
            });
          } else if (type === "m3") {
            this.$router.push({
              name: "creditOverallIndex",
              params: {
                bizId: id,
                type: "loanCreditOverall"
              }
            });
          } else if (type === "m4") {
            this.$router.push({
              name: "repaymentInspectionIndex",
              params: {
                bizId: id,
                type: "loanRepaymentInspection"
              }
            });
          } else if (type === "m5") {
            this.$router.push({
              name: "fastCreditFirstIndex",
              params: {
                bizId: id,
                type: "loanFastCreditFirst"
              }
            });
          } else if (type === "m6") {
            this.$router.push({
              name: "dailyInspectionIndex",
              params: {
                bizId: id,
                type: "loanDailyInspection"
              }
            });
          }
        }
      } else {
        this.$router.push({
          name: "checklist1",
          params: {
            bizId: id,
            type: type
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.loanIns-list {
  width: 100%;
  height: 100%;
  padding-top: px2rem(10);
  box-sizing: border-box;
  .item {
    width: px2rem(344);
    height: px2rem(110);
    background-color: #fff;
    padding: px2rem(12) px2rem(9) 0 px2rem(9);
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: px2rem(9);
    .item-header {
      display: flex;
      height: px2rem(15);
      // line-height: px2rem(15);
      margin-bottom: px2rem(9);
      .item-header-state {
        // width: px2rem(26);
        font-size: px2rem(12);
        padding: px2rem(1) px2rem(3);
        color: #fff;
        flex: 0 0 px2rem(38);
        margin-right: px2rem(5);
        text-align: center;
        &.undo {
          background-color: #db3822;
        }
        &.shoulddo {
          background-color: #efaa70;
        }
        &.alreadydo {
          background-color: #3bb28c;
        }
        &.inreview {
          background-color: #4e78de;
        }
      }
      .item-header-title {
        flex: 1;
        font-size: px2rem(15);
        color: #090909;
      }
    }

    .item-username,
    .item-usercode,
    .item-info {
      width: 100%;
      height: px2rem(15);
      display: flex;
      margin-bottom: px2rem(9);
    }

    .item-info {
      .item-info-time {
        display: flex;
        flex: 1;
      }
    }
  }
}
.item-tag {
  color: #727272;
  font-size: px2rem(14);
  flex: 0 0 px2rem(65);
  margin-right: px2rem(5);
}
.item-info {
  color: #090909;
  font-size: px2rem(14);
  flex: 1;
  text-align: left;
}
</style>
