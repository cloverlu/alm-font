<!--
 * @Descripttion: 新增 1-2
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly2">
      <div class="coInformation">
        <div class="title">客户资信情况检查</div>
        <div class="formTitle1">
          <span class="lightBlue"></span>
          <span class="coName">客户资信检查</span>
        </div>

        <div class="formBody">
          <mt-cell
            class="textFiled"
            title="征信报告查询日期"
            value="2020-06-02"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="当前企业及实际控制人征信情况(注明征信查询分类结果)"
          ></mt-cell>
        </div>

        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.fiveClass"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主征信是否有新增逾期记录</span>
          <span class="info" v-if="detail.addedOverdues === 1">是</span>
          <span class="info" v-if="detail.addedOverdues === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.addedOverduesMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行新增贷款</span>
          <span class="info" v-if="detail.addedLoans === 1">是</span>
          <span class="info" v-if="detail.addedLoans === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.addedLoansMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行收缩贷款规模</span>
          <span class="info" v-if="detail.shrinkLoanScale === 1">是</span>
          <span class="info" v-if="detail.shrinkLoanScale === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.shrinkLoanScaleMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有新增对外担保记录</span>
          <span class="info" v-if="detail.addedGuarantees === 1">是</span>
          <span class="info" v-if="detail.addedGuarantees === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.addedGuaranteesMsg"
          class="textArea"
          style="overflow:hidden"
          :disabled="true"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有其他异常变化</span>
          <span class="info" v-if="detail.otherSitu === 1">是</span>
          <span class="info" v-if="detail.otherSitu === 0">否</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="detail.otherSituMsg"
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
    "mt-cell": Cell,
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
@import "../../../../assets/style/global.scss";
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
    &:last-child {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      // border: none;
      // padding: 0;
    }
    .tag {
      flex: 0 0 px2rem(250);
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
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;

      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
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
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
@import "../../../../assets/style/global.scss";
.newly2 {
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
      width: px2rem(200) !important;
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
