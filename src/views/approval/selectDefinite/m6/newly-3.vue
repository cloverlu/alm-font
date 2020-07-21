<!--
 * @Descripttion: 新增 1-3
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly3">
      <div class="coInformation">
        <div class="title">客户经营情况检查</div>
        <div class="formTitle1">
          <span class="lightBlue"></span>
          <span class="coName">企业经营情况</span>
        </div>

        <div class="formBody">
          <mt-field class="textFiled" label="检查要点"></mt-field>
        </div>

        <div class="item">
          <span class="tag1">企业实际股权结构是否与上述工商信息网查询一致</span>
          <span class="info" v-if="detail.ownerStruSame === 1">是</span>
          <span class="info" v-if="detail.ownerStruSame === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.ownerStruSameMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业所在行业是否发生重大不利变化</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.industrycChangSiutMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业主营业务情况是否发生变更</span>
          <span class="info" v-if="detail.mainBusIsChanged === 1">是</span>
          <span class="info" v-if="detail.mainBusIsChanged === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.mainBusIsChangedMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业是否有与主业无关的扩张计划</span>
          <span class="info" v-if="detail.planExpandSitu === 1">是</span>
          <span class="info" v-if="detail.planExpandSitu === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.planExpandSituMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>

        <div class="item">
          <span class="tag">企业生产经营场所是否发生或即将发生变动</span>
          <span class="info" v-if="detail.addrIsChanged === 1">是</span>
          <span class="info" v-if="detail.addrIsChanged === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.addrChangedMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业主要原材料或货物的采购成本是否明显上升</span>
          <span class="info" v-if="detail.purchaseCost === 1">是</span>
          <span class="info" v-if="detail.purchaseCost === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.purchaseCostMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item1">
          <span class="tag"
            >企业生产经营是否出现异常情况(停产、半停产、销售大规模退货、员工数量骤减、劳资关系紧张、设备开工率不足、拖欠租金等)</span
          >
          <span class="info" v-if="detail.proAndOpeAbnormalSuit === 1">是</span>
          <span class="info" v-if="detail.proAndOpeAbnormalSuit === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.proAndOpeAbnormalSuitMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >企业销售是否出现异常情况(销售大规模退货、存货积压严重)</span
          >
          <span class="info" v-if="detail.saleAbnormalSuit === 1">是</span>
          <span class="info" v-if="detail.saleAbnormalSuit === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.saleAbnormalSuitMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业上下游核心客户是否发生重大变更</span>
          <span class="info" v-if="detail.chainChange === 1">是</span>
          <span class="info" v-if="detail.chainChange === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.chainChangeMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降(降幅达30%)
          </span>
          <span class="info" v-if="detail.dailyCostDecline === 1">是</span>
          <span class="info" v-if="detail.dailyCostDecline === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.dailyCostDeclineMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业生产经营是否有安全隐患</span>
          <span class="info" v-if="detail.hiddenTroubleSitu === 1">是</span>
          <span class="info" v-if="detail.hiddenTroubleSitu === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.hiddenTroubleSituMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>

        <mt-field class="textFiled other" label="其他"></mt-field>

        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.otherSitu"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>

        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">现金流调查</span>
        </div>
        <div class="other">
          <mt-field
            class="textFiled"
            label="上次检查(或调查)至本次检查期间的现金流"
          ></mt-field>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.cashLastToNow"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >剔除季节性因素后的现金流是否有大幅下降(降幅超30%)</span
          >
          <span class="info" v-if="detail.cashDecline === 1">是</span>
          <span class="info" v-if="detail.cashDecline === 0">否</span>
        </div>
        <div class="item noBorder">
          <span class="tag">现金流与营业收入是否基本匹配 </span>
          <span class="info" v-if="detail.cashMatchesAndProAndOpe === 1"
            >是</span
          >
          <span class="info" v-if="detail.cashMatchesAndProAndOpe === 0"
            >否</span
          >
        </div>

        <mt-field class="textFiled other" label="其他"></mt-field>

        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.cashOtherMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查要点小结</span>
        </div>

        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.summaryForCheck"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, Field } from "mint-ui";

export default {
  components: {
    "mt-field": Field
  },
  props: ["detail"],
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
// @import "../../../../assets/style/global.scss";
.coInformation {
  width: 100%;
  box-sizing: border-box;
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

  .formTitle1 {
    width: 100%;
    height: px2rem(34);
    position: relative;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
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
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
  }
  .item {
    background-color: #fff;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    padding: 0 px2rem(16);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-of-type {
      // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      border: 0;
      // padding: 0;
    }
    .tag {
      flex: 0 0 px2rem(294);
      text-align: left;
      color: #090909;
    }
    .tag1 {
      flex: 0 0 px2rem(260);
      text-align: left;
      color: #090909;
      line-height: px2rem(22);
    }
    .tag2 {
      flex: 0 0 px2rem(294);
      text-align: left;
      color: #090909;
      font-size: px2rem(13);
      line-height: px2rem(15);
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

  .noBorder {
    border: 0;
  }

  .item1 {
    background-color: #fff;
    width: 100%;
    height: px2rem(55);
    line-height: px2rem(55);
    padding: 0 px2rem(16);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    .tag {
      flex: 0 0 px2rem(294);
      text-align: left;
      color: #090909;
      font-size: px2rem(14);
      line-height: px2rem(15);
      margin-top: px2rem(4);
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

  .formBody {
    background-color: #fff;
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

    .mint-cell {
      width: 100%;
      height: px2rem(44);
      background: rgba(255, 255, 255, 1);
      // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;

      &:last-of-type {
        // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
  .other {
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
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
      left: px2rem(16);
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
      left: 22%;
      transform: translate(-50%, -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
// @import "../../../../assets/style/global.scss";
.newly3 {
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
      width: px2rem(290) !important;
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
