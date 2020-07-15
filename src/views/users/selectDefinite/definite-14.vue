<!--
 * @Descripttion: 申请明细 14
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite14">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coNameBlack">存货</span>
      </div>
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
      <!-- <mt-cell
        class="textFiled"
        title="还款方式"
        :value="detail.repayKind"
      ></mt-cell> -->
      <div class="definite-field">
        <div class="item">
          <span class="tag big">放款日期</span>
          <span class="info" @click="a">
            <input
              v-model="params.loanDate"
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
        placeholder="请输入"
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
        v-model="params.cooperateMsg"
        class="text"
        style="overflow:hidden"
        placeholder="请输入"
      ></mt-field>
    </div>
  </div>
</template>

<script>
import { DatetimePicker } from "mint-ui";
import { formatDate, getLastYearYestdy } from "@/utils/utils";
import { normalMixin, userMixin } from "../../../utils/mixin";
import {
  DetailsOfIOU,
  payKindsArr,
  yesNo,
  coordinate
} from "../../../utils/dataMock";
import almSelect from "../../loanInspection/components/select";
export default {
  components: { "mt-datetime-picker": DatetimePicker, almSelect },
  mixins: [normalMixin, userMixin],
  props: ["detail", "uBizId"],
  data() {
    return {
      bizId: this.uBizId,
      pickerValue: "",
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
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      params: {
        payKind: "1",
        // repayKind: "", // 还款方式
        loanDate: "", // 还款日期
        loanPurpose: "", // 约定用途
        detailMsg4useAmout: "", // 资金使用情况详细说明
        useAmoutByContract: 1, //是否按合同约定的用途使用信贷资金
        executeCon: 1, //是否履行合同约定
        cooperate: "1", //对我行检查的态度
        cooperateMsg: "", // 其他
        msg: ""
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
    getSelect1: function(data) {
      this.params.payKind = data[0].key;
    },
    getSelect2: function(data) {
      this.params.useAmoutByContract = data[0].key;
    },
    getSelect3: function(data) {
      this.params.executeCon = data[0].key;
    },
    getSelect4: function(data) {
      this.params.cooperate = data[0].key;
    },
    a() {
      this.$refs.picker.open();
    },
    handleConfirm() {
      if (!this.pickerValue) {
        this.pickerValue = this.startDate;
      }
      this.params.loanDate = formatDate(this.pickerValue);
      this.$refs.picker.close();
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
