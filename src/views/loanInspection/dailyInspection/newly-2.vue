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
          <div class="definite-field">
            <div class="item">
              <span class="tag big">征信报告查询日期</span>
              <span class="info"
                    @click="a">
                <input v-model="params.queryDate"
                       type="input"
                       class="field-input"
                       placeholder="请输入"
                       :disabled="true" />
              </span>
            </div>
          </div>
          <mt-datetime-picker ref="picker"
                              type="date"
                              v-model="pickerValue"
                              :startDate="startDate"
                              :endDate="endDate"
                              @confirm="handleConfirm()"></mt-datetime-picker>
          <mt-cell class="textFiled"
                   title="当前企业及实际控制人征信情况(注明征信查询分类结果)"></mt-cell>
        </div>

        <mt-field type="textarea"
                  rows="3"
                  v-model="params.fiveClass"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入征信情况"></mt-field>
        <div class="item">
          <span class="tag">企业或企业主征信是否有新增逾期记录</span>
          <almSelect :selectData="yesNo"
                     :defaultValue="params.addedOverdues"
                     :triggerId="addedOverdues"
                     :title="selectTitle1"
                     :fontColor="fontColor"
                     @getSelectValue="getSelect1"
                     class="info"></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.addedOverduesMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行新增贷款</span>
          <almSelect :selectData="yesNo"
                     :defaultValue="params.addedLoans"
                     :triggerId="addedLoans"
                     :title="selectTitle2"
                     :fontColor="fontColor"
                     @getSelectValue="getSelect2"
                     class="info"></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.addedLoansMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行收缩贷款规模</span>
          <almSelect :selectData="yesNo"
                     :defaultValue="params.shrinkLoanScale"
                     :triggerId="shrinkLoanScale"
                     :title="selectTitle3"
                     :fontColor="fontColor"
                     @getSelectValue="getSelect3"
                     class="info"></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.shrinkLoanScaleMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有新增对外担保记录</span>
          <almSelect :selectData="yesNo"
                     :defaultValue="params.addedGuarantees"
                     :triggerId="addedGuarantees"
                     :title="selectTitle4"
                     :fontColor="fontColor"
                     @getSelectValue="getSelect4"
                     class="info"></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.addedGuaranteesMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有其他异常变化</span>
          <almSelect :selectData="yesNo"
                     :defaultValue="params.otherSitu"
                     :triggerId="otherSitu"
                     :title="selectTitle5"
                     :fontColor="fontColor"
                     @getSelectValue="getSelect5"
                     class="info"></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.otherSituMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>

        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查要点小结</span>
        </div>
        <mt-field type="textarea"
                  rows="3"
                  v-model="params.summarySituMsg"
                  class="textArea"
                  style="overflow:hidden"
                  placeholder="请输入"></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { yesNo } from "../../../utils/dataMock";
import almSelect from "../components/select";
import { normalMixin, userMixin } from "../../../utils/mixin";
import { DatetimePicker } from "mint-ui";
import { formatDate, getLastYearYestdy } from "@/utils/utils";
export default {
  components: {
    almSelect,
    "mt-datetime-picker": DatetimePicker
  },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data () {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      yesNo: yesNo,
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      pickerValue: new Date(),
      addedOverdues: "addedOverdues",
      addedLoans: "addedLoans",
      shrinkLoanScale: "shrinkLoanScale",
      addedGuarantees: "addedGuarantees",
      otherSitu: "otherSitu",
      popupVisible: false,
      payType: 1,
      fontColor: "blue",
      selectTitle1: "企业或企业主征信是否有新增逾期记录",
      selectTitle2: "企业或企业主是否有他行新增贷款",
      selectTitle3: "企业或企业主是否有他行收缩贷款规模",
      selectTitle4: "企业或企业主是否有新增对外担保记录",
      selectTitle5: "企业或企业主是否有其他异常变化",
      params: {
        queryDate: "",
        fiveClass: "", // 当前企业及实际控制人征信情况（注明征信查询分类结果)
        addedOverdues: 1, // 企业或企业主征信是否有新增逾期记录  客户资信检查
        addedOverduesMsg: "", // 当前企业及实际控制人征信情况 说明
        addedLoans: 1, // 企业或企业主是否有他行新增贷款  客户资信检查
        addedLoansMsg: "", // 企业或企业主是否有他行新增贷款情况 说明
        shrinkLoanScale: 1, // 企业或企业主是否有他行收缩贷款规模  客户资信检查
        shrinkLoanScaleMsg: "", // 企业或企业主是否有他行收缩贷款规模 说明
        addedGuarantees: 1, // 企业或企业主是否有新增对外担保记录  客户资信检查
        addedGuaranteesMsg: "", // 企业或企业主是否有新增对外担保记录 说明
        otherSitu: 1, // 企业或企业主是否有其他异常变化  客户资信检查
        otherSituMsg: "", // 企业或企业主是否有其他异常变化 说明
        summarySituMsg: ""
      },
      loanBusiness: {}
    };
  },
  mounted () {
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
  watch: {
    nextFooter (val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = {
          assetCreditInfo: this.params
          // summaryForCheck: this.params.summaryForCheck
        };
      }
    }
  },
  methods: {
    getSelect1 (data) {
      this.params.addedOverdues = data[0].key;
    },
    getSelect2 (data) {
      this.params.addedLoans = data[0].key;
    },
    getSelect3 (data) {
      this.params.shrinkLoanScale = data[0].key;
    },
    getSelect4 (data) {
      this.params.addedGuarantees = data[0].key;
    },
    getSelect5 (data) {
      this.params.otherSitu = data[0].key;
    },
    a () {
      this.$refs.picker.open();
    },
    handleConfirm () {
      if (!this.pickerValue) {
        this.pickerValue = this.endDate;
      }
      // this.params.queryDate = formatDate(this.pickerValue);
      this.$set(this.params, 'queryDate', formatDate(this.pickerValue))
      this.$refs.picker.close();
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
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
  .definite-field {
    border-top: none !important;
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
// @import "../../../assets/style/global.scss";
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
