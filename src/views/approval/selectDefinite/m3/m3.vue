<!--
 * @Descripttion: 新增1-8
 * @Author: penglu
 * @Date: 2020-06-10 11:30:49
-->

<template lang="pug">
	.credit-overall
		.newly-18
			.definite-field
				.item
					span(class="tag") 授信金额
					span(class="info") {{detail.newly18.lineAmout}}
				.item
					span(class="tag") 授信余额
					span(class="info") {{detail.newly18.lineBalance}}
				.item
					span(class="tag") 担保方式
					span(class="info" v-if="detail.newly18.securityKind === '1'") 信用
					span(class="info" v-else-if="detail.newly18.securityKind === '2'") 抵押
					span(class="info" v-else-if="detail.newly18.securityKind === '3'") 质押
					span(class="info" v-else-if="detail.newly18.securityKind === '4'") 保证
					span(class="info" v-else-if="detail.newly18.securityKind === '5'") 其它
				.item(class="input-item" v-if="detail.newly18.securityKind === '5'")
					mt-field(v-model="detail.newly18.otherSecurityKindMsg" class="textArea other-textArea" type="input"  :disabled="true")
				.item
					span(class="tag") 还款方式
					span(class="info") {{detail.newly18.repayKind}}
			.definite-1-title2
				span 填写信息
			.definite-smalltitle(class="blue-titile-one")
				span(class="colum-blue")
				span  审批意见中贷后日常检查要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" :info="detail.newly18" :read="true" ref="fieldOne" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  产品贷后日常检查特殊要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldSpecial" :info="detail.newly18" :read="true" ref="fieldTwo" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  利率及综合金融服务的要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldRate" :info="detail.newly18" :read="true" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  实际控制人或法定代表人风险点
			.newly-18-field(class="small-one")
				fieldOne(:definite="newly18One" :info="detail.newly18" :read="true" ref="fieldFour" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  管理层风险点
			.newly-18-field(class="small-two")
				fieldOne(:definite="newly18Two" :info="detail.newly18" :read="true" ref="fieldFive" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  近期检查发现的其他风险点
			.newly-18-field(class="small-three")
				mt-field(v-model="detail.newly18.otherRisk" :disabled="true" class="textArea" type="textarea" rows="3" )
			definite13(:detail="detail.definite13")
			definite11(:detail="detail.definite11")
			definite10(:detail="detail.definite10")
			credit89(:detail="detail.credit89") 
			definite6(:detail="detail.definite6") 
			definite17(:detail="detail.definite17") 
</template>

<script>
import {
  newly18,
  securityKinds,
  definite1Field,
  definite1FieldSpecial,
  definite1FieldRate,
  newly18One,
  newly18Two
} from "../../../../utils/dataMock.js";

import fieldOne from "../../../loanInspection/components/fieldOne";
import definite13 from "../m2/definite-13";
import definite10 from "../m2/definite-10";
import definite11 from "../m2/definite-11";
import credit89 from "../m3/credit89";
import definite6 from "../m3/definite6";
import definite17 from "../m3/definite-17";
import { normalMixin, approvalMixin } from "../../../../utils/mixin";
export default {
  components: {
    fieldOne,
    definite13,
    definite10,
    credit89,
    definite6,
    definite17,
    definite11
  },
  mixins: [normalMixin, approvalMixin],
  data() {
    const definite17 = _ => {
      const definite17 = {};
      for (let i = 0; i < 12; i++) {
        const a = `pic_${i + 1}s`;
        definite17[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return definite17;
    };
    return {
      bizId: this.$route.params.bizId,
      newly18: newly18,
      definite1Field: definite1Field,
      definite1FieldSpecial: definite1FieldSpecial,
      definite1FieldRate: definite1FieldRate,
      newly18One: newly18One,
      newly18Two: newly18Two,
      detail: {
        newly18: {},
        definite13: {},
        definite11: {},
        definite10: {},
        credit89: {},
        definite6: {},
        definite17: {}
      }
    };
  },
  computed: {},

  async mounted() {
    await this.setApproveDetail(this);
    this.detail = this.approveDetail(this.$route.params.type);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.credit-overall {
  width: 100%;
  height: 100%;
  .newly-18 {
    width: 100%;
    height: 100%;
    margin-top: px2rem(-1);
    .definite-field {
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
      background-color: #fff;
    }
  }
}
</style>
