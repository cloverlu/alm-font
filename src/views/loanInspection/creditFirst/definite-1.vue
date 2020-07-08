<!--
 * @Descripttion: 流程1：检查申请明细-1
 * @Author: penglu
 * @Date: 2020-06-04 17:03:54
-->
<template lang="pug">
.credit-wrapper
	.definite-1-wrapper(v-if="hasChildRouter1")
		.definite-1-title
			span(class="colum-blue")
			span(class="title") {{detail.custName}}
		.definite-field
			.item
				span(class="tag") 检查类型
				span(class="info") {{detail.bizTypeName}}
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
			fieldOne(:definite="definite1Field" :info="params" :read="false" ref="fieldOne")
		.definite-smalltitle(class="definite-1-smalltitle2")
			span(class="colum-blue")
			span  特殊要求及落实情况
		.definite-1-field2
			fieldOne(:definite="definite1FieldSpecial" :read="false" :info="params" ref="fieldTwo")
	router-view( ref="rview"  v-else)
</template>

<script>
import {
  definite1,
  payType,
  definite1Field,
  definite1FieldSpecial
} from "../../../utils/dataMock.js";
import almSelect from "../components/select";
import fieldOne from "../components/fieldOne";
import { normalMixin } from "../../../utils/mixin";

export default {
  mixins: [normalMixin],
  components: { almSelect, fieldOne },
  data() {
    return {
      bizId: this.$route.params.bizId,
      hasChildRouter1: this.$route.params.hasChildRouter1,
      detail: "",
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
        payKind: "1",
        bizId: this.$route.params.bizId
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

  beforeRouteEnter(to, from, next) {
    to.params.hasChildRouter1 = to.name === "creditFirstIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasChildRouter1 = to.name === "creditFirstIndex";
    next();

    // 点击上一步回到当前页面的时候数据回显，这边只有每个流程的第一个页面需要
    if (from.name === "firstDefinite2") {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
      console.log(this.params);
    }
  },
  computed: {},
  async mounted() {
    // 基本详情与流程详情的接口写在了vuex里
    //保存接口写在了Mixin里
    // 获取基本详情
    await this.setqueryDetail(this);
    this.bizType(this.queryDetail, this.queryDetail.bizType);
    this.detail = this.queryDetail;

    //判断是否是已经填了部分
    if (
      this.$route.params.saveFlag === 1 ||
      this.$route.params.saveFlag === "1"
    ) {
      await this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
    } else {
      this.setSaveFlag([]);
    }
    //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
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
      if (val !== oldval) {
        this.$Indicator.open();
        const currentName = this.$route.name;
        const type = this.$route.params.type;
        var loanBusiness = {};
        const bizId = {
          bizId: this.$route.params.bizId
        };
        if (currentName === "creditFirstIndex") {
          const fieldOne = this.$refs.fieldOne.params;
          const fieldTwo = this.$refs.fieldTwo.params;
          loanBusiness = Object.assign({}, this.params, fieldOne, fieldTwo);
          this.infoSave(loanBusiness, currentName, type, val.tag);
        } else if (currentName === "firstDefinite3") {
          this.$nextTick(() => {
            loanBusiness = Object.assign({}, this.$refs.rview.params, bizId);
            // 审批页面的保存走审批接口，只是传的对象不同
            this.submit(loanBusiness);
          });
        } else {
          this.$nextTick(() => {
            loanBusiness = Object.assign({}, this.$refs.rview.params, bizId);
            // console.log(loanBusiness);
            this.infoSave(loanBusiness, currentName, type, val.tag);
          });
        }
      }
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
@import "../../../assets/style/global.scss";
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
