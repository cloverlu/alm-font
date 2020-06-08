<!--
 * @Descripttion: 流程1：检查申请明细-1
 * @Author: penglu
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
	.definite-1-wrapper
		.definite-1-title
			span(class="colum-blue")
			span(class="title") {{detail.custName}}
		.definite-1-field
			.item
				span(class="tag") 检查类型
				span(class="info") {{detail.bizType}}
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
				almSelect(:selectData="payTypes"  :defaultValue="payTypes[0].value" :title="selectTitle" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
				span(class="iconfont iconxiala arrow")
			.item
				span(class="tag") 约定用途
			.item
				mt-field(v-model="params.loanPurpose" class="textArea" type="textarea" rows="3" placeholder="请输入")
		.definite-1-title2
			span 填写信息
		.definite-1-smalltitle
			span(class="colum-blue")
			span  检查要求及落实情况
		.definite-1-field2
			fieldOne(ref="fieldOne")
		.definite-1-smalltitle2
			span(class="colum-blue")
			span  特殊要求及落实情况
		.definite-1-field2
			fieldOne(ref="fieldTwo")

		
</template>

<script>
import { definite1, payType } from "../../../utils/dataMock.js";
import almSelect from "../components/select";
import fieldOne from "../components/fieldOne";
import { loanInspectionMixin } from "../../../utils/mixin";

export default {
  mixins: [loanInspectionMixin],
  components: { almSelect, fieldOne },
  data() {
    return {
      detail: definite1,
      payTypes: payType,
      popupVisible: false,
      payType: 1,
      selectTitle: "贷款支付方式",
      fontColor: "blue",
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.definite-1-wrapper {
  width: 100%;
  height: 100%;
  .definite-1-title {
    width: 100%;
    height: px2rem(45);
    line-height: px2rem(45);
    padding: 0 px2rem(9) 0 px2rem(9);
    display: flex;
    .colum-blue {
      height: px2rem(17);
      @include columnBlue;
    }
    .title {
      color: #090909;
      font-size: px2rem(15);
      margin-left: px2rem(4);
    }
  }
  .definite-1-field {
    width: 100%;
    height: px2rem(338);
    background-color: #fff;
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    .item {
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      padding: 0 px2rem(16) 0 px2rem(16);
      display: flex;
      font-size: px2rem(14);
      box-sizing: border-box;
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      &:last-child {
        border: none;
        padding: 0;
      }
      .tag {
        flex: 0 0 px2rem(100);
        text-align: left;
        color: #090909;
      }
      .arrow {
        font-size: px2rem(14);
        color: #848484;
        margin-left: px2rem(3);
      }
      .info {
        flex: 1;
        text-align: right;
        color: #9f9f9f;
        .pay-type {
          width: 100%;
          height: px2rem(145);
          background-color: #fff;
          .item {
            width: 100%;
            height: px2rem(44);
            border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
            text-align: center;
            font-size: px2rem(14);
            justify-content: center;
            align-items: center;
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
  .definite-1-title2 {
    width: 100%;
    height: px2rem(37);
    line-height: px2rem(37);
    font-size: px2rem(15);
    padding-left: px2rem(17);
    box-sizing: border-box;
    @include fontColorBlack;
  }
  .definite-1-smalltitle,
  .definite-1-smalltitle2 {
    width: 100%;
    padding-left: px2rem(16);
    box-sizing: border-box;
    @include fontColorBlue;
    font-size: px2rem(14);
    display: flex;
    .colum-blue {
      height: px2rem(14);
      @include columnBlue;
      margin-right: px2rem(5);
    }
  }
  .definite-1-smalltitle {
    height: px2rem(24);
    line-height: px2rem(24);
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
</style>
