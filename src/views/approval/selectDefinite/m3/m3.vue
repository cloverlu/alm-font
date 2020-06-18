<!--
 * @Descripttion: 新增1-8
 * @Author: penglu
 * @Date: 2020-06-10 11:30:49
-->

<template lang="pug">
	.credit-overall
		.newly-18
			.definite-field
				.item
					span(class="tag") 授信金额
					span(class="info") {{detail.lineAmout}}
				.item
					span(class="tag") 授信余额
					span(class="info") {{detail.lineBalance}}
				.item
					span(class="tag") 担保方式
					span(class="info" v-if="detail.securityKind === 1") 信用
					span(class="info" v-else-if="detail.securityKind === 2") 抵押
					span(class="info" v-else-if="detail.securityKind === 3") 质押
					span(class="info" v-else-if="detail.securityKind === 4") 保证
					span(class="info" v-else-if="detail.securityKind === 5") 其它
				.item(class="input-item" v-if="detail.securityKind === 5")
					mt-field(v-model="detail.otherSecurityKindMsg" class="textArea other-textArea" type="input"  :disabled="true")
				.item
					span(class="tag") 还款方式
					span(class="info") {{detail.repayKind}}
			.definite-1-title2
				span 填写信息
			.definite-smalltitle(class="blue-titile-one")
				span(class="colum-blue")
				span  审批意见中贷后日常检查要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" :info="detail.fieldOne" ref="fieldOne" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  产品贷后日常检查特殊要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldSpecial" :info="detail.fieldTwo" ref="fieldTwo" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  利率及综合金融服务的要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldRate" :info="detail.fieldThree" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  实际控制人或法定代表人风险点
			.newly-18-field(class="small-one")
				fieldOne(:definite="newly18One" :info="detail.fieldFour" ref="fieldFour" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  管理层风险点
			.newly-18-field(class="small-two")
				fieldOne(:definite="newly18Two" :info="detail.fieldFive" ref="fieldFive" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  近期检查发现的其他风险点
			.newly-18-field(class="small-three")
				mt-field(v-model="detail.otherRisk" :disabled="true" class="textArea" type="textarea" rows="3" )
			definite13(:detail="params.definite13")
			definite10(:detail="params.definite10")
			credit89(:detail="params.credit89") 
			definite6(:detail="params.definite6") 
			definite17(:detail="params.definite17") 
</template>

<script>
import {
  newly18,
  securityKinds,
  definite1Field,
  definite1FieldSpecial,
  definite1FieldRate,
  newly18One,
  newly18Two
} from "../../../../utils/dataMock.js";

import fieldOne from "../../../loanInspection/components/fieldOne";
import definite13 from "../m2/definite-13";
import definite10 from "../m2/definite-10";
import credit89 from "../m3/credit89";
import definite6 from "../m3/definite6";
import definite17 from "../m3/definite-17";

export default {
  components: {
    fieldOne,
    definite13,
    definite10,
    credit89,
    definite6,
    definite17
  },
  data() {
    const definite17 = _ => {
      const definite17 = {};
      for (let i = 0; i < 12; i++) {
        const a = `pic_${i + 1}s`;
        definite17[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return definite17;
    };
    return {
      newly18: newly18,
      definite1Field: definite1Field,
      definite1FieldSpecial: definite1FieldSpecial,
      definite1FieldRate: definite1FieldRate,
      newly18One: newly18One,
      newly18Two: newly18Two,
      params: {
        securityKind: 5,
        otherSecurityKindMsg: "",
        repayKind: "",
        fieldOne: {
          requireCheck: "", //审批意见中贷后日常检查要求及落实情况
          checked: "" //审批意见中贷后日常检查要求及落实情况
        },
        fieldTwo: {
          specialRequireCheck: "", //产品贷后日常检查特殊要求及落实情况
          specialChecked: "" //产品贷后日常检查特殊要求及落实情况
        },
        fieldThree: {
          rateAndIntfinSerCheck: "", // 利率及综合金融服务的要求及落实情况
          rateAndIntfinSerChecked: "" // 利率及综合金融服务的要求及落实情况
        },
        fieldFour: {
          HoldPensonRisk: "" //实际控制人或法定代表人风险点
        },
        fieldFive: {
          managerRisk: "" //管理层风险点
        },
        otherRisk: "", //近期检查发现的其他风险点
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
        credit89: {
          financeClassification: 1, //1-加工制造类；2-贸易及其他
          caiwuOne: {
            colDebtBalance: 2222222, //当前余额
            colDebtLastBalance: 12, //应收票据上期检查（或调查）时点余额
            colDebtChang30Msg: 334444444, // 应收票据变动超过30%，原因
            stockChangSitu: 11, //存货上次全面检查或调查时余额
            stockLastBalance: 333, //存货本次检查存货变动情况
            stockChang30Msg: 534543656, // 存货变动超过30%，原因
            loanForPsonBalance: 4454, //私人借款当前余额
            loanForPsonLastBalance: 645767, //私人借款上期检查（或调查）时点余额
            loanForPsonChang30Msg: 5465476, // 私人借款变动超过30%，原因
            payDebtBalance: 4543543, //应付票据当前余额
            payDebtLastBalance: 3454354, //应付票据上期检查（或调查）时点余额
            payDebtChang30Msg: 346345 // 应付票据变动超过30%，原因
          },
          caiwuTwo: {
            colCapitalBalance: "", //应收账款当前余额
            colCapitalLastBalance: "", //应收账款上期检查（或调查）时点余额
            colCapitalChang30Msg: "", // 应收账款变动超过30%，原因
            loanForBankBalance: "", //银行借款当前余额
            loanForBankLastBalance: "", //银行借款上期检查（或调查）时点余额
            loanForBankChang30Msg: "", // 银行借款变动超过30%，原因
            payCapitalBalance: "", //应收账款当前余额
            payCapitalLastBalance: "", //应收账款上期检查（或调查）时点余额
            payCapitalChang30Msg: "" // 应收账款变动超过30%，原因}
          },
          caiwuThree: {
            busInc3MSitu: "", //营业收入近三个月的情况
            busIncChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
            dailyExpen3MSitu: "", //近三个月的情况
            dailyExpenChang30Msg: "", // 变动超过30%，原因
            emplCost3M: "", //近三个月的情况
            emplCostChang30Msg: "", // 变动超过30%，原因
            cash3M: "", //近三个月的情况
            cashChang30Msg: "" // 应收账款变动超过30%，原因
          },
          caiwuFour: {
            materialCost3M: "", //营业收入近三个月的情况
            materialCostChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
            financeCost3M: "", //近三个月的情况
            financeCostChang30Msg: "", // 变动超过30%，原因
            payTaxAmout3M: "", //近三个月的情况
            payTaxAmoutChang30Msg: "", // 变动超过30%，原因
            profit3M: "", //近三个月的情况
            profitChang30Msg: "" // 应收账款变动超过30%，原因
          },
          caiwuSeven: {
            busInc3MSitu: "", //营业收入近三个月的情况
            busIncChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
            emplCost3M: "", //近三个月的情况
            emplCostChang30Msg: "", // 变动超过30%，原因
            cash3M: "", //近三个月的情况
            cashChang30Msg: "", // 变动超过30%，原因
            profit3M: "", //近三个月的情况
            profitChang30Msg: "" // 应收账款变动超过30%，原因
          },
          caiwuEight: {
            materialCost3M: "", //营业收入近三个月的情况
            materialCostChang30Msg: "", // 营业收入剔除季节性因素后变动超30%，原因
            financeCost3M: "", //近三个月的情况
            financeCostChang30Msg: "", // 变动超过30%，原因
            payTaxAmout3M: "", //近三个月的情况
            payTaxAmoutChang30Msg: "" // 变动超过30%，原因
          }
        },
        definite6: {
          IndustrycChangSiut: 0, //企业所在行业是否发生重大不利变化
          planExpandSitu: 0, //企业是否有与主业无关的扩张计划
          hiddenTroubleSitu: 0, //生产经营是否存在安全隐患
          IndustrycChangSiutMsg: "", //企业所在行业是否发生重大不利变化具体情况
          planExpandSituMsg: "", //企业是否有与主业无关的扩张计划具体情况
          hiddenTroubleSituMsg: "", //生产经营是否存在安全隐患具体情况
          collEstimateDate: "", //上次抵质押物评估或重估日期
          collEstimateValue: "", //上次抵质押物评估或重估金额
          otherSitu: "" //其他情况
        },
        definite17: definite17()
      }
    };
  },
  computed: {
    detail() {
      const newDetail = Object.assign({}, this.newly18, this.params);
      console.log(newDetail);
      return newDetail;
    }
  },

  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.credit-overall {
  width: 100%;
  height: 100%;
  .newly-18 {
    width: 100%;
    height: 100%;
    .definite-field {
      &.add-item {
        height: px2rem(264);
      }
      .input-item {
        padding: inherit;
        .other-textArea {
          height: px2rem(44);
        }
      }
    }
    .blue-titile-one {
      height: px2rem(24);
      line-height: px2rem(24);
    }
    .blue-titile-two {
      height: px2rem(44);
      line-height: px2rem(44);
    }
    .newly-18-field {
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
