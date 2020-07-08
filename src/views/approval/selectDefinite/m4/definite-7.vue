<!--
 * @Descripttion: 检查申请明细7
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite7">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">检查阶段</span>
      </div>
      <div
        class="type1 "
        v-for="item in detail.stageData"
        :key="item.checkStage"
      >
        <div class="formTitle1">
          <span class="coName" v-if="item.checkStage === '1'">第一阶段</span>
          <span class="coName" v-else-if="item.checkStage === '2'"
            >第二阶段</span
          >
          <span class="coName" v-else-if="item.checkStage === '3'"
            >第三阶段</span
          >
        </div>
        <div class="item1">
          <span class="tag1">还款意愿</span>
          <span class="info" v-if="item.payIntention === '1'">良好</span>
          <span class="info" v-if="item.payIntention === '2'">较差</span>
          <span class="info" v-if="item.payIntention === '3'">无</span>
        </div>
        <mt-cell
          class="textFiled"
          title="检查地点"
          :value="item.practicableCheckAddr"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="接待人员"
          :value="item.practicableStaff"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="还款资金来源"
          :value="item.amoutSource"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="预计还款/付息时间"
          :value="item.expectRepayDate"
        ></mt-cell>
        <!-- <van-cell title="还款资金落实情况说明" class="cellTitle" /> -->
        <div class="msg">还款资金落实情况说明</div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="item.practicableMsg"
          class="text"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { payIntentionsArr } from "../../../../utils/dataMock";
import imageUpload from "../../../loanInspection/components/imageUpload";
import { Field, Cell } from "mint-ui";

export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field
  },
  props: ["detail"],
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.definite7 {
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
  .formTitle1 {
    width: 100%;
    height: px2rem(40);
    position: relative;
    background-color: #f7f7f7;
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(31);
      width: px2rem(359);
      line-height: px2rem(31);
      top: 50%;
      transform: translate(px2rem(6), -50%);
      padding-left: px2rem(4);
      font-size: px2rem(14);
      color: #fff;
      background-color: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(3);
    }
  }
  .msg {
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    background-color: #fff;
    padding: 0 px2rem(16);
    font-size: px2rem(14);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
  }
  // .van-cell {
  //   width: px2rem(363);
  //   height: px2rem(31);
  //   margin: 0 auto;
  //   background: rgba(78, 120, 222, 0.81);
  //   opacity: 1;
  //   border-radius: px2rem(3);
  // }

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
@import "../../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definite7 {
  width: 100%;
  height: 100%;

  .mint-cell-wrapper {
    padding: 0 px2rem(16);
  }
  .mint-cell {
    min-height: px2rem(44);
  }

  .textFiled {
    .mint-cell-title {
      width: px2rem(160) !important;
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
