<!--
 * @Descripttion: 贷后检查列表
 * @Author: penglu
 * @Date: 2020-06-04 15:13:03
-->
<template lang="pug">
	.loanIns-list
		.item(v-for="item in list" :key="item.bizId" @click="handleClick(item.bizType,item.bizId)")
			.item-header
				.item-header-state(class="shoulddo" v-if="item.bizStatus === 1" ) 应做
				.item-header-state(class="undo" v-if="item.bizStatus === 2" ) 未做
				.item-header-state(class="alreadydo" v-if="item.bizStatus === 3" ) 已做
				.item-header-title  {{item.bizType}}
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
import { loanInsList } from "../../utils/dataMock.js";

export default {
  data() {
    return {
      list: loanInsList()
    };
  },
  watch: {},
  mounted() {},
  methods: {
    handleClick(type, id) {
      if (type === "小企业授信业务首次跟踪检查") {
        this.$router.push({
          name: "creditFirstIndex",
          params: {
            bizId: id,
            type: "loanCreditFirst"
          }
        });
      } else if (type === "小企业授信业务贷后例行检查") {
        this.$router.push({
          name: "creditRoutineIndex",
          params: {
            bizId: id,
            type: "loanCreditRoutine"
          }
        });
      } else if (type === "小企业法人快捷贷贷后日常检查") {
        this.$router.push({
          name: "dailyInspectionIndex",
          params: {
            bizId: id,
            type: "loanDailyInspection"
          }
        });
      } else if (type === "小企业授信业务贷后全面检查") {
        this.$router.push({
          name: "creditOverallIndex",
          params: {
            bizId: id,
            type: "loanCreditOverall"
          }
        });
      } else if (type === "小企业法人快捷贷首次检查") {
        this.$router.push({
          name: "fastCreditFirstIndex",
          params: {
            bizId: id,
            type: "loanFastCreditFirst"
          }
        });
      } else if (type === "小企业授信业务还款资金落实情况检查") {
        this.$router.push({
          name: "repaymentInspectionIndex",
          params: {
            bizId: id,
            type: "repaymentInspection"
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
        width: px2rem(26);
        font-size: px2rem(12);
        padding: px2rem(1) px2rem(3);
        color: #fff;
        flex: 0 0 px2rem(26);
        margin-right: px2rem(5);
        &.undo {
          background-color: #efaa70;
        }
        &.shoulddo {
          background-color: #3bb28c;
        }
        &.alreadydo {
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
  flex: 0 0 px2rem(56);
  margin-right: px2rem(5);
}
.item-info {
  color: #090909;
  font-size: px2rem(14);
  flex: 1;
}
</style>
