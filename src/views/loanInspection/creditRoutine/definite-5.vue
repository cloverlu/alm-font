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
          <mt-field
            class="textFiled"
            label="上次全面检查或调查时余额"
            placeholder="请输入"
            v-model="params.stockLastBalance"
          ></mt-field>
          <mt-cell class="textFiled" title="本次检查存货变动情况"></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            v-model="params.stockChangSitu"
            class="text"
            style="overflow:hidden"
            placeholder="请输入本次检查存货变动情况说明"
          ></mt-field>
        </div>

        <div class="enterpriseCredit">
          <!--营业收入 -->
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">营业收入</span>
          </div>

          <mt-field
            class="textFiled"
            label="上次全面检查或调查时余额"
            placeholder="请输入"
            v-model="params.busIncLastBalance"
          ></mt-field>
          <mt-cell class="textFiled" title="本次检查营业收入变动情况"></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            v-model="params.busIncChangSitu"
            class="text"
            style="overflow:hidden"
            placeholder="请输入本次检查营业收入变动情况说明"
          ></mt-field>

          <!-- 加工制造类 -->
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName"
              >水、电、煤、气费其中一项或多项(加工制造类企业必填)</span
            >
          </div>
          <mt-field
            class="textFiled"
            label="上次全面检查或调查时余额"
            placeholder="请输入"
            v-model="params.dailyExpenLastBalance"
          ></mt-field>
          <mt-cell class="textFiled" title="本次检查变动情况"></mt-cell>
          <mt-field
            type="textarea"
            rows="3"
            v-model="params.dailyExpenChangSitu"
            class="text"
            style="overflow:hidden"
            placeholder="请输入本次检查变动情况说明"
          ></mt-field>

          <mt-field
            type="textarea"
            rows="4"
            class="text"
            v-model="params.proAndOpeAbnormalSuitMsg"
            style="overflow:hidden"
            placeholder="根据财务信息及现场检查情况，判断企业是否生产经营异常(停产、半停产、员工数量骤减、设备开工率不足等)，并详细阐述异常情况对企业偿债能力的影响。"
          ></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data() {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      params: {
        stockLastBalance: "", // 上次全面检查或调查时余额  存货
        stockChangSitu: "", // 本次检查存货变动情况  存货
        busIncLastBalance: "", // 上次全面检查或调查时余额  营业收入
        busIncChangSitu: "", // 本次检查存货变动情况  营业收入
        dailyExpenLastBalance: "", // 上次全面检查或调查时余额  水煤气
        dailyExpenChangSitu: "", // 本次检查存货变动情况  水煤气
        proAndOpeAbnormalSuitMsg: "" //
      },
      loanBusiness: {}
    };
  },
  mounted() {
    const moduleName = this.$route.params.moduleName;
    const name = this.$route.name;
    const type = this.userBizType.bizType;
    // 上一步下一步需要走的详情接口
    if (moduleName === "custmer") {
      const billNo = this.$route.params.billNo;
      if (this.bizId) {
        this.userMountedTag(type, billNo, name);
      }
    } else {
      const flag = this.$route.params.saveFlag;
      this.mountedTag(flag, name, this.$route.params.bizId);
    }
  },
  methods: {},
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = {
          financeInfo: this.params
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
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
// @import "../../../assets/style/global.scss";
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
