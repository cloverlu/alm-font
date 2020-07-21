<!--
 * @Descripttion: 检查申请明细-5
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite5">
      <div class="coInformation">
        <div class="title">财务信息</div>
        <div class="dailyCheck">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">存货</span>
          </div>
          <mt-cell
            class="textFiled"
            title="上次全面检查或调查时余额"
            :value="detail.stockLastBalance"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="本次检查存货变动情况"
            :value="detail.stockChangSitu"
          ></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.stockChangSitu"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>
        </div>

        <div class="enterpriseCredit">
          <!--营业收入 -->
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">营业收入</span>
          </div>

          <mt-cell
            class="textFiled"
            title="上次全面检查或调查时余额"
            :value="detail.busIncLastBalance"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="本次检查营业收入变动情况"
            :value="detail.busIncChangSitu"
          ></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            v-model="detail.busIncChangSitu"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>

          <!-- 加工制造类 -->
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName"
              >水、电、煤、气费其中一项或多项(加工制造类企业必填)</span
            >
          </div>
          <mt-cell
            class="textFiled"
            title="上次全面检查或调查时余额"
            :value="detail.dailyExpenLastBalance"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="本次检查变动情况"
            :value="detail.dailyExpenChangSitu"
          ></mt-cell>
          <!-- <mt-field
            type="textarea"
            rows="3"
            v-model="detail.dailyExpenChangSitu"
            class="text"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field> -->

          <mt-field
            type="textarea"
            rows="4"
            class="text"
            v-model="detail.proAndOpeAbnormalSuitMsg"
            style="overflow:hidden"
            :disabled="true"
          ></mt-field>
        </div>
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
// @import "../../../../assets/style/global.scss";
.coInformation {
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

  .coNo1 {
    height: px2rem(12);
    font-size: px2rem(12);
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    line-height: px2rem(20);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin: px2rem(-12) 0 px2rem(10) px2rem(8);
  }

  .coNo2 {
    height: px2rem(44);
    font-size: px2rem(12);
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    line-height: px2rem(44);
    color: rgba(78, 120, 222, 1);
    opacity: 1;
    margin-left: px2rem(8);
  }

  .coNo3 {
    height: px2rem(44);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: 700;
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
    // font-family: Source Han Sans CN;
    // font-weight: 500;
    color: rgba(9, 9, 9, 1);
    opacity: 1;
  }
}
</style>

<style lang="scss">
// @import "../../../../assets/style/global.scss";

textarea {
  resize: none;
}
.definite5 {
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
