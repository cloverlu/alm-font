<!--
 * @Descripttion: 贷后检查列表
 * @Author: penglu
 * @Date: 2020-06-04 15:13:03
-->
<template lang="pug">
	.loanIns-list
		.item(v-for="item in list" :key="item.bizId" @click="handleClick(item.bizStatus,item.bizType,item.bizId,item.saveFlag)")
			.item-header
				.item-header-state(class="shoulddo" v-if="item.bizStatus === 'shouldDo'" ) 应做
				.item-header-state(class="undo" v-if="item.bizStatus === 'notDo'" ) 未做
				.item-header-state(class="alreadydo" v-if="item.bizStatus === 'alreadyDo'" ) 已做
				.item-header-state(class="inreview" v-if="item.bizStatus === 'inReview'" ) 审批中
				.item-header-title  {{item.bizTypeName}}
			.item-username
				span(class="item-tag") 客户名称
				span(class="item-info") {{item.custName}}
			.item-usercode
				span(class="item-tag") 借据编号
				span(class="item-info") {{item.billNo}}
			.item-info
				.item-info-time 
					span(class="item-tag") 提醒时间
					span(class="item-info") {{item.noticeDate}}
				.item-info-time 
					span(class="item-tag") 截止时间
					span(class="item-info") {{item.billEndDate}}
</template>

<script>
import { loanInsList, loanInsList2, userInfo } from "../../utils/dataMock.js";
import { getNoticeCheckList } from "../../api/loanlnspection";
import { normalMixin } from "../../utils/mixin";

export default {
  mixins: [normalMixin],
  data() {
    return {
      list: [],
      userInfo: userInfo,
      itemType: ""
    };
  },
  watch: {},
  mounted() {
    if (this.$route.name === "loanInspectionIndex") {
      // this.list = loanInsList();
      this.itemType = "2";
    } else if (this.$route.name === "approvalIndex") {
      this.itemType = "1";
    }
    this.getList();
  },
  methods: {
    // 获取列表数据
    getList() {
      this.$Indicator.open();
      const itemType = { itemType: this.itemType };
      const params = Object.assign({}, this.userInfo, itemType);
      getNoticeCheckList(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          if (res.data.data) {
            res.data.data.filter(item => {
              this.bizType(item, item.bizType);
            });
          }
          this.list = res.data.data;
        }
      });
    },
    handleClick(bizStatus, type, id, saveFlag) {
      const moduleName = this.$route.name;
      const status = bizStatus;
      var name = "";
      console.log(moduleName);

      if (moduleName === "loanInspectionIndex") {
        if (type === "m1") {
          name = "creditFirstIndex";
        } else if (type === "m2") {
          name = "creditRoutineIndex";
        } else if (type === "m3") {
          name = "creditOverallIndex";
        } else if (type === "m4") {
          name = "repaymentInspectionIndex";
        } else if (type === "m5") {
          name = "fastCreditFirstIndex";
        } else if (type === "m6") {
          name = "dailyInspectionIndex";
        }
        this.$router.push({
          name: name,
          params: {
            bizId: id,
            type: type,
            saveFlag: saveFlag,
            status: bizStatus
          }
        });
      } else if (moduleName === "approvalIndex") {
        this.$router.push({
          name: "checklist1",
          params: {
            bizId: id,
            type: type,
            saveFlag: saveFlag,
            status: bizStatus
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
