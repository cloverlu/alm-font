<!--
 * @Descripttion: 检查申请明细-8、检查申请明细-9
 * @Author: penglu
 * @Date: 2020-06-10 16:04:35
-->
<template lang="pug">
	.definite-89-wrapper
		//- .mask(v-show="dropVisibale")
		.definite-89-top
			.definite-1-title
				span(class="colum-blue")
				span(class="title") 企业财务情况
			.definite-smalltitle
				span(class="colum-blue")
				span(class="title" v-if="detail.financeClassification === '1'") 加工制造类企业适用
				span(class="title" v-else-if="detail.financeClassification === '2'") 贸易类/其他类企业适用
		.definite-89-content(v-if="detail.financeClassification === '1'")
			fieldTwo(:info="caiwuOne" :type="typeOne" :detail="detail" :read="true" ref="caiwuone")
			fieldTwo(:info="caiwuTwo" :type="typeOne" :detail="detail" :read="true" ref="caiwutwo")
			fieldTwo(:info="caiwuThree" :type="typeTwo" :detail="detail" :read="true" ref="caiwuthree")
			fieldTwo(:info="caiwuFour" :type="typeTwo" :detail="detail" :read="true" ref="caiwufour")
			.war-tag
				span {{detail.financeMsg}}
		.definite-89-content(v-if="detail.financeClassification === '2'")
			fieldTwo(:info="caiwuOne" :type="typeOne"  :detail="detail" :read="true" ref="caiwufive")
			fieldTwo(:info="caiwuTwo" :type="typeOne" :detail="detail" :read="true" ref="caiwuseven")
			fieldTwo(:info="caiwuSeven" :type="typeTwo" :detail="detail" :read="true" ref="caiwuseven")
			fieldTwo(:info="caiwuEight" :type="typeTwo" :detail="detail" :read="true" ref="caiwueight")
			.war-tag
				span {{detail.financeMsg}}
			


</template>

<script>
import fieldTwo from "../../../loanInspection/creditOverall/fieldTwo";
import {
  caiwuOne,
  caiwuTwo,
  caiwuThree,
  caiwuFour,
  caiwuSeven,
  caiwuEight
} from "../../../../utils/dataMock.js";
export default {
  components: { fieldTwo },
  props: ["detail"],
  data() {
    return {
      caiwuOne: caiwuOne,
      caiwuTwo: caiwuTwo,
      caiwuThree: caiwuThree,
      caiwuFour: caiwuFour,
      caiwuSeven: caiwuSeven,
      caiwuEight: caiwuEight,
      typeOne: 1,
      typeTwo: 2
    };
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import "../../../../assets/style/global.scss";
.definite-89-wrapper {
  width: 100%;
  height: 100%;

  .definite-89-top {
    width: 100%;
    .definite-smalltitle {
      height: px2rem(30);
      line-height: px2rem(30);
    }
  }
  .definite-89-content {
    .war-tag {
      padding: px2rem(15);
      font-size: px2rem(14);
      color: #9f9f9f;
      background-color: #fff;
      line-height: 1.2;
      margin-top: px2rem(-8);
    }
  }
}
</style>
