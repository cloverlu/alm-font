<!--
 * @Descripttion: 新增 4
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	.newly4
		.newly-4-repeat(v-for="(item,index) in info" :key="item.id" :class="trasIndex === item.id ? 'transa' : ''" )
			.repeat-operation(v-if="index !== 0")
				.repeat-operation-title 新增 {{item.id}}
				.repeat-operation-delete(@click="operateDelete(index,item.id)")  删除
			.definite-field
				.item
					span(class="tag big") 押品名称
					span(class="info") 
						input(v-model="item.assitName" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 押品位置地址
					span(class="info") 
						input(v-model="item.assitAddr" type="input" class="field-input" placeholder="请输入")
			.definite-field(class="field-top")
				.item
					span(class="tag big") 首次评估情况
					span(class="info") 
						input(v-model="item.firstEstimateDate" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 我行认定价值
					span(class="info") 
						input(v-model="item.firstEstimateValue" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 抵质押率
					span(class="info") 
						input(v-model="item.firstMortAndpleRate" type="input" class="field-input" placeholder="请输入")
			.definite-field(class="field-top")
				.item
					span(class="tag big") 最近一次评估情况
					span(class="info") 
						input(v-model="item.LastEstimateDate" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 我行认定价值
					span(class="info") 
						input(v-model="item.LastEstimateValue" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 抵质押率
					span(class="info") 
						input(v-model="item.LastMortAndpleRate" type="input" class="field-input" placeholder="请输入")
			.definite-field(class="field-top")
				.item
					span(class="tag big") 本次评估情况
					span(class="info") 
						input(v-model="item.thisEstimateDate" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 我行认定价值
					span(class="info") 
						input(v-model="item.thisEstimateValue" type="input" class="field-input" placeholder="请输入")
				.item
					span(class="tag big") 抵质押率
					span(class="info") 
						input(v-model="item.thisMortAndpleRate" type="input" class="field-input" placeholder="请输入")
		.add
			mt-button(class="add-primary" type="primary" @click="addInfo") + 增加
		.newly-4-norepeat
			fieldOne(:definite="newly4" ref="fieldOne")

		

</template>

<script>
import { newly4 } from "../../../utils/dataMock.js";
import { Button } from "mint-ui";
import fieldOne from "../components/fieldOne";
export default {
  components: { "mt-button": Button, fieldOne },
  data() {
    return {
      params: {},
      trasIndex: "",
      info: [
        {
          id: 1,
          i: 0,
          assitName: "", //押品名称
          assitAddr: "", //押品位置地址
          firstEstimateDate: "", //首次评估情况
          firstEstimateValue: "", //我行认定价值
          firstMortAndpleRate: "", //抵质押率
          LastEstimateDate: "", //最近一次评估情况
          LastEstimateValue: "", //我行认定价值
          LastMortAndpleRate: "", //抵质押率
          thisEstimateDate: "", //本次评估情况
          thisEstimateValue: "", //我行认定价值
          thisMortAndpleRate: "" //抵质押率
        }
      ],
      newly4: newly4
    };
  },
  methods: {
    addInfo() {
      const item = {
        id: Date.now(),
        assitName: "", //押品名称
        assitAddr: "", //押品位置地址
        firstEstimateDate: "", //首次评估情况
        firstEstimateValue: "", //我行认定价值
        firstMortAndpleRate: "", //抵质押率
        LastEstimateDate: "", //最近一次评估情况
        LastEstimateValue: "", //我行认定价值
        LastMortAndpleRate: "", //抵质押率
        thisEstimateDate: "", //本次评估情况
        thisEstimateValue: "", //我行认定价值
        thisMortAndpleRate: "" //抵质押率
      };
      this.info.push(item);
    },
    operateDelete(index, id) {
      this.trasIndex = id;
      setTimeout(() => {
        this.info.splice(index, 1);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.newly4 {
  width: 100%;
  height: 100%;
  .newly-4-repeat {
    &.transa {
      transform: scaleX(0);
      transition: transform 0.4s;
      transform-origin: top right;
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
  }
}
</style>
