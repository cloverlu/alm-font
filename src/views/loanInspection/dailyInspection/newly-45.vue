<!--
 * @Descripttion: 新增4/新增5
 * @Author: penglu
 * @Date: 2020-06-11 16:37:28
-->

<template lang="pug">
	.definite-89-wrapper
		.definite-89
			.definite-1-title2(class="definite-89-top")
				span(class="title") 担保情况检查
			.wrapper-89
				.definite-89-title1 
					.titil-89 {{option[0].text}}
				.definite-89-content
					newly4(:detail="params" @upperParams4="upperParams4")
			.wrapper-89
				.definite-89-title1
					.titil-89 {{option[1].text}}
				.definite-89-content
					newly5(:detail="params" @upperParams5="upperParams5")
</template>

<script>
import newly4 from "../dailyInspection/newly-4";
import newly5 from "../dailyInspection/newly-5";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: {
    newly4,
    newly5
  },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data() {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      dropVisibale: false,
      value: 0,
      option: [
        { text: "房地产抵押担保适用", value: 0 },
        { text: "融资担保机构担保适用", value: 1 }
      ],
      params: {
        assitInfoForPledge: [],
        assitInfoForGuarantee: []
      },
      loanBusiness: {}
    };
  },
  mounted() {
    const moduleName = this.$route.params.moduleName;
    const name = this.$route.name;
    const type = this.userBizType.bizType;
    // 上一步下一步需要走的详情接口
    if (moduleName === "custmer") {
      const billNo = this.$route.params.billNo;
      if (this.bizId) {
        this.userMountedTag(type, billNo, name);
      }
    } else {
      const flag = this.$route.params.saveFlag;
      this.mountedTag(flag, name, this.$route.params.bizId);
    }
  },

  methods: {
    upperParams4(val) {
      this.loanBusiness = Object.assign({}, this.params, val);
    },
    upperParams5(val) {
      this.loanBusiness = Object.assign({}, this.params, val);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite-89-wrapper {
  width: 100%;
  height: 100%;
  .definite-89 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .definite-89-top {
    height: px2rem(40);
    width: 100%;
    .definite-89-dropdown {
      width: 100%;
      height: px2rem(31);
      padding: 0 px2rem(5);
      box-sizing: border-box;
      position: relative;
      z-index: 150;
      .drop-down-item {
        width: 100%;
        height: px2rem(31);
        line-height: px2rem(31);
        color: #fff;
        background-color: rgba(78, 120, 222, 0.81);
        padding: 0 px2rem(10);
        border-top-left-radius: px2rem(3);
        border-top-right-radius: px2rem(3);
        font-size: px2rem(14);
        box-sizing: border-box;
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);
      }
      .drop-down-content {
        height: px2rem(88);
        position: absolute;
        top: px2rem(32);
        background-color: #fff;
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);
        left: px2rem(5);
        right: px2rem(5);
        border-bottom-left-radius: px2rem(3);
        border-bottom-right-radius: px2rem(3);
        transition-duration: 0.2s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        &.open {
          transition: transform 0.3s, -webkit-transform 0.3s;
        }
      }
    }
  }
  .wrapper-89 {
    &:last-child {
      margin-top: px2rem(15);
    }
    .definite-89-title1 {
      width: 100%;
      height: px2rem(31);
      line-height: px2rem(31);
      padding: 0 px2rem(6);
      box-sizing: border-box;
      .titil-89 {
        padding: 0 px2rem(10);
        box-sizing: border-box;
        color: #fff;
        background-color: rgba(78, 120, 222, 0.81);
        border-top-left-radius: px2rem(3);
        border-top-right-radius: px2rem(3);
        font-size: px2rem(14);
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);
      }
    }
    .definite-89-content {
    }
  }
}
</style>
