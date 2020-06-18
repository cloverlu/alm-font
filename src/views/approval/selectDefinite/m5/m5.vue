<!--
 * @Descripttion: 申请明细 14
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite14">
      <mt-cell
        class="textFiled"
        title="客户名称"
        :value="detail.custName"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="合同编号"
        :value="detail.contractNo"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="授信业务小类"
        :value="detail.bizSubKind"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="贷款金额"
        :value="detail.loanAmout"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="贷款期限"
        :value="detail.loanLength"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="还款方式"
        :value="detail.repayKind"
      ></mt-cell>
      <mt-cell
        class="textFiled"
        title="还款日期"
        :value="detail.repayDate"
      ></mt-cell>
      <mt-field class="textFiled" label="约定用途"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="detail.loanPurpose"
        class="text"
        style="overflow:hidden"
        :disabled="true"
      ></mt-field>
      <div class="item1">
        <span class="tag">贷款支付方式</span>
        <span class="info" v-if="detail.payKind === 1"> 贷款人受托支付 </span>
        <span class="info" v-if="detail.payKind === 2">借款人自主支付 </span>
        <span class="info" v-if="detail.payKind === 3"> 受托支付+自主支付</span>
      </div>

      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">检查内容</span>
      </div>

      <mt-field class="textFiled" label="资金使用情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="detail.detailMsg4useAmout"
        class="text"
        style="overflow:hidden"
        :disabled="true"
      ></mt-field>
      <div class="item1">
        <span class="tag">是否按合同约定的用途使用信贷资金</span>
        <span class="info" v-if="detail.useAmoutByContract === 1">是</span>
        <span class="info" v-if="detail.useAmoutByContract === 0">否</span>
      </div>
      <div class="item1">
        <span class="tag">是否履行合同约定</span>
        <span class="info" v-if="detail.executeCon === 1">是</span>
        <span class="info" v-if="detail.executeCon === 0">否</span>
      </div>

      <mt-field class="textFiled" label="情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="detail.msg"
        class="text"
        style="overflow:hidden"
        :disabled="true"
      ></mt-field>
      <div class="item1">
        <span class="tag">对我行检查的态度</span>
        <span class="info" v-if="detail.cooperate === 1">配合</span>
        <span class="info" v-if="detail.cooperate === 0">不配合</span>
      </div>

      <mt-field class="textFiled" label="情况说明"></mt-field>
      <mt-field
        type="textarea"
        rows="3"
        v-model="detail.otherSitu"
        class="text"
        style="overflow:hidden"
        :disabled="true"
      ></mt-field>
    </div>
    <definite16 :detail="detail.definite16"></definite16>
  </div>
</template>

<script>
import { Field, Cell } from "mint-ui";
import definite16 from "../m5/definite-16";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    definite16
  },
  data() {
    const definite16 = _ => {
      const definite16 = {};
      for (let i = 0; i < 11; i++) {
        const a = `pic_${i + 1}s`;
        definite16[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return definite16;
    };
    return {
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
        otherSitu: "", // 其他
        definite16: definite16()
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
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.definite14 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: px2rem(-1);
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
    padding: 0 px2rem(10);
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
@import "../../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definite14 {
  width: 100%;
  height: 100%;
  .textFiled {
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
