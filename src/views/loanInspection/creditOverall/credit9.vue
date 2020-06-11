<!--
 * @Descripttion: 检查申请明细-8
 * @Author: penglu
 * @Date: 2020-06-10 17:15:13
-->
<template lang="pug">
	.definite-8-wrapper
		fieldTwo(:info="caiwuOne" :type="typeOne" ref="caiwuone")
		fieldTwo(:info="caiwuTwo" :type="typeOne" ref="caiwutwo")
		fieldTwo(:info="caiwuSeven" :type="typeTwo" ref="caiwuseven")
		fieldTwo(:info="caiwuEight" :type="typeTwo" ref="caiwueight")
		.war-tag
			span 根据财务信息及现场检查情况,判断企业是否主营业务变动、生产经营异常(停产、半停产、员工数量骤减、设备开工率不足等)，主要原材料或货物的采购成本变动，销售异常，上下游核小客户变动等情况，并详细阐述异常情况对企业偿债能力的影响。
</template>

<script>
import fieldTwo from "../creditOverall/fieldTwo";
import {
  caiwuOne,
  caiwuTwo,
  caiwuSeven,
  caiwuEight
} from "../../../utils/dataMock.js";
export default {
  components: { fieldTwo },
  data() {
    return {
      typeOne: 1,
      typeTwo: 2,
      caiwuOne: caiwuOne,
      caiwuTwo: caiwuTwo,
      caiwuSeven: caiwuSeven,
      caiwuEight: caiwuEight
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.definite-8-wrapper {
  width: 100%;
  height: 100%;
  .war-tag {
    padding: px2rem(15);
    font-size: px2rem(14);
    color: #9f9f9f;
    background-color: #fff;
    line-height: 1.2;
    margin-top: px2rem(-8);
  }
}
</style>
