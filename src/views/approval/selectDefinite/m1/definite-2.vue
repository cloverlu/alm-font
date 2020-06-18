<!--
 * @Descripttion: 检查申请明细-2
 * @Author: penglu
 * @Date: 2020-06-08 11:59:56
-->

<template lang="pug">
	.definite-2
		.definite-field
			.item
				span(class="tag") 检查地点
				span(class="info")  {{detail.checkAddr}}
			.item
				span(class="tag") 检查配合程度
				span(class="info")  {{detail.coordinate}}
			.item
				span(class="tag big") 生产经营场所变动情况
				span(class="info")  {{detail.addrChangedMsg}}
			.item
				span(class="tag") 接待人员
				span(class="info")  {{detail.staff}}
		.definite-smalltitle
			span(class="colum-blue")
			span  检查内容
		.definite-2-field
			fieldOne(:definite="definite2Field" :info="detail.fieldOne" ref="fieldOne" )
		.definite-2-tag
			.tag ※注：
			.content 1、贷款发放如采用贷款人受托支付方式，信息来源包括《小企业授信业务额度借款支用单》、《小企业贷款受托支付申请书》、汇款凭证、账户流水、合同、入库单、贷款购买标的(如原材料、机器设备等)等。<br>2、贷款发放如采用借款人自主支付方式，信息来源包括《实际支付清单》、汇款凭证、合同、入库单、贷款购买标的( 如原材料、机器设备等)等。
		.definite-field(class="field2")
			.item
				span(class="big-max") 是否按合同约定的用途使用信贷资金
				span(class="info" v-if="detail.useAmoutByContract === 0")  否
				span(class="info" v-if="detail.useAmoutByContract === 1")  是
			.item2
				fieldOne(:definite="definite2Field2" :info="detail.fieldTwo" ref="fieldTwo" )
		
				
</template>

<script>
import { definite2Field, definite2Field2 } from "../../../../utils/dataMock.js";
import fieldOne from "../../../loanInspection/components/fieldOne";
export default {
  components: { fieldOne },
  props: ["detail"],
  data() {
    return {
      definite2Field: definite2Field,
      definite2Field2: definite2Field2
    };
  },
  methods: {
    getSelect(data) {
      this.params.cooperate = data.key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.definite-2 {
  width: 100%;
  height: 100%;
  .definite-field {
    width: 100%;
  }
  .definite-smalltitle {
    height: px2rem(44);
    line-height: px2rem(44);
  }
  .definite-2-field {
    width: 100%;
    background-color: #fff;
  }
  .definite-2-tag {
    width: 100%;
    height: px2rem(179);
    padding: 0 px2rem(16) 0 px2rem(16);
    box-sizing: border-box;
    background-color: #fff;
    .tag,
    .content {
      font-size: px2rem(14);
      color: #9f9f9f;
      line-height: px2rem(15);
      letter-spacing: px2rem(2);
    }
    .tag {
      height: px2rem(30);
      line-height: px2rem(30);
    }
  }
  .field2 {
    width: 100%;
    margin-top: px2rem(10);
    .item {
      border: none;
    }
    .item2 {
      width: 100%;
      height: px2rem(118);
    }
  }
}
</style>
