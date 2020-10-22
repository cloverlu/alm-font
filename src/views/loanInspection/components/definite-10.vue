<!--
 * @Descripttion: 检查申请明细-10
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definite10">
      <div class="coInformation">
        <div class="title">征信情况</div>
        <div class="dailyCheck">
          <div class="formTitle">
            <span class="lightBlue2"></span>
            <span class="coName">
              基于个人征信报告(对于关注类及以下贷款及风险隐患
              客户每季度查询一次个人征信即可)
            </span>
          </div>
          <div class="definite-field">
            <div class="item">
              <span class="tag big">征信报告查询日期</span>
              <span class="info" @click="a">
                <input
                  v-model="params.queryDateForCom"
                  type="input"
                  class="field-input"
                  placeholder="请输入"
                  :disabled="true"
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
          <!-- <mt-field
            class="textFiled"
            label="征信报告查询日期"
            placeholder="请输入"
            v-model="params.queryDateForPer"
          ></mt-field> -->
        </div>
      </div>

      <div class="enterpriseCredit">
        <div class="title">1.企业实际控制人及其配偶（若有）征信：</div>
        <mt-field
          class="textFiled"
          label="征信分类"
          placeholder="请输入"
          v-model="params.creditClassification"
        ></mt-field>
        <div class="formTitle1">
          <!-- <span class="lightBlue"></span>
          <span class="coNameBlack">征信分类</span>-->
          <span class="lightBlue1"></span>
          <span class="coNameBlack1">征信情况</span>
        </div>

        <!-- （1）未结清贷款、未销户贷记卡（含准贷记）及对外担保情况 -->
        <div class="coNo1">
          （1）未结清贷款、未销户贷记卡（含准贷记）及对外担保情况
        </div>
        <mt-field
          class="textFiled"
          label="未结清贷款笔数（笔）"
          placeholder="请输入"
          v-model="params.unPayOffLoanNumCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款金额（万元）"
          placeholder="请输入"
          v-model="params.unPayOffAmoutCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="涉及金融机构（家）"
          placeholder="请输入"
          v-model="params.finInstitutionNumCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款结余（万元）"
          placeholder="请输入"
          v-model="params.sumBalanceCon"
        ></mt-field>
        <!--  -->
        <div class="nothing"></div>
        <!--  -->
        <mt-field
          class="textFiled"
          label="未销户贷记卡账户（个）"
          placeholder="请输入"
          v-model="params.debitCardNumCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="授信总金额（万元）"
          placeholder="请输入"
          v-model="params.debitCardLineAmoutCon"
        ></mt-field>

        <div class="nothing"></div>
        <!--  -->
        <mt-field
          class="textFiled"
          label="对外担保笔数（笔）"
          placeholder="请输入"
          v-model="params.guaranteeNumCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保金额（万元）"
          placeholder="请输入"
          v-model="params.guaranteeAmoutCon"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保结余（万元）"
          placeholder="请输入"
          v-model="params.guaranteeBalanceCon"
        ></mt-field>

        <!-- （2）逾期及违约 -->
        <div class="coNo2">（2）逾期及违约</div>
        <!-- 未改 -->
        <div class="item1">
          <span class="tag">是否存在逾期及违约记录</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existBadRecordCon"
            :triggerId="existBadRecordCon"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect1"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.badRecordMsgCon"
          class="text"
          style="overflow:hidden"
          placeholder="请输入逾期及违约信息概要(分析是否对我行贷款偿还产生不良影响）"
        ></mt-field>
        <!-- （3）征信记录 -->
        <div class="coNo2">（3）征信记录</div>
        <!-- <mt-cell title="征信记录是否有异常变化"></mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChage4"
            :triggerId="existCreditChage4"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect2"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg4"
          class="text"
          style="overflow:hidden"
          placeholder="请输入征信记录异常变化说明"
        ></mt-field>

        <div class="titleBox">
          <div class="title">2.企业法定代表人及其配偶（若有）征信：</div>
          <mt-field
            class="textFiled"
            label="征信分类"
            placeholder="请输入"
            v-model="params.creditClassificationJur"
          ></mt-field>
        </div>
				 <div class="formTitle1">
            <!-- <span class="lightBlue"></span>
            <span class="coNameBlack">征信分类</span>-->
            <span class="lightBlue1"></span>
            <span class="coNameBlack1">征信情况</span>
          </div>
          <div class="coNo1">
            （1）未结清贷款、未销户贷记卡（含准贷记）及对外担保情况
          </div>
        <mt-field
          class="textFiled"
          label="未结清贷款笔数（笔）"
          placeholder="请输入"
          v-model="params.unPayOffLoanNumJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款金额（万元）"
          placeholder="请输入"
          v-model="params.unPayOffAmoutJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="涉及金融机构（家）"
          placeholder="请输入"
          v-model="params.finInstitutionNumJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="未结清贷款结余（万元）"
          placeholder="请输入"
          v-model="params.sumBalanceJur"
        ></mt-field>

        <div class="nothing"></div>
        <!--  -->
        <mt-field
          class="textFiled"
          label="未销户贷记卡账户（个）"
          placeholder="请输入"
          v-model="params.debitCardNumJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="授信总金额（万元）"
          placeholder="请输入"
          v-model="params.debitCardLineAmout"
        ></mt-field>

        <div class="nothing"></div>
        <!--  -->
        <mt-field
          class="textFiled"
          label="对外担保笔数（笔）"
          placeholder="请输入"
          v-model="params.guaranteeNumJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保金额（万元）"
          placeholder="请输入"
          v-model="params.guaranteeAmoutJur"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="对外担保结余（万元）"
          placeholder="请输入"
          v-model="params.guaranteeBalanceJur"
        ></mt-field>

        <div class="coNo2">（2）逾期及违约</div>
        <div class="item1">
          <span class="tag">是否存在逾期及违约记录</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existBadRecordJur"
            :triggerId="existBadRecordJur"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect3"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.badRecordMsgJur"
          class="text"
          style="overflow:hidden"
          placeholder="请输入逾期及违约信息概要(分析是否对我行贷款偿还产生不良影响）"
        ></mt-field>
        <!-- （3）征信记录 -->
        <div class="coNo2">（3）征信记录</div>
        <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChage5"
            :triggerId="existCreditChage5"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect4"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg5"
          class="text"
          style="overflow:hidden"
          placeholder="请输入征信记录异常变化说明"
        ></mt-field>
        <!-- 3.法人保证人征信： -->
        <div class="coNo3">3.企业其他保证人征信：</div>
        <!-- <mt-cell title="征信记录是否有异常变化"> </mt-cell> -->
        <div class="item1">
          <span class="tag">征信记录是否有异常变化 </span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existCreditChager6"
            :triggerId="existCreditChager6"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect5"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.creditChageMsg6"
          class="text"
          style="overflow:hidden"
          placeholder="请输入征信记录异常变化说明"
        ></mt-field>

        <div class="nothing"></div>

        <mt-cell class="textFiled" title="近期负面信息情况"></mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          class="text"
          v-model="params.msg"
          style="overflow:hidden"
          placeholder="请输入近期负面信息情况说明"
        ></mt-field>
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
  data() {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      pickerValue: new Date(),
      yesNo: yesNo,
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      popupVisible: false,
      payType: 1,
      selectTitle: "检查配合程度",
      fontColor: "blue",
      existBadRecordCon: "existBadRecordCon",
      existBadRecordJur: "existBadRecordJur",
      existCreditChage4: "existCreditChage4",
      existCreditChage5: "existCreditChage5",
			existCreditChage3: "existCreditChage3",
			existCreditChager6:'existCreditChager6',
      params: {
        queryDateForCom: "",
        creditClassification: "", // 征信分类
        creditClassificationJur: "",
        // 企业实际控制人部分
        unPayOffLoanNumCon: "", //未结清贷款笔数
        unPayOffAmoutCon: "", // 未结清贷款金额
        finInstitutionNumCon: "", // 涉及金融机构
        sumBalanceCon: "", // 未结清贷款结余
        debitCardNumCon: "", //未销户贷记卡账户

        debitCardLineAmoutCon: "", //未销户贷记卡担保金额
        guaranteeNumCon: "", //对外担保笔数
        guaranteeAmoutCon: "", //对外担保金额
        guaranteeBalanceCon: "", //对外担保结余
        badRecordMsgCon: "", //  逾期及违约 不良影响
        existBadRecordCon: 9, // 逾期及违约 是否

        // 企业法定代表人部分
        unPayOffLoanNumJur: "", //未结清贷款笔数
        unPayOffAmoutJur: "", // 未结清贷款金额
        finInstitutionNumJur: "", // 涉及金融机构
        sumBalanceJur: "", // 未结清贷款结余
        debitCardNumJur: "", //未销户贷记卡账户

        // debitCardLineAmoutJur: "", //授信总金额
        guaranteeNumJur: "", //对外担保笔数
        guaranteeAmoutJur: "", //对外担保金额
        guaranteeBalanceJur: "", //对外担保结余
        badRecordMsgJur: "", //  逾期及违约 不良影响
        existBadRecordJur: 9, //  逾期及违约 是否存在

        creditChageMsg4: "", // 企业实际控制人 征信变化情况说明
        existCreditChage4: 9, // 企业实际控制人 征信变化是否变化
        creditChageMsg5: "", // 企业法定代表人 征信变化情况说明
        existCreditChage5: 9, // 企业法定代表人 征信变化是否变化
        creditChageMsg6: "", // 企业其他保证人 征信变化情况说明
        existCreditChage6: "", // 企业其他保证人 征信变化是否变化
        existCreditChager6: 9,
        creditChageMsg3: "", // 法人保证人 征信变化情况说明
        existCreditChage3: 9, // 法人保证人 征信变化是否变化

        msg: "",
        addedOverdues: false,
        pickerVisible: false,
        debitCardLineAmout: ""
      },
      freezeParams: {},
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
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = {
          creditInfo: this.params,
          msg: this.params.msg
        };
      }
    }
  },
  methods: {
    getSelect1(data) {
      this.params.existBadRecordCon = data[0].key;
    },
    getSelect3(data) {
      this.params.existBadRecordJur = data[0].key;
    },
    getSelect2(data) {
      this.params.existCreditChage4 = data[0].key;
    },
    getSelect4(data) {
      this.params.existCreditChage5 = data[0].key;
    },
    getSelect5(data) {
      this.params.existCreditChager6 = data[0].key;
    },
    a() {
      this.$refs.picker.open();
    },
    handleConfirm() {
      if (!this.pickerValue) {
        this.pickerValue = this.endDate;
      }
			// this.params.queryDateForCom = formatDate(this.pickerValue);
			this.$set(this.params, 'queryDateForCom', formatDate(this.pickerValue))
      this.$refs.picker.close();
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
// .coInformation {
.title {
  // width: px2rem(60);
  height: px2rem(23);
  font-size: px2rem(15);
  // font-family: Source Han Sans CN;
  // font-weight: bold;
  line-height: px2rem(20);
  color: rgba(9, 9, 9, 1);
  opacity: 1;
  margin: px2rem(6) px2rem(17) px2rem(6);
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
  .lightBlue2 {
    position: absolute;
    display: inline-block;
    width: px2rem(3);
    height: px2rem(14);
    top: 32%;
    left: px2rem(18);
    transform: translate(-50%, -50%);
    background: rgba(78, 120, 222, 1);
    opacity: 1;
    border-radius: px2rem(2);
  }
  .coName {
    position: absolute;
    display: inline-block;
    height: px2rem(30);
    width: px2rem(327);
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
    height: px2rem(14);
    width: 100%;
    line-height: px2rem(15);
    top: 50%;
    // left: 21%;
    transform: translate(px2rem(26), -50%);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    color: rgba(113, 113, 113, 1);
    opacity: 1;
  }
}

.formTitle1 {
  width: 100%;
  box-sizing: border-box;
  height: px2rem(35);
  position: relative;
  .lightBlue {
    position: absolute;
    display: inline-block;
    width: px2rem(3);
    height: px2rem(14);
    top: 30%;
    left: px2rem(18);
    transform: translate(-50%, -50%);
    background: rgba(78, 120, 222, 1);
    opacity: 1;
    border-radius: px2rem(2);
  }
  .lightBlue1 {
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
  .coNameBlack {
    position: absolute;
    display: inline-block;
    height: px2rem(14);
    width: px2rem(327);
    line-height: px2rem(15);
    top: 30%;
    transform: translate(px2rem(26), -50%);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    color: rgba(113, 113, 113, 1);
    opacity: 1;
  }
  .coNameBlack1 {
    position: absolute;
    display: inline-block;
    height: px2rem(14);
    width: px2rem(327);
    line-height: px2rem(15);
    top: 50%;
    transform: translate(px2rem(26), -50%);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    color: rgba(113, 113, 113, 1);
    opacity: 1;
  }
}

.titleBox {
  // height: px2rem(135);
  padding: px2rem(5);
  background-color: #f7f7f7;
  .formTitle1 {
    width: 100%;
    box-sizing: border-box;
    height: px2rem(35);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
      top: 30%;
      left: px2rem(18);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .lightBlue1 {
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
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: px2rem(327);
      line-height: px2rem(15);
      top: 30%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
    .coNameBlack1 {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: px2rem(327);
      line-height: px2rem(15);
      top: 50%;
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
      opacity: 1;
    }
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
  margin: px2rem(-6) 0 px2rem(10) px2rem(8);
}

.coNo2 {
  background-color: #f7f7f7;
  height: px2rem(44);
  font-size: px2rem(12);
  // font-family: Source Han Sans CN;
  // font-weight: 500;
  line-height: px2rem(44);
  color: rgba(78, 120, 222, 1);
  opacity: 1;
  padding-left: px2rem(8);
}

.coNo3 {
  background-color: #f7f7f7;
  height: px2rem(44);
  font-size: px2rem(14);
  // font-family: Source Han Sans CN;
  // font-weight: 700;
  line-height: px2rem(44);
  color: rgba(9, 9, 9, 1);
  opacity: 1;
  padding-left: px2rem(16);
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
    // font-family: Source Han Sans CN;
    // font-weight: bolder;
    width: px2rem(270);
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

.mint-cell {
  border-top: px2rem(1) solid rgba(229, 229, 229, 1);
  &:last-of-type {
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
  }
  // .mint-cell-wrapper {
  //   .mint-cell-title {
  //     display: inline-block;
  //     width: px2rem(252);
  //   }
  // }
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
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definite10 {
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
      width: px2rem(180) !important;
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
