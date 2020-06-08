<!--
 * @Descripttion: 
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="coInformation">
      <div class="title">征信情况</div>
      <div class="dailyCheck">
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">基于企业征信报告</span>
        </div>
        <mt-cell
          title="征信报告查询日期"
          :value="DetailsOfIOU.queryDate"
        ></mt-cell>
      </div>

      <div class="enterpriseCredit">
        <div class="title">1.借款企业征信：</div>
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coNameBlack">征信情况</span>
        </div>
        <!-- （1）未结清贷款及对外担保情况 -->
        <div class="coNo1">（1）未结清贷款及对外担保情况</div>
        <mt-field
          class="textFiled"
          label="未结清贷款笔数"
          placeholder="10"
          v-model="DetailsOfIOU.unPayOffLoanNum"
        ></mt-field>
        <!-- <mt-cell
          title="未结清贷款笔数"
          :value="DetailsOfIOU.unPayOffLoanNum"
        ></mt-cell> -->
        <mt-field
          class="textFiled"
          label="未结清贷款金额"
          placeholder="10"
          v-model="DetailsOfIOU.unPayOffAmout"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="涉及金融机构"
          placeholder="10"
          v-model="DetailsOfIOU.finInstitutionNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款结余"
          placeholder="10"
          v-model="DetailsOfIOU.sumBalance"
        ></mt-field>

        <div class="nothing"></div>
        <mt-field
          class="textFiled"
          label="对外担保笔数"
          placeholder="10"
          v-model="DetailsOfIOU.guaranteeNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保金额"
          placeholder="10"
          v-model="DetailsOfIOU.guaranteeAmout"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保结余"
          placeholder="10"
          v-model="DetailsOfIOU.guaranteeBalance"
        ></mt-field>

        <!-- （2）逾期及欠息等不良记录 -->
        <div class="coNo2">（2）逾期及欠息等不良记录</div>
        <mt-field
          class="textFiled"
          label="对外担保结余"
          placeholder="10"
          v-model="DetailsOfIOU.guaranteeBalance"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="贷款期间借款企业是否发生逾期、欠息等不良信用记录"
          placeholder="10"
          v-model="DetailsOfIOU.existBadRecord"
        ></mt-field>
        <mt-field
          type="textarea"
          rows="3"
          v-model="specialRequireCheck"
          class="text"
          style="overflow:hidden"
          :placeholder="DetailsOfIOU.badRecordMsg"
        ></mt-field>
        <!-- （3）借款企业欠税情况 -->
        <div class="coNo2">（3）借款企业欠税情况</div>
        <mt-field
          class="textFiled"
          label="欠税记录"
          placeholder="10"
          v-model="DetailsOfIOU.oweTaxRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="民事判决"
          placeholder="10"
          v-model="DetailsOfIOU.civilJudgmentRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="强制执行记录"
          placeholder="10"
          v-model="DetailsOfIOU.forceImpleRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="行政处罚记录"
          placeholder="10"
          v-model="DetailsOfIOU.administRecordNum"
        ></mt-field>

        <!-- （4）征信记录 -->
        <div class="coNo2">（4）征信记录</div>
        <mt-cell title="征信记录是否有异常变化"> </mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="creditChageMsg1"
          class="text"
          style="overflow:hidden"
          :placeholder="DetailsOfIOU.changedMsg"
        ></mt-field>

        <!-- 2.关联企业征信： -->
        <div class="coNo3">2.关联企业征信：</div>
        <mt-cell title="征信记录是否有异常变化"> </mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="creditChageMsg2"
          class="text"
          style="overflow:hidden"
          :placeholder="DetailsOfIOU.changedMsg"
        ></mt-field>

        <!-- 3.法人保证人征信： -->
        <div class="coNo3">3.法人保证人征信：</div>
        <mt-cell title="征信记录是否有异常变化"> </mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="creditChageMsg3"
          class="text"
          style="overflow:hidden"
          :placeholder="DetailsOfIOU.changedMsg"
        ></mt-field>

        <div class="nothing"></div>

        <mt-cell title="近期负面信息情况"> </mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          class="text"
          v-model="RecentNegativeInformation"
          style="overflow:hidden"
          :placeholder="DetailsOfIOU.RecentNegativeInformation"
        ></mt-field>
      </div>

      <mt-actionsheet :actions="actions" v-model="sheetVisible">
      </mt-actionsheet>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU } from "../../../utils/dataMock";
import { Cell, Field, Actionsheet } from "mint-ui";
export default {
  components: {
    "mt-cell": Cell,
    "mt-actionsheet": Actionsheet,
    "mt-field": Field
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      actions: [
        {
          name: "是",
          method: this.getTrue // 调用methods中的函数
        },
        {
          name: "否",
          method: this.getFalse // 调用methods中的函数
        }
      ], // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏

      existBadRecord: false,
      sheetVisible: DetailsOfIOU.existBadRecord,
      creditChageMsg1: "",
      creditChageMsg2: "",
      creditChageMsg3: "",
      RecentNegativeInformation: "",
      specialRequireCheck: ""
    };
  },
  methods: {
    actionSheet: function() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    getTrue: function() {
      console.log("选择是");
      this.existBadRecord = true;
      console.log(this.existBadRecord);
    },
    getFalse: function() {
      console.log("选择否");
    },
    goWay: function() {
      console.log("ssss");
      // this.sheetVisible = true;
      this.actionSheet();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.coInformation {
  .title {
    // width: px2rem(60);
    height: px2rem(23);
    font-size: px2rem(15);
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: px2rem(20);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    margin: px2rem(6) px2rem(17) px2rem(-8);
  }

  .formTitle {
    width: 100%;
    height: px2rem(50);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(17);
      top: 50%;
      left: px2rem(18);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(15);
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(15);
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
  }

  .coNo1 {
    height: px2rem(12);
    font-size: px2rem(12);
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: px2rem(20);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin: px2rem(-12) 0 px2rem(10) px2rem(8);
  }

  .coNo2 {
    height: px2rem(44);
    font-size: px2rem(12);
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: px2rem(44);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin-left: px2rem(8);
  }

  .coNo3 {
    height: px2rem(44);
    font-size: px2rem(14);
    font-family: Source Han Sans CN;
    font-weight: 700;
    line-height: px2rem(44);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    margin-left: px2rem(8);
  }

  .mint-cell {
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-of-type {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    }
  }

  .nothing {
    width: 100%;
    height: px2rem(10);
    background-color: #f1f1f1;
  }

  .text {
    font-size: px2rem(12);
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(9, 9, 9, 1);
    opacity: 1;
  }
}
</style>

<style lang="scss">
textarea {
  resize: none;
}
</style>
