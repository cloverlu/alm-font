<!--
 * @Descripttion: 新增 5
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	.newly5-wrapper
		.wrapper
			.newly-5-repeat(v-for="(item,index) in detail.assitInfoForGuarantee" :key="index" )
				.repeat-operation
					.repeat-operation-title 新增 
				.definite-field
					.item
						span(class="tag") 担保公司名称
						span(class="info") {{item.assitName}}
					.item
						span(class="tag") 我行合作状态
						span(class="info") {{item.cooperatStatus}}
					.item
						span(class="tag") 风险分类
						span(class="info") {{item.assitFiveClass}}
	
</template>

<script>
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
.newly5-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .wrapper {
    flex: 1;
    .newly-5-repeat {
      &.transa {
        transform: scaleX(0);
        transition: transform 0.2s;
        transform-origin: top right;
      }
      &:not(:first-child) {
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
  }

  .add {
    flex: 0 0 px2rem(70);
    width: 100%;
    padding: px2rem(11) px2rem(15);
    box-sizing: border-box;
  }
}
</style>
