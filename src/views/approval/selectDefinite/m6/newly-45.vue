<!--
 * @Descripttion: 新增4/新增5
 * @Author: penglu
 * @Date: 2020-06-11 16:37:28
-->

<template lang="pug">
	.definite-89-wrapper
		.definite-89-top
			.definite-1-title
				span(class="colum-blue")
				span(class="title") 担保情况检查
		.definite-89-content(v-if="detail.assitInfoForPledge && detail.assitInfoForPledge.length > 0")
			.newly-45-title
				span 房地产抵押担保适用
			.newly-45-content
				newly4(:detail="detail" )
		.definite-89-content(class="content2" v-if="detail.assitInfoForGuarantee && detail.assitInfoForGuarantee.length > 0")
			.newly-45-title
				span 融资担保机构担保适用
			.newly-45-content
				newly5(:detail="detail" )
		
</template>

<script>
import newly4 from "../m6/newly-4";
import newly5 from "../m6/newly-5";
export default {
  components: { newly4, newly5 },
  props: ["detail"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.definite-89-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .definite-89-top {
    width: 100%;
  }
  .definite-89-content {
    padding: 0 px2rem(6);
    box-sizing: border-box;
    &.content2 {
      margin-top: px2rem(10);
    }
    .newly-45-title {
      padding: px2rem(7) px2rem(10);
      font-size: px2rem(14);
      background-color: rgba(78, 120, 222, 0.81);
      color: #fff;
      box-sizing: border-box;
      border-radius: px2rem(3);
    }
    .newly-45-content {
      margin-top: px2rem(10);
    }
  }
}
</style>
