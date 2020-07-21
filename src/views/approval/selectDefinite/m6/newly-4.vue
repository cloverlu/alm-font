<!--
 * @Descripttion: 新增 4
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	.newly4
		.newly-4-repeat(v-for="(item,index) in detail.assitInfoForPledge" :key="index"  )
			.repeat-operation
				.repeat-operation-title 新增 {{item.id}}
			.definite-field
				.item
					span(class="tag big") 押品名称
					span(class="info") {{item.assitName}}
				.item
					span(class="tag big") 押品位置地址
					span(class="info") {{item.assitAddr}}
			.definite-field(class="field-top")
				.item
					span(class="tag big") 首次评估情况
					span(class="info") {{item.firstEstimateDate}}
				.item
					span(class="tag big") 我行认定价值
					span(class="info") {{item.firstEstimateValue}}
				.item
					span(class="tag big") 抵质押率
					span(class="info") {{item.firstMortAndpleRate}}
			.definite-field(class="field-top")
				.item
					span(class="tag big") 最近一次评估情况
					span(class="info") {{item.LastEstimateDate}}
				.item
					span(class="tag big") 我行认定价值
					span(class="info") {{item.LastEstimateValue}}
				.item
					span(class="tag big") 抵质押率
					span(class="info") {{item.LastMortAndpleRate}}
			.definite-field(class="field-top")
				.item
					span(class="tag big") 本次评估情况
					span(class="info") {{item.thisEstimateDate}}
				.item
					span(class="tag big") 我行认定价值
					span(class="info") {{item.thisEstimateValue}}
				.item
					span(class="tag big") 抵质押率
					span(class="info") {{item.thisMortAndpleRate}}
		
		.newly-4-norepeat
			fieldOne(:definite="newly4" :info="detail.fieldOne" ref="fieldOne")

		

</template>

<script>
import { newly4 } from "../../../../utils/dataMock.js";
import fieldOne from "../../../loanInspection/components/fieldOne";
export default {
  components: { fieldOne },
  props: ["detail"],
  data() {
    return {
      newly4: newly4
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import "../../../../assets/style/global.scss";
.newly4 {
  width: 100%;
  height: 100%;
  .newly-4-repeat {
    &.transa {
      transform: scaleX(0);
      transition: transform 0.4s;
      transform-origin: top right;
    }
    &:not(:first-child) {
      margin-top: px2rem(10);
    }
    .field-top {
      margin-top: px2rem(10);
    }
    .repeat-operation {
      width: 100%;
      height: px2rem(30);
      line-height: px2rem(30);
      background-color: #dee4f2;
      padding: 0 px2rem(16);
      box-sizing: border-box;
      display: flex;
      .repeat-operation-title {
        color: #4e78de;
        font-size: px2rem(12);
        flex: 1;
        text-align: left;
      }
      .repeat-operation-delete {
        color: #db3822;
        font-size: px2rem(12);
        flex: 1;
        text-align: right;
      }
    }
  }
  .add {
    width: 100%;
    padding: px2rem(11) px2rem(15);
    box-sizing: border-box;
  }
  .newly-4-norepeat {
    width: 100%;
    background-color: #fff;
    margin-top: px2rem(10);
  }
}
</style>
