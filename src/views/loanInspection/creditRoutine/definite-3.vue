<!--
 * @Descripttion: 
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="coInformation">
      <div class="enterpriseCredit">
        <!--营业收入 -->
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查结论及措施建议</span>
        </div>
        <!-- <mt-cell title="是否存在风险预警信号" :value="existRisk"></mt-cell> -->
        <div class="item1">
          <span class="tag">是否存在风险预警信号</span>
          <almSelect
            :selectData="cooperationTypes"
            :defaultValue="cooperationTypes[0].value"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-cell title="预警信号说明"></mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="riskMsg"
          class="text"
          style="overflow:hidden"
          :placeholder="riskMsg"
        ></mt-field>

        <mt-cell title="检查结论及措施建议"></mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="suggest"
          class="text"
          style="overflow:hidden"
          :placeholder="suggest"
        ></mt-field>
        <div class="signBox">
          <span class="left" @click="click">检查人员（签字）：</span>
          <span class="right">2020-06-01</span>
        </div>
      </div>
    </div>
    <div class="submit">
      <mt-button type="primary" size="large">提交审批</mt-button>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, cooperationType } from "../../../utils/dataMock";
import { Cell, Field, Button } from "mint-ui";
import almSelect from "../components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    "mt-button": Button,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      existRisk: true,
      riskMsg: "",
      suggest: "",
      cooperationTypes: cooperationType,
      popupVisible: false,
      payType: 1,
      selectTitle: "检查配合程度",
      fontColor: "blue"
    };
  },
  methods: {
    click: function() {
      console.log("ssss");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.checkDetail {
  position: relative;
  height: px2rem(582);
  .coInformation {
    .title {
      // width: px2rem(60);
      height: px2rem(23);
      font-size: px2rem(15);
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: px2rem(20);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      margin: px2rem(6) px2rem(17) px2rem(-8);
    }

    .formTitle {
      width: 100%;
      height: px2rem(50);
      position: relative;
      .lightBlue {
        position: absolute;
        display: inline-block;
        width: px2rem(3);
        height: px2rem(17);
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
        height: px2rem(23);
        width: 100%;
        line-height: px2rem(20);
        top: 50%;
        // left: 21%;
        transform: translate(px2rem(26), -50%);
        font-size: px2rem(14);
        font-family: Source Han Sans CN;
        font-weight: bold;
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
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(113, 113, 113, 1);
        opacity: 1;
      }
    }

    .coNo1 {
      height: px2rem(12);
      font-size: px2rem(12);
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: px2rem(20);
      color: rgba(78, 120, 222, 1);
      opacity: 1;
      margin: px2rem(-12) 0 px2rem(10) px2rem(8);
    }

    .coNo2 {
      height: px2rem(44);
      font-size: px2rem(12);
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: px2rem(44);
      color: rgba(78, 120, 222, 1);
      opacity: 1;
      margin-left: px2rem(8);
    }

    .coNo3 {
      height: px2rem(44);
      font-size: px2rem(14);
      font-family: Source Han Sans CN;
      font-weight: 700;
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
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }

    .item1 {
      background-color: #fff;
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      padding: 0 px2rem(10);
      display: flex;
      font-size: px2rem(16);
      box-sizing: border-box;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      &:last-child {
        border: none;
        padding: 0;
      }
      .tag {
        font-family: Source Han Sans CN;
        font-weight: bolder;
        width: px2rem(270);
        text-align: left;
        color: #090909;
        height: px2rem(44);
        font-size: px2rem(16);
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

    .signBox {
      height: px2rem(44);
      font-size: px2rem(14);
      font-family: Source Han Sans CN;
      font-weight: 700;
      line-height: px2rem(44);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      padding: 0 px2rem(8);
      background-color: #fff;
      .right {
        float: right;
      }
    }
  }
  .submit {
    position: absolute;
    width: calc(100% - 20px);
    bottom: px2rem(10);
    padding-left: px2rem(10);
    .mint-button--primary {
      background-color: rgba(78, 120, 222, 1);
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
textarea {
  resize: none;
}
</style>
