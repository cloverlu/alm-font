<!--
 * @Descripttion: 新增 1
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="newly1-wrapper">
      <div class="newly1">
        <div class="companyInformation">
          <div class="formBody">
            <mt-cell
              class="textFiled"
              title="贷后检查模式"
              :value="detail.checkModel"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="授信金额"
              :value="detail.lineAmout"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="授信余额"
              :value="detail.lineBalance"
            ></mt-cell>
            <div class="item m6-item">
              <span class="tag">担保方式</span>
              <span class="info" v-if="detail.securityKind === 1">信用</span>
              <span class="info" v-else-if="detail.securityKind === 2"
                >抵押</span
              >
              <span class="info" v-else-if="detail.securityKind === 3"
                >质押</span
              >
              <span class="info" v-else-if="detail.securityKind === 4"
                >保证</span
              >
              <span class="info" v-else-if="detail.securityKind === 5"
                >其它</span
              >
            </div>
            <mt-field
              v-if="detail.securityKind === 5"
              class="textFiled"
              label="其他xxxx"
              :disabled="true"
            ></mt-field>
            <mt-cell
              class="textFiled"
              title="还款方式"
              :value="detail.repayKind"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="检查地点"
              :value="detail.practicableCheckAddr"
            ></mt-cell>
            <div class="item">
              <span class="tag">检查配合程度</span>
              <span class="info" v-if="detail.cooperate === 1">配合</span>
              <span class="info" v-else-if="detail.cooperate === 0"
                >不配合</span
              >
            </div>
            <div class="item">
              <span class="tag">额度年检</span>
              <span class="info">{{ detail.yearlyInspection }}</span>
            </div>
            <div class="item">
              <span class="tag">押品重估</span>
              <span class="info">{{ detail.revalOfColl }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <newly2 :detail="detail.newly2"></newly2>
    <newly3 :detail="detail.newly3"></newly3>
    <newly45 :detail="detail.newly45"></newly45>
    <definite16 :detail="detail.m6Imagelist"></definite16>
  </div>
</template>

<script>
import newly2 from "../m6/newly-2";
import newly3 from "../m6/newly-3";
import newly45 from "../m6/newly-45";
import definite16 from "../m6/definite-16";
import { Field, Cell } from "mint-ui";
export default {
  components: {
    "mt-field": Field,
    "mt-cell": Cell,
    newly2,
    newly3,
    newly45,
    definite16
  },
  data() {
    const m6Imagelist = _ => {
      const m6Imagelist = {};
      for (let i = 0; i < 10; i++) {
        const a = `pic_${i + 1}s`;
        m6Imagelist[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return m6Imagelist;
    };
    return {
      params: {
        checkType: "", // 检查类型
        checkModel: "", // 检查模式
        lineAmout: "", // 授信金额
        lineBalance: "", // 授信余额
        securityKind: 1, // 担保方式
        cooperate: 1, // 检查配合程度
        yearlyInspection: 1, // 额度年检
        revalOfColl: 1, // 押品重估
        newly2: {
          fiveClass: "", // 当前企业及实际控制人征信情况（注明征信查询分类结果)
          addedOverdues: 0, // 企业或企业主征信是否有新增逾期记录  客户资信检查
          addedOverduesMsg: "", // 当前企业及实际控制人征信情况 说明
          addedLoans: 0, // 企业或企业主是否有他行新增贷款  客户资信检查
          addedLoansMsg: "", // 企业或企业主是否有他行新增贷款情况 说明
          shrinkLoanScale: 0, // 企业或企业主是否有他行收缩贷款规模  客户资信检查
          shrinkLoanScaleMsg: "", // 企业或企业主是否有他行收缩贷款规模 说明
          addedGuarantees: 0, // 企业或企业主是否有新增对外担保记录  客户资信检查
          addedGuaranteesMsg: "", // 企业或企业主是否有新增对外担保记录 说明
          otherSitu: 0, // 企业或企业主是否有其他异常变化  客户资信检查
          otherSituMsg: "" // 企业或企业主是否有其他异常变化 说明
        },
        newly3: {
          ownerStruSame: 0, // 企业实际股权结构是否与上述工商信息网查询一致
          ownerStruSameMsg: "", // 实际股权结构与工商信息网查询说明
          IndustrycChangSiut: 0, // 企业所在行业是否发生重大不利变化
          IndustrycChangSiutMsg: "", // 企业所在行业是否发生重大不利变化具体情况
          mainBusIsChanged: 0, // 企业主营业务情况是否发生变更
          mainBusIsChangedMsg: "", // 企业主营业务情况是否发生变更情况
          planExpandSitu: 0, // 企业是否有与主业无关的扩张计划
          planExpandSituMsg: "", // 企业是否有与主业无关的扩张计划具体情况
          addrIsChanged: 0, // 生产经营场所是否发生变化
          addrChangedMsg: "", // 生产经营场所变动情况
          hiddenTroubleSitu: 0, // 生产经营是否存在安全隐患
          hiddenTroubleSituMsg: "", // 生产经营是否存在安全隐患具体情况
          purchaseCost: 0, // 企业主要原材料或货物的采购成本是否明显上升
          purchaseCostMsg: "", // 企业主要原材料或货物的采购成本是否明显上升情况
          proAndOpeAbnormalSuit: 0, // 企业生产经营是否出现异常情况
          proAndOpeAbnormalSuitMsg: "", // 企业生产经营是否出现异常情况说明
          saleAbnormalSuit: 0, // 企业销售是否出现异常情况
          saleAbnormalSuitMsg: "", // 企业销售是否出现异常情况说明
          chainChange: 0, // 企业上下游核心客户是否发生重大变更
          chainChangeMsg: "", // 企业上下游核心客户发生重大变更说明
          dailyCostDecline: 0, // 制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降（降幅达30%）
          dailyCostDeclineMsg: "", // 制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降（降幅达30%）shuoming
          // orderDecline: 0, // 企业订单是否出现大幅下降（降幅达30%）
          // orderDeclinemsg: "", // 企业订单出现大幅下降（降幅达30%）说明
          cashLastToNow: "", // 上次检查（或调查）至本次检查期间的现金
          cashDecline: 0, // 剔除季节性因素后的现金流是否有大幅下降（降幅超30%）
          cashMatchesAndProAndOpe: 0, // 现金流与营业收入是否基本匹配
          cashOtherMsg: "", // 现金流其他说明
          summaryForCheck: "", // 检查要点小结
          otherSitu: "" // 其他情况
        },
        newly45: {
          assitInfoForPledge: [
            {
              assitName: "", //押品名称
              assitAddr: "", //押品位置地址
              firstEstimateDate: "", //首次评估情况
              firstEstimateValue: "", //我行认定价值
              firstMortAndpleRate: "", //抵质押率
              LastEstimateDate: "", //最近一次评估情况
              LastEstimateValue: "", //我行认定价值
              LastMortAndpleRate: "", //抵质押率
              thisEstimateDate: "", //本次评估情况
              thisEstimateValue: "", //我行认定价值
              thisMortAndpleRate: "" //抵质押率
            }
          ],
          fieldOne: {
            assitChangeSuit: "", //押品价值及变现能力变动情况
            assitOtherSuit: "", //押品其他情况
            summaryForAssit: "" //押品检查小结
          },
          assitInfoForGuarantee: [
            {
              assitName: "", //担保公司名称
              CooperatStatus: "", //我行合作状态
              assitFiveClass: "" //风险分类
            }
          ]
        },
        m6Imagelist: m6Imagelist()
      }
    };
  },
  computed: {
    detail() {
      const newDetail = this.params;
      console.log(newDetail);
      return newDetail;
    }
  },
  methods: {},
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    // nextFooter(val, oldval) {
    //   if (val !== oldval) {
    //     // 将数据存入vuex里的setDefinite12里
    //     this.setDefinite12({ params: this.params });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.newly1-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .companyInformation {
    width: 100%;
    box-sizing: border-box;

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
      background-color: #fff;
      .item {
        background-color: #fff;
        width: 100%;
        // height: px2rem(44);
        // line-height: px2rem(44);
        padding: px2rem(15) px2rem(16);
        display: flex;
        font-size: px2rem(14);
        box-sizing: border-box;
        border-top: px2rem(1) solid rgba(229, 229, 229, 1);
        &:last-child {
          border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
          // border: none;
          // padding: 0;
        }
        .tag {
          flex: 0 0 px2rem(100);
          text-align: left;
          color: #090909;
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

      .mint-cell {
        width: 100%;
        height: px2rem(44);
        background: rgba(255, 255, 255, 1);
        border-top: px2rem(1) solid rgba(229, 229, 229, 1);
        opacity: 1;

        &:last-of-type {
          // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../../../assets/style/global.scss";
.newly1 {
  width: 100%;
  height: 100%;
  .textFiled {
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
}
</style>
