<!--
 * @Descripttion: 新增 1-9
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly9" v-if="hasRouterChild4">
      <div class="coInformation">
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">存货</span>
        </div>
        <mt-cell
          class="textFiled"
          title="检查类型"
          :value="detail.bizTypeName"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="客户名称"
          :value="detail.custName"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="贷款金额"
          :value="detail.loanAmout"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="贷款余额"
          :value="detail.loanBalance"
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
        <div class="definite-field">
          <div class="item">
            <span class="tag big">
              还款日期
            </span>
            <span class="info" @click="a">
              <input
                v-model="params.repayDate"
                type="input"
                class="field-input"
                placeholder="请输入"
              />
            </span>
          </div>
          <div class="item">
            <span class="tag big">
              还款金额
            </span>
            <span class="info">
              <input
                v-model="params.repayAmout"
                type="input"
                class="field-input"
                placeholder="请输入"
              />
            </span>
          </div>
        </div>
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue"
          @confirm="handleConfirm()"
        ></mt-datetime-picker>
      </div>
    </div>
    <router-view ref="m4rview" v-else></router-view>
  </div>
</template>

<script>
import { DatetimePicker } from "mint-ui";
import { formatDate2 } from "@/utils/utils";
import { bizTypes } from "../../../utils/dataMock";
import { normalMixin } from "../../../utils/mixin";
export default {
  components: { "mt-datetime-picker": DatetimePicker },
  mixins: [normalMixin],
  data() {
    return {
      bizId: this.$route.params.bizId,
      hasRouterChild4: this.$route.params.hasRouterChild4,
      bizTypes: bizTypes,
      popupVisible: false,
      payType: 1,
      selectTitle: "检查类型",
      fontColor: "blue",
      repayKind: "repayKind",
      pickerValue: "",
      params: {
        repayDate: "", // 还款日期
        repayAmout: "" // 还款金额
      },
      detail: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasRouterChild4 = to.name === "repaymentInspectionIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasRouterChild4 = to.name === "repaymentInspectionIndex";
    next();
    // 点击上一步回到当前页面的时候数据回显，这边只有每个流程的第一个页面需要
    if (from.name === "repaymentInspectionDefinite7") {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
    }
  },
  async mounted() {
    // 基本详情与流程详情的接口写在了vuex里
    //保存接口写在了Mixin里
    // 获取基本详情
    await this.setqueryDetail(this);
    this.bizType(this.queryDetail, this.queryDetail.checkType);
    this.detail = this.queryDetail;

    //判断是否是已经填了部分
    if (
      this.$route.params.saveFlag === 1 ||
      this.$route.params.saveFlag === "1"
    ) {
      await this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
    } else {
      this.setSaveFlag([]);
    }
    //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
    this.setScrollToPo({
      x: 0,
      y: 0,
      ratenum: Date.now(),
      tag: "nextFooter"
    });
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.$Indicator.open();
        const currentName = this.$route.name;
        const type = this.$route.params.type;
        var loanBusiness = {};
        const bizId = {
          bizId: this.$route.params.bizId
        };
        if (currentName === "repaymentInspectionIndex") {
          loanBusiness = Object.assign({}, this.params, bizId);
          this.infoSave(loanBusiness, currentName, type, val.tag);
        } else if (currentName === "processing4") {
          this.$nextTick(() => {
            loanBusiness = Object.assign({}, this.$refs.m4rview.params, bizId);
            delete loanBusiness.imageList;
            const loanBusiness2 = Object.assign(
              {},
              this.$refs.m4rview.params2,
              bizId
            );
            // 两个接口并发，都成功后才走操作
            this.bindSave(loanBusiness, loanBusiness2);
          });
        } else {
          this.$nextTick(() => {
            loanBusiness = Object.assign({}, this.$refs.m4rview.params, bizId);
            this.infoSave(loanBusiness, currentName, type, val.tag);
          });
        }
      }
    }
  },
  methods: {
    a() {
      this.$refs.picker.open();
    },
    handleConfirm() {
      this.params.repayDate = formatDate2(this.pickerValue, 1);
      this.$refs.picker.close();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.coInformation {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .definite-field {
    border-top: none;
  }
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
.newly9 {
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
