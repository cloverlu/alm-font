<!--
 * @Descripttion: 检查申请明细-6
 * @Author: penglu
 * @Date: 2020-06-11 15:01:44
-->

<template lang="pug">
	.definite-6-wrapper
		.definite-1-title2
			span 现场检查其他要点
		.definite-smalltitle(class="small-one")
			span(class="colum-blue")
			span  检查要点
		.definite-field
			.item
				span(class="tag big-max") 企业所在行业是否发生重大不利变化
				almSelect(:selectData="yesNo"  :defaultValue="params.industrycChangSiut" :triggerId="triggerId1" :title="selectTitle1" :fontColor="fontColor" @getSelectValue="IndustrycChangSiut" class="info" ) 
				span(class="iconfont iconxiala arrow") 
			.item(class="item-textarea")
				mt-field(v-model="params.industrycChangSiutMsg" class="textArea" type="textarea" rows="3" placeholder="请输入")
			.item
				span(class="tag big-max") 企业是否有与主业无关的扩张计划
				almSelect(:selectData="yesNo"  :defaultValue="params.planExpandSitu" :triggerId="triggerId2" :title="selectTitle2" :fontColor="fontColor" @getSelectValue="planExpandSitu" class="info" ) 
				span(class="iconfont iconxiala arrow") 
			.item(class="item-textarea")
				mt-field(v-model="params.planExpandSituMsg" class="textArea" type="textarea" rows="3" placeholder="请输入")
			.item
				span(class="tag big-max") 生产经营是否存在安全隐患
				almSelect(:selectData="yesNo"  :defaultValue="params.hiddenTroubleSitu" :triggerId="triggerId3" :title="selectTitle3" :fontColor="fontColor" @getSelectValue="hiddenTroubleSitu" class="info" ) 
				span(class="iconfont iconxiala arrow") 
			.item(class="item-textarea")
				mt-field(v-model="params.hiddenTroubleSituMsg" class="textArea" type="textarea" rows="3" placeholder="请输入")
			.item
				span(class="tag big-max") 其他
			.item(class="item-textarea")
				mt-field(v-model="params.otherSitu" class="textArea" type="textarea" rows="3" placeholder="请输入")
		.definite-smalltitle(class="big-one")
			span(class="colum-blue")
			span  担保情况
		.definite-field
			.item
				span(class="tag big") 上次抵质押物评估或重估日期
				span(class="info" @click="a") 
					input(v-model="params.collEstimateDate" :disabled="true" type="input" class="field-input" placeholder="请输入")
				
			.item
				span(class="tag big") 上次抵质押物评估或重估金额
				span(class="info") 
					input(v-model="params.collEstimateValue" type="input" class="field-input" placeholder="请输入")
		mt-datetime-picker(
			ref="picker"
			type="date"
			v-model="pickerValue" 
			@confirm="handleConfirm()")
		.war-tag
			mt-field(:placeholder="collEstimateMsg" class="war-tag" v-model="params.collEstimateMsg"  type="textarea" rows="3" )
	  
</template>

<script>
import { DatetimePicker } from "mint-ui";
import { formatDate, getLastYearYestdy } from "@/utils/utils";
import almSelect from "../components/select";
import { yesNo } from "../../../utils/dataMock.js";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: { "mt-datetime-picker": DatetimePicker, almSelect },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data() {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      params: {
        industrycChangSiut: 9,
        planExpandSitu: 9,
        hiddenTroubleSitu: 9,
        industrycChangSiutMsg: "",
        planExpandSituMsg: "",
        hiddenTroubleSituMsg: "",
        collEstimateDate: "",
        collEstimateValue: "",
        otherSitu: "",
        collEstimateMsg:""
      },
      startDate: new Date(getLastYearYestdy(new Date())),
      endDate: new Date(),
      triggerId1: "IndustrycChangSiut",
      triggerId2: "planExpandSitu",
      triggerId3: "hiddenTroubleSitu",
      pickerValue: new Date(),
      selectTitle1: "企业所在行业是否发生重大不利变化",
      selectTitle2: "企业是否有与主业无关的扩张计划",
      selectTitle3: "生产经营是否存在安全隐患",
      fontColor: "blue",
      yesNo: yesNo,
			loanBusiness: {},
			collEstimateMsg:
          "根据现场检查及非现场查询情况，从抵(质)押物市场价值和变现能力方面分析，判|断抵(质)押物是否出现约定的需增加、置换等变动情形。"
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
        this.loanBusiness = this.params;
      }
    }
  },
  methods: {
    a() {
      this.$refs.picker.open();
    },
    handleConfirm() {
      if (!this.pickerValue) {
        this.pickerValue = this.startDate;
      }
			// this.params.collEstimateDate = formatDate(this.pickerValue);
			this.$set(this.params,'collEstimateDate',formatDate(this.pickerValue))
      this.$refs.picker.close();
    },
    IndustrycChangSiut(val) {
      this.params.industrycChangSiut = val[0].key;
    },
    planExpandSitu(val) {
      this.params.planExpandSitu = val[0].key;
    },
    hiddenTroubleSitu(val) {
      this.params.hiddenTroubleSitu = val[0].key;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite-6-wrapper {
  width: 100%;
  height: 100%;
  .small-one {
    height: px2rem(18);
    line-height: px2rem(18);
  }
  .big-one {
    height: px2rem(44);
    line-height: px2rem(44);
  }
  .item-textarea {
    height: px2rem(74);
  }
  .war-tag {
    padding: px2rem(7);
    font-size: px2rem(14);
    color: #9f9f9f;
    background-color: #fff;
    line-height: 1.2;
  }
}
</style>
<style lang="scss">
// @import "../../../assets/style/global.scss";
.definite-6-wrapper {
  .war-tag {
    .mint-cell-wrapper {
      padding: 0 !important;
      font-size: px2rem(14);
      textarea {
        resize: none;
      }
    }
  }
}
</style>
