<!--
 * @Descripttion: 检查申请明细-8
 * @Author: penglu
 * @Date: 2020-06-10 17:15:13
-->
<template lang="pug">
	.definite-8-wrapper
		fieldTwo(:info="caiwuOne" :type="typeOne" :detail="detail" :read="false" ref="caiwuone")
		fieldTwo(:info="caiwuTwo" :type="typeOne" :detail="detail" :read="false" ref="caiwutwo")
		fieldTwo(:info="caiwuThree" :type="typeTwo" :detail="detail" :read="false" ref="caiwuthree")
		fieldTwo(:info="caiwuFour" :type="typeTwo" :detail="detail" :read="false" ref="caiwufour")
		.war-tag
			mt-field(class="war-tag" v-model="params.financeMsg"  type="textarea" rows="5" placeholder="请输入")
</template>

<script>
import fieldTwo from "../creditOverall/fieldTwo";
import { normalMixin } from "../../../utils/mixin";

import {
  caiwuOne,
  caiwuTwo,
  caiwuThree,
  caiwuFour
} from "../../../utils/dataMock.js";
export default {
  components: { fieldTwo },
  mixins: [normalMixin],
  props: ["detail"],
  data() {
    return {
      typeOne: 1,
      typeTwo: 2,
      caiwuOne: caiwuOne,
      caiwuTwo: caiwuTwo,
      caiwuThree: caiwuThree,
      caiwuFour: caiwuFour,
      params: {
        financeMsg:
          "根据财务信息及现场检查情况,判断企业是否主营业务变动、生产经营异常(停产、半停产、员工数量骤减、设备开工率不足等)，主要原材料或货物的采购成本变动，销售异常，上下游核小客户变动等情况，并详细阐述异常情况对企业偿债能力的影响。"
      },
      loanBusiness: {}
    };
  },
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        const financeClassification = {
          financeClassification: "1"
        };
        this.loanBusiness = Object.assign(
          {},
          financeClassification,
          this.params,
          this.$refs.caiwuone.params,
          this.$refs.caiwutwo.params,
          this.$refs.caiwuthree.params,
          this.$refs.caiwufour.params
        );

        this.$emit("childParams", this.loanBusiness);
        // this.setm1Definite2({ params: this.params });
        // this.footerRoute("loanCreditFirst", "firstDefinite2");
        // this.$router.push({ name: "firstDefinite16" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite-8-wrapper {
  width: 100%;
  height: 100%;
  .war-tag {
    padding: px2rem(7);
    font-size: px2rem(14);
    color: #9f9f9f;
    background-color: #fff;
    line-height: 1.2;
    margin-top: px2rem(-8);
  }
}
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";
.definite-8-wrapper {
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
