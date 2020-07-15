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
				span(class="info") {{detail.definite1.loanDate}}
			.item
				span(class="tag") 贷款金额
				span(class="info") {{detail.definite1.billAmout}}
			.item
				span(class="tag") 贷款期限
				span(class="info") {{detail.definite1.billLength}}
			.item
				span(class="tag") 贷款支付方式
				span(class="info" v-if="detail.definite1.payKind === '1'") 贷款人受托支付
				span(class="info" v-else-if="detail.definite1.payKind === '2'") 借款人自主支付
				span(class="info" v-else-if="detail.definite1.payKind === '3'") 受托支付+自主支付
			.item
				span(class="tag") 约定用途
			.item(class="item-textarea")
				mt-field(v-model="detail.definite1.loanPurpose" class="textArea" type="textarea" rows="3" placeholder="请输入")
		.definite-1-title2
			span 填写信息
		.definite-smalltitle
			span(class="colum-blue")
			span  检查要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1Field" :info="detail.definite1" :read="true" ref="fieldOne")
		.definite-smalltitle(class="definite-1-smalltitle2")
			span(class="colum-blue")
			span  特殊要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1FieldSpecial" :info="detail.definite1" :read="true" ref="fieldTwo")
		definite2(:detail="detail.definite2")
		definite16(:detail="detail.definite16")
</template>

<script>
import {
  definite1,
  payType,
  definite1Field,
  definite1FieldSpecial
} from "../../../../utils/dataMock.js";
import fieldOne from "../../../loanInspection/components/fieldOne";
import { normalMixin, approvalMixin } from "../../../../utils/mixin";
import definite2 from "../m1/definite-2";
import definite16 from "../m1/definite-16";

export default {
  mixins: [normalMixin, approvalMixin],
  components: { fieldOne, definite2, definite16 },
  data() {
    return {
      bizId: this.$route.params.bizId,
      detail: {
        definite1: {},
        definite2: {},
        definite16: {}
      },
      definite: definite1,
      payTypes: payType,
      definite1Field: definite1Field,
      definite1FieldSpecial: definite1FieldSpecial,
      popupVisible: false
    };
  },

  computed: {},
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite1里
        // this.setDefinite1({ params: this.params });
      }
    }
  },

  async mounted() {
    await this.setApproveDetail(this);
    this.detail = this.approveDetail(this.$route.params.type);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.credit-wrapper {
  width: 100%;
  height: 100%;
  margin-top: px2rem(-1);
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
