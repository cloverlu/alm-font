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
			.definite-89-dropdown
				//- .drop-down-item(@click="dropShow") aaa
				//- .drop-down-content(v-show="dropVisibale")
				van-dropdown-menu(class="dropdown89" )
					van-dropdown-item(:options="option" v-model="value")
		.definite-89-content
			definite8(@childParams="childParams" :detail="params8" v-if="value==='1'")
			definite9(@childParams2="childParams2" :detail="params9" v-if="value==='2'")
		.war-tag
			mt-field(:placeholder="financeMsg" class="war-tag" v-model="params8.financeMsg"  type="textarea" rows="5" v-if="value==='1'")
			mt-field(:placeholder="financeMsg" class="war-tag" v-model="params9.financeMsg"  type="textarea" rows="5" v-if="value==='2'")
			


</template>

<script>
import definite8 from "../creditOverall/credit8";
import definite9 from "../creditOverall/credit9";
import { DropdownMenu, DropdownItem } from "vant";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: {
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
    definite8,
    definite9
  },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data () {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      dropVisibale: false,
      value: "1",
      option: [
        { text: "加工制造类企业适用", value: "1" },
        { text: "贸易类/其他类企业适用", value: "2" }
      ],
      params: {},
      params8: {},
      params9: {},
      loanBusiness: {},
      financeMsg:
        "根据财务信息及现场检查情况,判断企业是否主营业务变动、生产经营异常(停产、半停产、员工数量骤减、设备开工率不足等)，主要原材料或货物的采购成本变动，销售异常，上下游核小客户变动等情况，并详细阐述异常情况对企业偿债能力的影响。"
    };
  },
  mounted () {
    // 上一步下一步需要走的详情接口
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
    dropShow () {
      this.dropVisibale = !this.dropVisibale;
    },
    childParams (val) {
      const financeMsg = {
        financeMsg: this.params8.financeMsg
      }
      const finance = Object.assign({}, val, financeMsg)
      this.loanBusiness = {
        financeInfo: finance
      };
      console.log(this.loanBusiness)
    },
    childParams2 (val) {
      const financeMsg = {
        financeMsg: this.params9.financeMsg
      }
      const finance = Object.assign({}, val, financeMsg)
      this.loanBusiness = {
        financeInfo: finance
      };
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.definite-89-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 120;
  }
  .definite-89-top {
    height: px2rem(85);
    width: 100%;
    flex: 0 0 px2rem(85);
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
  .definite-89-content {
    flex: 1;
  }
}
</style>
