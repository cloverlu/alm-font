<!--
 * @Descripttion: 申请明细 14
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite14" v-if="hasRouterChild2">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coNameBlack">存货</span>
      </div>
      <mt-cell
        class="textFiled"
        title="检查类型"
        :value="params.bizType"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="客户名称"
        :value="params.custName"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="合同编号"
        :value="params.contractNo"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="授信业务小类"
        :value="params.bizSubKind"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="贷款金额"
        :value="params.loanAmout"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="贷款期限"
        :value="params.loanLength"
      ></mt-cell>
      <mt-field
        class="textFiled"
        label="还款方式"
        placeholder="10"
        v-model="params.repayKind"
      ></mt-field>
      <mt-field
        class="textFiled"
        label="还款日期"
        placeholder="10"
        v-model="params.repayDate"
      ></mt-field>
      <mt-field class="textFiled" label="约定用途"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.loanPurpose"
        class="text"
        style="overflow:hidden"
        placeholder="请输入"
      ></mt-field>
      <div class="item1">
        <span class="tag">贷款支付方式</span>
        <almSelect
          :selectData="payKindsArr"
          :defaultValue="params.payKind"
          :triggerId="payKind"
          :title="selectTitle1"
          :fontColor="fontColor"
          @getSelectValue="getSelect1"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>

      <div class="formTitle1">
        <span class="lightBlue"></span>
        <span class="coName">检查内容</span>
      </div>

      <mt-field class="textFiled" label="资金使用情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.detailMsg4useAmout"
        class="text"
        style="overflow:hidden"
        placeholder="包括支付对象名称、金额等，必要时可收集汇款凭证、商务合同、账户流水等证明材料进行佐证。"
      ></mt-field>
      <div class="item1">
        <span class="tag">是否按合同约定的用途使用信贷资金</span>
        <almSelect
          :selectData="yesNo"
          :defaultValue="params.useAmoutByContract"
          :triggerId="useAmoutByContract"
          :title="selectTitle2"
          :fontColor="fontColor"
          @getSelectValue="getSelect2"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>
      <div class="item1">
        <span class="tag">是否履行合同约定</span>
        <almSelect
          :selectData="yesNo"
          :defaultValue="params.executeCon"
          :triggerId="executeCon"
          :title="selectTitle3"
          :fontColor="fontColor"
          @getSelectValue="getSelect3"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>

      <mt-field class="textFiled" label="情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.msg"
        class="text"
        style="overflow:hidden"
        placeholder="xxxx"
      ></mt-field>
      <div class="item1">
        <span class="tag">对我行检查的态度</span>
        <almSelect
          :selectData="coordinate"
          :defaultValue="params.cooperate"
          :triggerId="cooperate"
          :title="selectTitle4"
          :fontColor="fontColor"
          @getSelectValue="getSelect4"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>

      <mt-field class="textFiled" label="情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.otherSitu"
        class="text"
        style="overflow:hidden"
        placeholder="xxxx"
      ></mt-field>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import {
  DetailsOfIOU,
  payKindsArr,
  yesNo,
  coordinate
} from "../../../utils/dataMock";
import { Field, Cell } from "mint-ui";
import { loanInspectionMixin } from "../../../utils/mixin";
import almSelect from "../components/select";
export default {
  mixins: [loanInspectionMixin],
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    almSelect
  },
  data() {
    return {
      hasRouterChild2: this.$route.params.hasRouterChild2,
      DetailsOfIOU: DetailsOfIOU,
      payKindsArr: payKindsArr,
      coordinate: coordinate,
      yesNo: yesNo,
      popupVisible: false,
      payType: 1,
      selectTitle1: "贷款支付方式",
      selectTitle2: "是否按合同约定的用途使用信贷资金",
      selectTitle3: "是否履行合同约定",
      selectTitle4: "对我行检查的态度",
      fontColor: "blue",
      payKind: "payKind",
      useAmoutByContract: "useAmoutByContract",
      executeCon: "executeCon",
      cooperate: "cooperate",
      params: {
        bizType: "小企业授信业务还款资金落实情况检查", // 检查类型
        custName: "王健林", // 客户名称
        contractNo: "440000002200111", //  合同编号
        bizSubKind: "xx", //  授信业务小类
        loanAmout: "1000000000", // 贷款金额
        loanLength: "2040-08-25", // 贷款期限
        payKind: 1, // 贷款支付方式
        repayKind: "", // 还款方式
        repayDate: "", // 还款日期
        loanPurpose: "", // 约定用途
        detailMsg4useAmout: "", // 资金使用情况详细说明
        useAmoutByContract: 1, //是否按合同约定的用途使用信贷资金
        executeCon: 1, //是否履行合同约定
        cooperate: 1, //对我行检查的态度
        otherSitu: "" // 其他
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasRouterChild2 = to.name === "fastCreditFirstIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasRouterChild2 = to.name === "fastCreditFirstIndex";
    next();
  },
  methods: {
    getSelect1: function(data) {
      this.params.payKind = data.key;
    },
    getSelect2: function(data) {
      this.params.useAmoutByContract = data.key;
    },
    getSelect3: function(data) {
      this.params.executeCon = data.key;
    },
    getSelect4: function(data) {
      this.params.cooperate = data.key;
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
.definite14 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    background-color: #f7f7f7;
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
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(16), -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }

  .formTitle1 {
    width: 100%;
    height: px2rem(44);
    position: relative;
    background-color: #f7f7f7;
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
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(24), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
  }

  .mint-cell {
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-of-type {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
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
      padding: 0 px2rem(10);
    }
    .tag {
      width: px2rem(224);
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
      width: px2rem(140);
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
  // .margintop {
  //   margin-top: px2rem(1);
  // }
}
</style>

<style lang="scss">
@import "../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definite14 {
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
      width: px2rem(224) !important;
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
