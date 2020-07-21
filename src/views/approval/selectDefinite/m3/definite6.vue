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
				//- span(class="info" v-if="detail.industrycChangSiut === 0") 否
				//- span(class="info" v-else-if="detail.industrycChangSiut === 1") 是
			.item(class="item-textarea")
				mt-field(v-model="detail.industrycChangSiutMsg" :disabled="true" class="textArea" type="textarea" rows="3" )
			.item
				span(class="tag big-max") 企业是否有与主业无关的扩张计划
				//- span(class="info" v-if="detail.planExpandSitu === 0") 否
				//- span(class="info" v-else-if="detail.planExpandSitu === 1") 是
			.item(class="item-textarea")
				mt-field(v-model="detail.planExpandSituMsg" :disabled="true" class="textArea" type="textarea" rows="3" )
			.item
				span(class="tag big-max") 生产经营是否存在安全隐患
				//- span(class="info" v-if="detail.hiddenTroubleSitu === 0") 否
				//- span(class="info" v-else-if="detail.hiddenTroubleSitu === 1") 是
			.item(class="item-textarea")
				mt-field(v-model="detail.hiddenTroubleSituMsg" :disabled="true"  class="textArea" type="textarea" rows="3")
			.item
				span(class="tag big-max") 其他
			.item(class="item-textarea")
				mt-field(v-model="detail.otherSitu" :disabled="true"  class="textArea" type="textarea" rows="3" )
		.definite-smalltitle(class="big-one")
			span(class="colum-blue")
			span  担保情况
		.definite-field
			.item
				span(class="tag big") 上次抵质押物评估或重估日期
				span(class="info") {{detail.collEstimateDate}}
			.item
				span(class="tag big") 上次抵质押物评估或重估金额
				span(class="info") {{detail.collEstimateValue}}
		.war-tag
			span {{detail.collEstimateMsg}}

</template>

<script>
import { formatDate2 } from "@/utils/utils";
export default {
  props: ["detail"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import "../../../../assets/style/global.scss";
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
    padding: px2rem(15);
    font-size: px2rem(14);
    color: #9f9f9f;
    background-color: #fff;
    line-height: 1.2;
  }
}
</style>
