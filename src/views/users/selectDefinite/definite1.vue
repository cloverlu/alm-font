<!--
 * @Descripttion: 流程1：检查申请明细-1
 * @Author: penglu
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
.credit-wrapper
	.definite-1-wrapper()
		.definite-field
			.item
				span(class="tag") 放款日期
				span(class="info") {{detail.loanDate}}
			.item
				span(class="tag") 贷款金额
				span(class="info") {{detail.loanAmout}}
			.item
				span(class="tag") 贷款期限
				span(class="info") {{detail.loanLength}}月
			.item
				span(class="tag") 贷款支付方式
				almSelect(:selectData="payTypes"  :defaultValue="params.payKind" :title="selectTitle" :triggerId="payKind" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
				span(class="iconfont iconxiala arrow")
			.item
				span(class="tag") 约定用途
			.item(class="item-textarea")
				mt-field(v-model="params.loanPurpose" class="textArea" type="textarea" rows="3" placeholder="请输入")
		.definite-1-title2
			span 填写信息
		.definite-smalltitle
			span(class="colum-blue")
			span  检查要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1Field" :info="params" :read="false" ref="fieldOne")
		.definite-smalltitle(class="definite-1-smalltitle2")
			span(class="colum-blue")
			span  特殊要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1FieldSpecial" :read="false" :info="params" ref="fieldTwo")
	//- router-view( ref="rview"  v-else)
</template>

<script>
import {
  definite1,
  payType,
  definite1Field,
  definite1FieldSpecial
} from "../../../utils/dataMock";
import almSelect from "../../loanInspection/components/select";
import fieldOne from "../../loanInspection/components/fieldOne";
import { normalMixin, userMixin } from "../../../utils/mixin";

export default {
  mixins: [normalMixin, userMixin],
  components: { almSelect, fieldOne },
  props: ["detail", "uBizId"],
  data() {
    return {
      bizId: this.uBizId,
      // detail: "",
      payTypes: payType,
      definite1Field: definite1Field,
      definite1FieldSpecial: definite1FieldSpecial,
      popupVisible: false,
      payType: 1,
      selectTitle: "贷款支付方式",
      fontColor: "blue",
      payKind: "payKind",
      params: {
        loanPurpose: "",
        payKind: "1"
      },
      loanBusiness: {},
      footerVal: "",
      infoDetail: {}
    };
  },
  // 父组件中返回要传给下级的数据
  // provide() {
  //   return {
  //     reload: {}
  //   };
  // },
  computed: {},
  async mounted() {
    const type = this.userBizType.bizType;
    const name = this.$route.name;

    if (this.bizId) {
      await this.setUserforDizDetail(this);
      this.params = this.userForBizDetail(name, type);
    }
    this.setScrollToPo({
      x: 0,
      y: 0,
      ratenum: Date.now(),
      tag: "nextFooter"
    });
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      const fieldOne = this.$refs.fieldOne.params;
      const fieldTwo = this.$refs.fieldTwo.params;
      this.loanBusiness = Object.assign({}, this.params, fieldOne, fieldTwo,this.detail);
    }
  },
  methods: {
    getSelect(data) {
      this.params.payKind = data[0].key;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.credit-wrapper {
  width: 100%;
  height: 100%;
  .definite-1-wrapper {
    width: 100%;
    height: 100%;

    .definite-field {
    }
    .definite-smalltitle {
      height: px2rem(24);
      line-height: px2rem(24);
      .definite-1-smalltitle2 {
        height: px2rem(40);
        line-height: px2rem(40);
      }
    }
    .definite-1-smalltitle2 {
      height: px2rem(40);
      line-height: px2rem(40);
    }
    .definite-1-field2 {
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
