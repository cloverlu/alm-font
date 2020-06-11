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
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.ownerStruSame"
            :triggerId="ownerStruSame"
            :title="selectTitle1"
            :fontColor="fontColor"
            @getSelectValue="getSelectOwnerStruSame"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.ownerStruSameMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业所在行业是否发生重大不利变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.IndustrycChangSiut"
            :triggerId="IndustrycChangSiut"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelectIndustrycChangSiut"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.IndustrycChangSiutMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业主营业务情况是否发生变更</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.mainBusIsChanged"
            :triggerId="mainBusIsChanged"
            :title="selectTitle3"
            :fontColor="fontColor"
            @getSelectValue="getSelectMainBusIsChanged"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.mainBusIsChangedMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业是否有与主业无关的扩张计划</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.planExpandSitu"
            :triggerId="planExpandSitu"
            :title="selectTitle4"
            :fontColor="fontColor"
            @getSelectValue="getSelectPlanExpandSitu"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.planExpandSituMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>

        <div class="item">
          <span class="tag">企业生产经营场所是否发生或即将发生变动</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.addrIsChanged"
            :triggerId="addrIsChanged"
            :title="selectTitle5"
            :fontColor="fontColor"
            @getSelectValue="getSelectAddrIsChanged"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.addrChangedMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业主要原材料或货物的采购成本是否明显上升</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.purchaseCost"
            :triggerId="purchaseCost"
            :title="selectTitle6"
            :fontColor="fontColor"
            @getSelectValue="getSelectPurchaseCost"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.purchaseCostMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item1">
          <span class="tag"
            >企业生产经营是否出现异常情况(停产、半停产、销售大规模退货、员工数量骤减、劳资关系紧张、设备开工率不足、拖欠租金等)</span
          >
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.proAndOpeAbnormalSuit"
            :triggerId="proAndOpeAbnormalSuit"
            :title="selectTitle7"
            :fontColor="fontColor"
            @getSelectValue="getSelectProAndOpeAbnormalSuit"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.proAndOpeAbnormalSuitMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >企业销售是否出现异常情况(销售大规模退货、存货积压严重)</span
          >
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.saleAbnormalSuit"
            :triggerId="saleAbnormalSuit"
            :title="selectTitle8"
            :fontColor="fontColor"
            @getSelectValue="getSelectSaleAbnormalSuit"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.saleAbnormalSuitMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业上下游核心客户是否发生重大变更</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.chainChange"
            :triggerId="chainChange"
            :title="selectTitle9"
            :fontColor="fontColor"
            @getSelectValue="getSelectChainChange"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.chainChangeMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降(降幅达30%)
          </span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.dailyCostDecline"
            :triggerId="dailyCostDecline"
            :title="selectTitle10"
            :fontColor="fontColor"
            @getSelectValue="getSelectDailyCostDecline"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.dailyCostDeclineMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>
        <div class="item">
          <span class="tag">企业生产经营是否有安全隐患</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.hiddenTroubleSitu"
            :triggerId="hiddenTroubleSitu"
            :title="selectTitle11"
            :fontColor="fontColor"
            @getSelectValue="getSelectHiddenTroubleSitu"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.hiddenTroubleSituMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体描述（每条必须有具体描述内容）"
        ></mt-field>

        <mt-field class="textFiled other" label="其他"></mt-field>

        <mt-field
          type="textarea"
          rows="3"
          v-model="params.otherSitu"
          class="textArea"
          style="overflow:hidden"
          placeholder="xxxx"
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
          v-model="params.cashLastToNow"
          class="textArea"
          style="overflow:hidden"
          placeholder="xxxx"
        ></mt-field>
        <div class="item">
          <span class="tag1"
            >剔除季节性因素后的现金流是否有大幅下降(降幅超30%)</span
          >
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.cashDecline"
            :triggerId="cashDecline"
            :title="selectTitle12"
            :fontColor="fontColor"
            @getSelectValue="getSelectCashDecline"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <div class="item noBorder">
          <span class="tag">现金流与营业收入是否基本匹配</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.cashMatchesAndProAndOpe"
            :triggerId="cashMatchesAndProAndOpe"
            :title="selectTitle13"
            :fontColor="fontColor"
            @getSelectValue="getSelectCashMatchesAndProAndOpe"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>

        <mt-field class="textFiled other" label="其他"></mt-field>

        <mt-field
          type="textarea"
          rows="3"
          v-model="params.cashOtherMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="xxxx"
        ></mt-field>
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查要点小结</span>
        </div>

        <mt-field
          type="textarea"
          rows="3"
          v-model="params.summaryForCheck"
          class="textArea"
          style="overflow:hidden"
          placeholder="xxxx"
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
    "mt-field": Field,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      yesNo: yesNo,
      ownerStruSame: "ownerStruSame",
      IndustrycChangSiut: "IndustrycChangSiut",
      mainBusIsChanged: "mainBusIsChanged",
      planExpandSitu: "planExpandSitu",
      addrIsChanged: "addrIsChanged",
      hiddenTroubleSitu: "hiddenTroubleSitu",
      purchaseCost: "purchaseCost",
      proAndOpeAbnormalSuit: "proAndOpeAbnormalSuit",
      saleAbnormalSuit: "saleAbnormalSuit",
      chainChange: "chainChange",
      dailyCostDecline: "dailyCostDecline",
      // orderDecline: "orderDecline",
      cashDecline: "cashDecline",
      cashMatchesAndProAndOpe: "cashMatchesAndProAndOpe",
      addedLoans: "addedLoans",
      shrinkLoanScale: "shrinkLoanScale",
      addedGuarantees: "addedGuarantees",
      popupVisible: false,
      payType: 1,
      fontColor: "blue",
      selectTitle1: "企业实际股权结构是否与上述工商信息网查询一致",
      selectTitle2: "企业所在行业是否发生重大不利变化",
      selectTitle3: "企业主营业务情况是否发生变更",
      selectTitle4: "企业是否有与主业无关的扩张计划",
      selectTitle5: "企业生产经营场所是否发生或即将发生变动",
      selectTitle6: "企业主要原材料或货物的采购成本是否明显上升",
      selectTitle7: "企业生产经营是否出现异常情况",
      selectTitle8: "企业销售是否出现异常情况",
      selectTitle9: "企业上下游核心客户是否发生重大变更",
      selectTitle10:
        "制造型企业水、电、煤、气等资源消耗量是否较上年同期明显下降(降幅达30%)",
      selectTitle11: "企业生产经营是否有安全隐患",
      selectTitle12: "剔除季节性因素后的现金流是否有大幅下降(降幅超30%)",
      selectTitle13: "现金流与营业收入是否基本匹配",
      params: {
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
      }
    };
  },
  methods: {
    getSelectOwnerStruSame(data) {
      this.params.ownerStruSame = data.key;
    },
    getSelectIndustrycChangSiut(data) {
      this.params.IndustrycChangSiut = data.key;
    },
    getSelectMainBusIsChanged(data) {
      this.params.mainBusIsChanged = data.key;
    },
    getSelectPlanExpandSitu(data) {
      this.params.planExpandSitu = data.key;
    },
    getSelectAddrIsChanged(data) {
      this.params.addrIsChanged = data.key;
    },
    getSelectHiddenTroubleSitu(data) {
      this.params.hiddenTroubleSitu = data.key;
    },
    getSelectPurchaseCost(data) {
      this.params.purchaseCost = data.key;
    },
    getSelectProAndOpeAbnormalSuit(data) {
      this.params.proAndOpeAbnormalSuit = data.key;
    },
    getSelectSaleAbnormalSuit(data) {
      this.params.saleAbnormalSuit = data.key;
    },
    getSelectChainChange(data) {
      this.params.chainChange = data.key;
    },
    getSelectDailyCostDecline(data) {
      this.params.dailyCostDecline = data.key;
    },
    // getSelectOrderDecline(data) {
    //   this.params.orderDecline = data.key;
    // },
    getSelectCashDecline(data) {
      this.params.cashDecline = data.key;
    },
    getSelectCashMatchesAndProAndOpe(data) {
      this.params.cashMatchesAndProAndOpe = data.key;
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite5里
        this.setDefinite5({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
    padding: 0 px2rem(10);
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
    padding: 0 px2rem(10);
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
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
@import "../../../assets/style/global.scss";
.newly3 {
  width: 100%;
  height: 100%;
  .textFiled {
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
