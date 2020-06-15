<!--
 * @Descripttion: 新增1-8
 * @Author: penglu
 * @Date: 2020-06-10 11:30:49
-->

<template lang="pug">
	.credit-overall
		.newly-18
			.definite-field(:class="params.securityKind === 4 ? 'add-item' : ''")
				.item
					span(class="tag") 授信金额
					span(class="info") {{detail.lineAmout}}
				.item
					span(class="tag") 授信余额
					span(class="info") {{detail.lineBalance}}
				.item
					span(class="tag") 担保方式
					almSelect(:selectData="info"  :defaultValue="params.securityKind" :triggerId="securityKindId" :title="selectTitle" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
					span(class="iconfont iconxiala arrow") 
				.item(class="input-item" v-if="params.securityKind === 4")
					mt-field(v-model="params.otherSecurityKindMsg" class="textArea other-textArea" type="input"  placeholder="其他担保方式")
				.item
					span(class="tag") 还款方式
					span(class="info")
						input(v-model="params.repayKind" type="input" class="field-input" placeholder="请输入还款方式")
			.definite-1-title2
				span 填写信息
			.definite-smalltitle(class="blue-titile-one")
				span(class="colum-blue")
				span  审批意见中贷后日常检查要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" ref="fieldOne" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  产品贷后日常检查特殊要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" ref="fieldTwo" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  利率及综合金融服务的要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  实际控制人或法定代表人风险点
			.newly-18-field(class="small-one")
				fieldOne(:definite="newly18One" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  管理层风险点
			.newly-18-field(class="small-two")
				fieldOne(:definite="newly18Two" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  近期检查发现的其他风险点
			.newly-18-field(class="small-three")
				mt-field(v-model="params.otherRisk" class="textArea" type="textarea" rows="3" placeholder="请输入")
</template>

<script>
import {
  newly18,
  securityKinds,
  definite1Field,
  newly18One,
  newly18Two
} from "../../../utils/dataMock.js";
import almSelect from "../../loanInspection/components/select";
import fieldOne from "../../loanInspection/components/fieldOne";
export default {
  components: { almSelect, fieldOne },
  data() {
    return {
      detail: newly18,
      info: securityKinds(),
      definite1Field: definite1Field,
      newly18One: newly18One,
      newly18Two: newly18Two,
      selectTitle: "担保方式",
      fontColor: "blue",
      securityKindId: "securityKind",
      params: {
        securityKind: 1,
        otherSecurityKindMsg: "",
        repayKind: "",
        requireCheck: "", //审批意见中贷后日常检查要求及落实情况
        checked: "", //审批意见中贷后日常检查要求及落实情况
        specialRequireCheck: "", //产品贷后日常检查特殊要求及落实情况
        specialChecked: "", //产品贷后日常检查特殊要求及落实情况
        rateAndIntfinSerCheck: "", // 利率及综合金融服务的要求及落实情况
        rateAndIntfinSerChecked: "", // 利率及综合金融服务的要求及落实情况
        HoldPensonRisk: "", //实际控制人或法定代表人风险点
        managerRisk: "", //管理层风险点
        otherRisk: "" //近期检查发现的其他风险点
      }
    };
  },
  mounted() {},
  methods: {
    getSelect(val) {
      this.params.securityKind = val[0].key;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.credit-overall {
  width: 100%;
  height: 100%;
  .newly-18 {
    width: 100%;
    height: 100%;
    .definite-field {
      height: px2rem(220);
      &.add-item {
        height: px2rem(264);
      }
      .input-item {
        padding: inherit;
        .other-textArea {
          height: px2rem(44);
        }
      }
    }
    .blue-titile-one {
      height: px2rem(24);
      line-height: px2rem(24);
    }
    .blue-titile-two {
      height: px2rem(44);
      line-height: px2rem(44);
    }
    .newly-18-field {
      width: 100%;
      height: px2rem(236);
      background-color: #fff;
      &.small-one {
        height: px2rem(118);
      }
      &.small-two {
        height: px2rem(132);
      }
      &.small-three {
        height: px2rem(74);
      }
    }
  }
}
</style>
