<!--
 * @Descripttion: 检查申请明细-11
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
          class="textFiled"
          title="征信报告查询日期"
          :value="queryDate"
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
          v-model="params.unPayOffLoanNum"
        ></mt-field>
        <!-- <mt-cell
          title="未结清贷款笔数"
          :value="DetailsOfIOU.unPayOffLoanNum"
        ></mt-cell> -->
        <mt-field
          class="textFiled"
          label="未结清贷款金额"
          placeholder="10"
          v-model="params.unPayOffAmout"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="涉及金融机构"
          placeholder="10"
          v-model="params.finInstitutionNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款结余"
          placeholder="10"
          v-model="params.sumBalance"
        ></mt-field>

        <div class="nothing"></div>
        <mt-field
          class="textFiled"
          label="对外担保笔数"
          placeholder="10"
          v-model="params.guaranteeNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保金额"
          placeholder="10"
          v-model="params.guaranteeAmout"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保结余"
          placeholder="10"
          v-model="params.guaranteeBalance"
        ></mt-field>

        <!-- （2）逾期及欠息等不良记录 -->
        <div class="coNo2">（2）逾期及欠息等不良记录</div>
        <!-- <mt-field
          class="textFiled"
          label="贷款期间借款企业是否发生逾期、欠息等不良信用记录"
          placeholder="10"
          v-model="existBadRecord"
        ></mt-field> -->
        <div class="item">
          <span class="tag"
            >贷款期间借款企业是否发生逾期、欠息等不良信用记录</span
          >
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existBadRecord"
            :triggerId="existBadRecord"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.badRecordMsg"
          class="text"
          style="overflow:hidden"
          placeholder="badRecordMsg"
        ></mt-field>
        <!-- （3）借款企业欠税情况 -->
        <div class="coNo2">（3）借款企业欠税情况</div>
        <mt-field
          class="textFiled"
          label="欠税记录"
          placeholder="10"
          v-model="params.oweTaxRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="民事判决"
          placeholder="10"
          v-model="params.civilJudgmentRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="强制执行记录"
          placeholder="10"
          v-model="params.forceImpleRecordNum"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="行政处罚记录"
          placeholder="10"
          v-model="params.administRecordNum"
        ></mt-field>

        <!-- （4）征信记录 -->
        <div class="coNo2">（4）征信记录</div>
        <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChage1"
            :triggerId="existCreditChage1"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg1"
          class="text"
          style="overflow:hidden"
          placeholder="changedMsg"
        ></mt-field>

        <!-- 2.关联企业征信： -->
        <div class="coNo3">2.关联企业征信：</div>
        <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChage2"
            :triggerId="existCreditChage2"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg2"
          class="text"
          style="overflow:hidden"
          placeholder="changedMsg"
        ></mt-field>

        <!-- 3.法人保证人征信： -->
        <div class="coNo3">3.法人保证人征信：</div>
        <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChage3"
            :triggerId="existCreditChage3"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg3"
          class="text"
          style="overflow:hidden"
          placeholder="changedMsg"
        ></mt-field>

        <div class="nothing"></div>

        <mt-cell class="textFiled" title="近期负面信息情况"></mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          class="text"
          v-model="params.RecentNegativeInformation"
          style="overflow:hidden"
          placeholder="RecentNegativeInformation"
        ></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, yesNo } from "../../../utils/dataMock";
import { Cell, Field } from "mint-ui";
import almSelect from "../components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      queryDate: "2020-06-03",
      yesNo: yesNo,
      popupVisible: false,
      payType: 1,
      selectTitle: "贷款期间借款企业是否发生逾期、欠息等不良信用记录",
      selectTitle2: "征信记录是否有异常变化",
      fontColor: "blue",
      existBadRecord: "existBadRecord",
      existCreditChage1: "existCreditChage1",
      existCreditChage2: "existCreditChage2",
      existCreditChage3: "existCreditChage3",
      params: {
        // 借款企业部分
        unPayOffLoanNum: "", //未结清贷款笔数
        unPayOffAmout: "", // 未结清贷款金额
        finInstitutionNum: "", // 涉及金融机构
        sumBalance: "", // 未结清贷款结余
        DebitCardNum: "", //未销户贷记卡账户

        DebitCardLineAmout: "", //未销户贷记卡担保金额
        guaranteeNum: "", //对外担保笔数
        guaranteeAmout: "", //对外担保金额
        guaranteeBalance: "", //对外担保结余
        existBadRecord: 1, // 是否逾期 借款企业
        badRecordMsg: "", //  逾期及违约 不良影响
        oweTaxRecordNum: "", // 欠税记录
        civilJudgmentRecordNum: "", // 民事判决
        forceImpleRecordNum: "", // 强制执行记录
        administRecordNum: "", // 行政处罚记录

        creditChageMsg1: "", // 	借款企业 征信变化情况说明
        existCreditChage1: 0, // 借款企业 征信变化是否变化
        creditChageMsg2: "", // 	关联企业 征信变化情况说明
        existCreditChage2: 0, // 关联企业 征信变化是否变化
        creditChageMsg3: "", // 	法人保证人 征信变化情况说明
        existCreditChage3: 0, // 法人保证人 征信变化是否变化

        RecentNegativeInformation: "" //近期负面信息情况
      }
    };
  },
  methods: {
    getSelect(data) {
      this.params.cooperate = data.key;
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite11里
        this.setDefinite11({ params: this.params });
      }
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
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    line-height: px2rem(20);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    margin: px2rem(6) px2rem(17) px2rem(-8);
  }

  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
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
      height: px2rem(14);
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
  }

  .item {
    background-color: #fff;
    // width: px2rem(252);
    width: 100%;
    height: px2rem(50);
    line-height: px2rem(50);
    padding: 0 px2rem(10);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-child {
      border: none;
      padding: 0;
    }
    .tag {
      // font-family: Source Han Sans CN;
      // font-weight: bolder;
      width: px2rem(270);
      text-align: left;
      color: #090909;
      height: px2rem(50);
      font-size: px2rem(14);
      line-height: px2rem(20);
      padding-top: px2rem(5);
    }
    .arrow {
      font-size: px2rem(14);
      color: #848484;
      margin-left: px2rem(3);
    }
    .info {
      flex: 1;
      text-align: right;
      color: #9f9f9f;
      .pay-type {
        width: 100%;
        height: px2rem(145);
        background-color: #fff;
        .item {
          width: 100%;
          height: px2rem(44);
          border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
          text-align: center;
          font-size: px2rem(14);
          justify-content: center;
          align-items: center;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  .item1 {
    background-color: #fff;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    padding: 0 px2rem(10);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-child {
      border: none;
      padding: 0;
    }
    .tag {
      // font-family: Source Han Sans CN;
      // font-weight: bolder;
      width: px2rem(270);
      text-align: left;
      color: #090909;
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(44);
    }
    .arrow {
      font-size: px2rem(14);
      color: #848484;
      margin-left: px2rem(3);
    }
    .info {
      flex: 1;
      text-align: right;
      color: #9f9f9f;
      .pay-type {
        width: 100%;
        height: px2rem(145);
        background-color: #fff;
        .item {
          width: 100%;
          height: px2rem(44);
          border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
          text-align: center;
          font-size: px2rem(14);
          justify-content: center;
          align-items: center;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  .coNo1 {
    height: px2rem(12);
    font-size: px2rem(12);
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    line-height: px2rem(20);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin: px2rem(-12) 0 px2rem(10) px2rem(8);
  }

  .coNo2 {
    height: px2rem(44);
    font-size: px2rem(12);
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    line-height: px2rem(44);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin-left: px2rem(8);
  }

  .coNo3 {
    height: px2rem(44);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: 700;
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
    // font-family: Source Han Sans CN;
    // font-weight: 500;
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
