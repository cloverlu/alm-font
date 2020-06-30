<!--
 * @Descripttion: 检查申请明细-2
 * @Author: penglu
 * @Date: 2020-06-08 11:59:56
-->

<template lang="pug">
	.definite-2
		.definite-field
			.item
				span(class="tag" @click="Aaaa") 检查地点
				span(class="info") 
					input(v-model="params.checkAddr" type="input" class="field-input" placeholder="请输入检查地点")
			.item
				span(class="tag") 检查配合程度
				almSelect(:selectData="coordinate"  :defaultValue="params.cooperate" :triggerId="cooperate" :title="selectTitle" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
				span(class="iconfont iconxiala arrow")
			.item
				span(class="tag big") 生产经营场所变动情况生产经
				span(class="info")
					input(v-model="params.addrChangedMsg" type="input" class="field-input" placeholder="请输入生产经营场所变动情况")
			.item
				span(class="tag") 接待人员
				span(class="info")
					input(v-model="params.staff" type="input" class="field-input" placeholder="请输入接待人员")
		.definite-smalltitle
			span(class="colum-blue")
			span  检查内容
		.definite-2-field
			fieldOne(:definite="definite2Field" :info="params" :read="false" ref="fieldOne" )
		.definite-2-tag
			.tag ※注：
			.content 1、贷款发放如采用贷款人受托支付方式，信息来源包括《小企业授信业务额度借款支用单》、《小企业贷款受托支付申请书》、汇款凭证、账户流水、合同、入库单、贷款购买标的(如原材料、机器设备等)等。<br>2、贷款发放如采用借款人自主支付方式，信息来源包括《实际支付清单》、汇款凭证、合同、入库单、贷款购买标的( 如原材料、机器设备等)等。
		.definite-field(class="field2")
			.item
				span(class="big-max") 是否按合同约定的用途使用信贷资金
				almSelect(:selectData="yesNo"  :defaultValue="params.useAmoutByContract" :triggerId="useAmoutByContract" :title="selectTitle2" :fontColor="fontColor" @getSelectValue="getSelect" class="info" ) 
				span(class="iconfont iconxiala arrow")
			.item2
				fieldOne(:definite="definite2Field2"  :info="params" :read="false" ref="fieldTwo" )
		
				
</template>

<script>
import {
  definite2Field,
  definite2Field2,
  coordinate,
  yesNo
} from "../../../utils/dataMock.js";
import fieldOne from "../components/fieldOne";
import almSelect from "../components/select";
import { normalMixin, loanInsM1 } from "../../../utils/mixin";
export default {
  components: { almSelect, fieldOne },
  mixins: [normalMixin, loanInsM1],
  // props: {
  //   infoDetail: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },
  // inject: ["reload"],
  data() {
    return {
      bizId: this.$route.params.bizId,
      definite2Field: definite2Field,
      definite2Field2: definite2Field2,
      coordinate: coordinate,
      yesNo: yesNo,
      selectTitle: "检查配合程度",
      selectTitle2: "是否按合同约定的用途使用信贷资金",
      fontColor: "blue",
      useAmoutByContract: "useAmoutByContract",
      cooperate: "cooperate",
      parentsDraw: false,
      params: {
        cooperate: 1,
        useAmoutByContract: 1,
        checkAddr: "",
        addrChangedMsg: "",
        staff: ""
      }
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (from.name === "firstDefinite16") {
  //       console.log(vm.m1Definite2.params);
  //       vm.params = vm.m1Definite2.params;
  //     }
  //   });
  // },
  mounted() {
    // const params = this.m1Definite2.params;
    // const bizId = this.$route.params.bizId;
    // if (params.bizId === bizId) {
    //   this.params = this.m1Definite2.params;
    // }
    // 上一步下一步需要走的详情接口
    if (this.$route.params.saveFlag === 1) {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
      console.log(this.forBizDetail(this.$route.name));
      return false;
    } else {
      this.saveFlag.forEach(item => {
        if (item.currentName === this.$route.name && item.flag === true) {
          this.setforDizDetail(this);
          this.params = this.forBizDetail(this.$route.name);
          console.log(this.forBizDetail(this.$route.name));
          return false;
        }
      });
    }
  },
  computed: {},
  watch: {
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.params = Object.assign(
          {},
          this.params,
          this.$refs.fieldOne.params,
          this.$refs.fieldTwo.params
        );
        // this.setm1Definite2({ params: this.params });
        // this.footerRoute("loanCreditFirst", "firstDefinite2");
        // this.$router.push({ name: "firstDefinite16" });
      }
    },
    // 上一步回显
    // prevFooter(val, oldval) {
    //   const params = this.m1Definite2.params;
    //   this.params = params;
    // }
    infoDetail(val, oldval) {
      console.log(val);
    }
  },
  methods: {
    getSelect(data) {
      this.params.cooperate = data[0].key;
    },
    Aaaa() {
      // console.log(this.$store.state.creditFirst.definite1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
