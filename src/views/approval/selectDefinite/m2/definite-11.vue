<!--
 * @Descripttion: 检查申请明细-11
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite11">
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
            :value="detail.queryDateForPer"
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
          <mt-cell
            class="textFiled"
            title="未结清贷款笔数"
            :value="detail.unPayOffLoanNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="未结清贷款金额"
            :value="detail.unPayOffAmout"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="涉及金融机构"
            :value="detail.finInstitutionNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="未结清贷款结余"
            :value="detail.sumBalance"
          ></mt-cell>

          <div class="nothing"></div>
          <mt-cell
            class="textFiled"
            title="对外担保笔数"
            :value="detail.guaranteeNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="对外担保金额"
            :value="detail.guaranteeAmout"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="对外担保结余"
            :value="detail.guaranteeBalance"
          ></mt-cell>

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
          </div>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.badRecordMsg"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>
          <!-- （3）借款企业欠税情况 -->
          <div class="coNo2">（3）借款企业欠税情况</div>
          <mt-cell
            class="textFiled"
            title="欠税记录"
            :value="detail.oweTaxRecordNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="民事判决"
            :value="detail.civilJudgmentRecordNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="强制执行记录"
            :value="detail.forceImpleRecordNum"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="行政处罚记录"
            :value="detail.administRecordNum"
          ></mt-cell>

          <!-- （4）征信记录 -->
          <div class="coNo2">（4）征信记录</div>
          <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
          <div class="item1">
            <span class="tag">征信记录是否有异常变化</span>
            <span class="info"
                v-if="detail.existCreditChage1 === 9">请选择</span>
						<span class="info"
                v-else-if="detail.existCreditChage1 === 1">是</span>
						<span class="info"
									v-else-if="detail.existCreditChage1 === 0">否</span>
          </div>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.creditChageMsg1"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>

          <!-- 2.关联企业征信： -->
          <div class="coNo3">2.关联企业征信：</div>
          <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
          <div class="item1">
            <span class="tag">征信记录是否有异常变化</span>
            <span class="info"
                v-if="detail.existCreditChage2 === 9">请选择</span>
						<span class="info"
                v-else-if="detail.existCreditChage2 === 1">是</span>
						<span class="info"
									v-else-if="detail.existCreditChage2=== 0">否</span>
          </div>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.creditChageMsg2"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>

          <!-- 3.法人保证人征信： -->
          <div class="coNo3">3.法人保证人征信：</div>
          <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
          <div class="item1">
            <span class="tag">征信记录是否有异常变化</span>
            <span class="info"
                v-if="detail.existCreditChage3 === 9">请选择</span>
						<span class="info"
                v-else-if="detail.existCreditChage3 === 1">是</span>
						<span class="info"
									v-else-if="detail.existCreditChage3=== 0">否</span>
          </div>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.creditChageMsg3"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>

          <div class="nothing"></div>

          <mt-cell class="textFiled" title="近期负面信息情况"></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            class="text"
            v-model="detail.msg"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, Field } from "mint-ui";

export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field
  },
  props: ["detail"],
  data() {
    return {};
  },
  methods: {},
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
// @import "../../../../assets/style/global.scss";
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
    padding: 0 px2rem(16);
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
    padding: 0 px2rem(16);
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
    background-color: #f7f7f7;
    height: px2rem(44);
    font-size: px2rem(12);
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    line-height: px2rem(44);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    padding-left: px2rem(8);
  }

  .coNo3 {
    background-color: #f7f7f7;
    height: px2rem(44);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: 700;
    line-height: px2rem(44);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    padding-left: px2rem(16);
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
// @import "../../../../assets/style/global.scss";
.definite11 {
  width: 100%;
  height: 100%;
  .mint-cell {
    min-height: px2rem(44);
  }
  .textFiled {
    .mint-cell-wrapper {
      padding: 0 px2rem(16);
    }
    .mint-cell-title {
      width: px2rem(150) !important;
      font-size: px2rem(14);
    }
    .mint-cell-value {
      color: #888;
      font-size: px2rem(14);
      .mint-field-core {
        text-align: right;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
  .text {
    .mint-cell-value {
      .mint-field-core {
        text-align: left;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
}
</style>
