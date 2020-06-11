<!--
 * @Descripttion: 流程 2-4
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="processing4">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">一级支行/二级分行检查情况</span>
      </div>
      <div class="item1">
        <span class="tag1">是否存在风险预警信号</span>
        <almSelect
          :selectData="yesNo"
          :defaultValue="params.existSignal"
          :triggerId="existSignal"
          :title="selectTitle"
          :fontColor="fontColor"
          @getSelectValue="getSelect"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>
      <mt-cell class="textFiled" title="发生阶段"></mt-cell>
      <mt-cell class="textFiled" title="预警信号说明"></mt-cell>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.stockChangSitu"
        class="text"
        style="overflow:hidden"
        placeholder="sss"
      ></mt-field>
      <mt-cell class="textFiled" title="检查结论及措施建议"></mt-cell>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.InspConAndSug"
        class="text"
        style="overflow:hidden"
        placeholder="sss"
      ></mt-field>
      <div class="definite-13-wrapper">
        <div class="definite-smalltitle">
          <span class="colum-blue"></span>
          <span>影像维护</span>
        </div>
        <div class="definite-13-content">
          <imageUpload
            v-for="item in processing4"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
      <div class="signBox">
        <span class="left"
          >复核人员（签字）：<span
            class="iconfont iconqianzi"
            @click="goSign()"
          ></span
        ></span>
        <span class="right">2020-06-01</span>
      </div>
      <div class="subBox">
        <div class="submit">
          <mt-button type="primary" size="large">提交审批</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, yesNo, processing4 } from "../../../utils/dataMock";
import imageUpload from "../components/imageUpload";
import { Field, Cell, Button } from "mint-ui";
import almSelect from "../components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    "mt-button": Button,
    almSelect,
    imageUpload
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      processing4: processing4(),
      popupVisible: false,
      payType: 1,
      selectTitle: "是否存在风险预警信号",
      fontColor: "blue",
      yesNo: yesNo,
      existSignal: "existSignal",
      params: {
        existSignal: 0, // 检查类型
        InspConAndSug: "", // 客户名称
        loanAmout: "1000000000", // 贷款金额
        loanBalance: "999999", // 贷款余额
        loanLength: "2040-08-25", // 贷款期限
        repayKind: "", // 还款方式
        repayDate: "", // 还款日期
        repayAmout: "" // 还款金额
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasRouterChild2 = to.name === "repaymentInspectionIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasRouterChild2 = to.name === "repaymentInspectionIndex";
    next();
  },
  methods: {
    getSelect: function(data) {
      this.params.existSignal = data.key;
    }
    // getSelect1: function(data) {
    //   this.params.repayKind = data.key;
    // }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    // nextFooter(val, oldval) {
    //   if (val !== oldval) {
    //     // 将数据存入vuex里的setDefinite5里
    //     this.setDefinite5({ params: this.params });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.processing4 {
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
  .definite-13-wrapper {
    width: 100%;
    // height: 100%;
    .definite-smalltitle {
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      background-color: #f7f7f7;
    }
    .definite-13-content {
      width: 100%;
      min-height: px2rem(123);
      background-color: #fff;
    }
  }
  .signBox {
    height: px2rem(44);
    font-size: px2rem(14);
    line-height: px2rem(44);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    padding: 0 px2rem(15);
    background-color: #fff;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    margin-top: px2rem(-1);
    .right {
      float: right;
    }
  }
  .subBox {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: px2rem(84);
    .submit {
      position: absolute;
      width: calc(100% - 30px);
      // height: px2rem(200);
      bottom: px2rem(0);
      padding-left: px2rem(15);
      .mint-button {
        width: px2rem(345);
        background-color: rgba(78, 120, 222, 1);
        font-size: px2rem(18);
        height: px2rem(44);
        color: rgba(255, 255, 255, 1);
        border-radius: px2rem(3);
        opacity: 1;
        margin-bottom: px2rem(15);
      }
      .mint-button--default {
        background-color: rgba(209, 210, 212, 1);
        margin-bottom: px2rem(10);
      }
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
      padding: 0;
    }
    .tag {
      width: px2rem(100);
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
}
</style>

<style lang="scss">
@import "../../../assets/style/global.scss";
textarea {
  resize: none;
}
.processing4 {
  width: 100%;
  height: 100%;
  .textFiled {
    .mint-cell-title {
      width: px2rem(100) !important;
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
