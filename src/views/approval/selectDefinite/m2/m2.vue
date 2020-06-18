<!--
 * @Descripttion: 检查申请明细-12
 * @Author: sunhua
 * @Date: 2020-06-05 9:03:54
-->
<template>
  <div class="checkDetail">
    <div class="definte12-wrapper">
      <!-- 公司信息 -->
      <div class="companyInformation">
        <div class="formBody">
          <mt-cell
            class="textFiled"
            title="客户名称"
            :value="detail.custName"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="授信金额"
            :value="detail.lineAmout"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="贷款余额"
            :value="detail.lineBalance"
          ></mt-cell>
        </div>
      </div>
      <!--填写信息  -->
      <div class="fillInInformation">
        <div class="title">填写信息</div>
        <div class="dailyCheck">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">审批意见中贷后日常检查要求及落实情况</span>
          </div>
          <div class="textarea">
            <mt-cell title="要求" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.requireCheck"
              class="text is-nolabel textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
            <mt-cell title="落实情况" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.checked"
              class="text textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
          </div>
        </div>

        <div class="specialRequirements">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">产品贷后日常检查特殊要求及落实情况</span>
          </div>
          <div class="textarea">
            <mt-cell title="要求" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.specialRequireCheck"
              class="text"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
            <mt-cell title="落实情况" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.specialChecked"
              class="text textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
          </div>
        </div>

        <div class="actualController">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">实际控制人或法定代表人风险点</span>
          </div>
          <div class="textarea">
            <mt-cell
              title="健康、 嗜好、家庭关系等方面"
              class="textFiled textUpTitle"
            ></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.HoldPensonRisk"
              class="text textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
          </div>
        </div>

        <div class="management">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">管理层风险点</span>
          </div>
          <div class="textarea">
            <mt-cell
              title="股权变化、关键管理人员变动、关联企业变动等，是否存在偏离主业、盲目扩张等问题"
              class="textFiled textUpTitle"
            ></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.managerRisk"
              class="text textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
          </div>
        </div>

        <div class="recentInspection">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">近期检查发现的其他风险点</span>
          </div>
          <div class="textarea">
            <mt-field
              type="textarea"
              rows="3"
              v-model="detail.otherRisk"
              class="text textArea"
              style="overflow:hidden"
              :disabled="true"
            ></mt-field>
          </div>
        </div>
      </div>
      <definite13 :detail="params.definite13"></definite13>
      <definite11 :detail="params.definite11"></definite11>
      <definite10 :detail="params.definite10"></definite10>
      <definite5 :detail="params.definite5"></definite5>
      <definite18 :detail="params.definite18"></definite18>
    </div>
  </div>
</template>

<script>
import { definite16Normal } from "../../../../utils/dataMock.js";
import { Cell, Field } from "mint-ui";
import { loanInspectionMixin } from "../../../../utils/mixin";
import definite13 from "../m2/definite-13";
import definite11 from "../m2/definite-11";
import definite10 from "../m2/definite-10";
import definite5 from "../m2/definite-5";
import definite18 from "../m2/definite-18";
export default {
  mixins: [loanInspectionMixin],
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    definite13,
    definite11,
    definite10,
    definite5,
    definite18
  },
  data() {
    const definite18 = _ => {
      const definite18 = {};
      for (let i = 0; i < 11; i++) {
        const a = `pic_${i + 1}s`;
        definite18[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return definite18;
    };
    return {
      DetailsOfIOU: definite16Normal,
      params: {
        requireCheck: "1111", // 审批意见要求
        checked: "", // 审批意见落实情况
        specialRequireCheck: "", // 产品贷后要求
        specialChecked: "", // 产品贷后落实情况
        HoldPensonRisk: "", // 实际控制人或法定代表人风险点
        managerRisk: "", // 管理层风险点
        otherRisk: "", // 其他风险点,
        // definite13的字段
        definite13: {
          checkAddr: "",
          cooperate: 1,
          addrChangedMsg: "",
          staff: ""
        },
        // definite11的字段
        definite11: {
          queryDateForPer: "2020-06-03",
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
        },
        // definite10的字段
        definite10: {
          queryDateForPer: "2020-06-03",
          // 企业实际控制人部分
          unPayOffLoanNumCon: "", //未结清贷款笔数
          unPayOffAmoutCon: "", // 未结清贷款金额
          finInstitutionNumCon: "", // 涉及金融机构
          sumBalanceCon: "", // 未结清贷款结余
          debitCardNumCon: "", //未销户贷记卡账户

          debitCardLineAmoutCon: "", //未销户贷记卡担保金额
          guaranteeNumCon: "", //对外担保笔数
          guaranteeAmoutCon: "", //对外担保金额
          guaranteeBalanceCon: "", //对外担保结余
          badRecordMsgCon: "", //  逾期及违约 不良影响
          existBadRecordCon: 1, // 逾期及违约 是否

          // 企业法定代表人部分
          unPayOffLoanNumJur: "", //未结清贷款笔数
          unPayOffAmoutJur: "", // 未结清贷款金额
          finInstitutionNumJur: "", // 涉及金融机构
          sumBalanceJur: "", // 未结清贷款结余
          debitCardNumJur: "", //未销户贷记卡账户

          debitCardLineAmoutJur: "", //授信总金额
          guaranteeNumJur: "", //对外担保笔数
          guaranteeAmoutJur: "", //对外担保金额
          guaranteeBalanceJur: "", //对外担保结余
          badRecordMsgJur: "", //  逾期及违约 不良影响
          existBadRecordJur: 1, //  逾期及违约 是否存在

          creditChageMsg4: "", // 企业实际控制人 征信变化情况说明
          existCreditChage4: 1, // 企业实际控制人 征信变化是否变化
          creditChageMsg5: "", // 企业法定代表人 征信变化情况说明
          existCreditChage5: 1, // 企业法定代表人 征信变化是否变化
          creditChageMsg6: "", // 企业其他保证人 征信变化情况说明
          existCreditChage6: "", // 企业其他保证人 征信变化是否变化
          creditChageMsg3: "", // 法人保证人 征信变化情况说明
          existCreditChage3: 1, // 法人保证人 征信变化是否变化

          RecentNegativeInformation: "",
          addedOverdues: false,
          pickerVisible: false
        },
        // definite5的字段
        definite5: {
          stockLastBalance: "", // 上次全面检查或调查时余额  存货
          stockChangSitu: "", // 本次检查存货变动情况  存货
          busIncLastBalance: "", // 上次全面检查或调查时余额  营业收入
          busIncChangSitu: "", // 本次检查存货变动情况  营业收入
          dailyExpenLastBalance: "", // 上次全面检查或调查时余额  水煤气
          dailyExpenChangSitu: "", // 本次检查存货变动情况  水煤气
          proAndOpeAbnormalSuitMsg: "" //
        },
        // definite18的字段
        definite18: definite18()
      }
    };
  },
  computed: {
    detail() {
      const newDetail = Object.assign({}, this.DetailsOfIOU, this.params);
      console.log(newDetail);
      return newDetail;
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite12里
        this.setDefinite12({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.companyInformation {
  width: 100%;
  box-sizing: border-box;
  margin-top: px2rem(-1);

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
      left: px2rem(10);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: px2rem(120);
      line-height: px2rem(15);
      top: 50%;
      left: 21%;
      transform: translate(-50%, -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }
  .formBody {
    .mint-cell {
      width: 100%;
      height: px2rem(44);
      background: rgba(255, 255, 255, 1);
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;
      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
}
.fillInInformation {
  .title {
    width: px2rem(60);
    height: px2rem(23);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    line-height: px2rem(20);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    margin: px2rem(8) px2rem(10) px2rem(-8);
  }

  .formTitle {
    background-color: #f7f7f7;
    width: 100%;
    height: px2rem(44);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
      top: 50%;
      left: px2rem(10);
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
      transform: translate(px2rem(16), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
  }
  .textarea {
    .textUpTitle {
      height: px2rem(14);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: 700;
      line-height: px2rem(20);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    }
    .text {
      border: 0;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
@import "../../../../assets/style/global.scss";
.definte12-wrapper {
  width: 100%;
  height: 100%;
  .textFiled {
    .mint-cell-title {
      width: px2rem(252) !important;
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
}
</style>
