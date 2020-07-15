<!--
 * @Descripttion: 新增 1-9
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly9">
      <div class="coInformation">
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">存货</span>
        </div>
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
          :startDate="startDate"
          :endDate="endDate"
          @confirm="handleConfirm()"
        ></mt-datetime-picker>
      </div>
    </div>
  </div>
</template>

<script>
import { DatetimePicker } from "mint-ui";
import { formatDate, getLastYearYestdy } from "@/utils/utils";
import { bizTypes } from "../../../utils/dataMock";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: { "mt-datetime-picker": DatetimePicker },
  mixins: [normalMixin, userMixin],
  props: ["detail", "uBizId"],
  data() {
    return {
      bizId: this.uBizId,
      bizTypes: bizTypes,
      popupVisible: false,
      payType: 1,
      selectTitle: "检查类型",
      fontColor: "blue",
      repayKind: "repayKind",
      pickerValue: "",
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      params: {
        repayDate: "", // 还款日期
        repayAmout: "" // 还款金额
      }
    };
  },

  async mounted() {
    const type = this.userBizType.bizType;
    const name = this.$route.name;

    if (this.bizId) {
      await this.setUserforDizDetail(this);
      this.params = this.userForBizDetail(name, type);
    }
    this.setScrollToPo({
      x: 0,
      y: 0,
      ratenum: Date.now(),
      tag: "nextFooter"
    });
  },
  watch: {},
  methods: {
    a() {
      this.$refs.picker.open();
    },
    handleConfirm() {
      if (!this.pickerValue) {
        this.pickerValue = this.startDate;
      }
      this.params.repayDate = formatDate(this.pickerValue);
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
