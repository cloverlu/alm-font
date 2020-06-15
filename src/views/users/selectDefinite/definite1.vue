<!--
 * @Descripttion: 类型m1:小企业授信业务首次跟踪检查
 * @Author: penglu
 * @Date: 2020-06-12 15:34:53
-->

<template lang="pug">
.credit-wrapper
	.definite-1-wrapper
		.definite-field
			.item
				span(class="tag") 放款日期
				span(class="info") {{detail.billBeginDate}}
			.item
				span(class="tag") 贷款金额
				span(class="info") {{detail.billAmout}}
			.item
				span(class="tag") 贷款期限
				span(class="info") {{detail.billLength}}
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
			fieldOne(:definite="definite1Field" ref="fieldOne")
		.definite-smalltitle(class="definite-1-smalltitle2")
			span(class="colum-blue")
			span  特殊要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1Field" ref="fieldTwo")
</template>

<script>
import { definite1, payType, definite1Field } from "../../../utils/dataMock.js";
import almSelect from "../../loanInspection/components/select";
import fieldOne from "../../loanInspection/components/fieldOne";
import { loanInspectionMixin } from "../../../utils/mixin";

export default {
  mixins: [loanInspectionMixin],
  components: { almSelect, fieldOne },
  data() {
    return {
      detail: definite1,
      payTypes: payType,
      definite1Field: definite1Field,
      popupVisible: false,
      payType: 1,
      selectTitle: "贷款支付方式",
      fontColor: "blue",
      payKind: "payKind",
      params: {
        loanPurpose: "",
        payKind: 1
      }
    };
  },

  computed: {},
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite1里
        this.setDefinite1({ params: this.params });
      }
    }
  },

  mounted() {},
  methods: {
    getSelect(data) {
      this.params.payKind = data.key;
    },
    aaa() {
      console.log(this.$refs.fieldOne.params);
      this.$router.push({
        name: "definite2"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.credit-wrapper {
  width: 100%;
  height: 100%;
  .definite-1-wrapper {
    width: 100%;
    height: 100%;

    .definite-field {
      height: px2rem(294);
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
      height: px2rem(236);
      background-color: #fff;
    }
  }
}
</style>
