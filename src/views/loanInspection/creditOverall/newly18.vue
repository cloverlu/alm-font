<!--
 * @Descripttion: 新增1-8
 * @Author: penglu
 * @Date: 2020-06-10 11:30:49
-->

<template lang="pug">
	.credit-overall
		.newly-18(v-if="hasOverallChildRouter")
			.definite-1-title
				span(class="colum-blue")
				span(class="title") {{detail.custName}}
			.definite-field
				.item
					span(class="tag") 检查类型
					span(class="info") {{detail.bizTypeName}}
				.item
					span(class="tag") 授信金额
					span(class="info") 
						input(v-model="params.lineAmout" type="input" class="field-input" placeholder="请输入授信金额")
				.item
					span(class="tag") 贷款余额
					span(class="info") {{params.loanBalance}}
				.item(@click="popupVisible = !popupVisible")
					span(class="tag") 担保方式
					span(class="info sec") {{ securityKind }}
					span(class="iconfont iconxiala arrow")
				.item(class="input-item" v-if="securityKindTag")
					mt-field(v-model="params.otherSecurityKindMsg" class="textArea other-textArea" type="input"  placeholder="其他担保方式")
				.item
					span(class="tag") 还款方式
					span(class="info")
						input(v-model="params.repayKind" type="input" class="field-input" placeholder="请输入还款方式")
			.definite-1-title2
				span 填写信息
			.definite-smalltitle(class="blue-titile-one")
				span(class="colum-blue")
				span  审批意见中贷后日常检查要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1Field" :info="params" :read="false" ref="fieldOne" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  产品贷后日常检查特殊要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldSpecial" :info="params" :read="false" ref="fieldTwo" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  利率及综合金融服务的要求及落实情况
			.newly-18-field
				fieldOne(:definite="definite1FieldRate" :info="params" :read="false" ref="fieldThree" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  实际控制人或法定代表人风险点
			.newly-18-field(class="small-one")
				fieldOne(:definite="newly18One" :info="params" :read="false" ref="fieldFour" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  管理层风险点
			.newly-18-field(class="small-two")
				fieldOne(:definite="newly18Two" :info="params" :read="false" ref="fieldFive" )
			.definite-smalltitle(class="blue-titile-two")
				span(class="colum-blue")
				span  近期检查发现的其他风险点
			.newly-18-field(class="small-three")
				mt-field(v-model="params.otherRisk" class="textArea" type="textarea" rows="3" placeholder="请输入")
			definiteProp(:popupVisible="popupVisible" @change="changeProp" @checkData="checkData" :info="securityKindsArr" :defaultValue="params.securityKind")
		router-view(ref="m3rview" v-else)
</template>

<script>
import {
  newly18,
  securityKindsArr,
  definite1Field,
  newly18One,
  newly18Two,
  definite1FieldSpecial,
  definite1FieldRate
} from "../../../utils/dataMock.js";
import almSelect from "../components/select";
import fieldOne from "../components/fieldOne";
import { normalMixin } from "../../../utils/mixin";
import definiteProp from "../components/prop";
export default {
  components: { almSelect, fieldOne, definiteProp },
  mixins: [normalMixin],
  data () {
    return {
      bizId: this.$route.params.bizId,
      hasOverallChildRouter: this.$route.params.hasOverallChildRouter,
      detail: {},
      info: securityKindsArr,
      securityKindsArr: securityKindsArr,
      securityKind: "",
      popupVisible: false,
      definite1Field: definite1Field,
      definite1FieldSpecial: definite1FieldSpecial,
      definite1FieldRate: definite1FieldRate,
      newly18One: newly18One,
      newly18Two: newly18Two,
      selectTitle: "担保方式",
      fontColor: "blue",
			securityKindId: "securityKind",
			otherSecurityKindMsg:'',
      params: {
        loanBalance: "",
        lineAmout: "",
        securityKind: ["1"], // 担保方式
        otherSecurityKindMsg: "",
        repayKind: "",
        // requireCheck: "", //审批意见中贷后日常检查要求及落实情况
        // checked: "", //审批意见中贷后日常检查要求及落实情况
        // specialRequireCheck: "", //产品贷后日常检查特殊要求及落实情况
        // specialChecked: "", //产品贷后日常检查特殊要求及落实情况
        // rateAndIntfinSerCheck: "", // 利率及综合金融服务的要求及落实情况
        // rateAndIntfinSerChecked: "", // 利率及综合金融服务的要求及落实情况
        // HoldPensonRisk: "", //实际控制人或法定代表人风险点
        // managerRisk: "", //管理层风险点
        otherRisk: "" //近期检查发现的其他风险点
      }
    };
  },
  beforeRouteEnter (to, from, next) {
    to.params.hasOverallChildRouter = to.name === "creditOverallIndex";
    next();
  },
  beforeRouteUpdate (to, from, next) {
    this.hasOverallChildRouter = to.name === "creditOverallIndex";
    next();
    // 点击上一步回到当前页面的时候数据回显，这边只有每个流程的第一个页面需要
    if (from.name === "overalltDefinite13") {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
    }
  },
  computed: {
    securityKindTag () {
      if (
        this.params.securityKind &&
        typeof this.params.securityKind === "object"
      ) {
				const flag = this.params.securityKind.some(item => item === "5");
        if (flag) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  async mounted () {
    // 基本详情与流程详情的接口写在了vuex里
    //保存接口写在了Mixin里
    // 获取基本详情
    const currentName = this.$route.name;
    if (currentName === "creditOverallIndex") {
      await this.setqueryDetail(this);
      this.bizType(this.queryDetail, this.queryDetail.checkType);
      this.detail = this.queryDetail;

      //判断是否是已经填了部分
      if (
        this.$route.params.saveFlag === 1 ||
        this.$route.params.saveFlag === "1" ||
        this.tranSactName1.tranSactName1 === true
      ) {
        await this.setforDizDetail(this);
				this.params = this.forBizDetail(this.$route.name);
				const flag = this.params.securityKind.some(item => item === "5");
				if(flag && this.params.otherSecurityKindMsg){
					this.otherSecurityKindMsg = JSON.parse(JSON.stringify(this.params.otherSecurityKindMsg))
				}else{
					this.otherSecurityKindMsg =''
				}
        this.securityKindsF();
      } else {
				this.otherSecurityKindMsg =''
        this.securityKindsF();
      }
      //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
      this.setScrollToPo({
        x: 0,
        y: 0,
        ratenum: Date.now(),
        tag: "nextFooter"
      });
    }

  },
  watch: {
    nextFooter (val, oldval) {
      if (val !== oldval) {
        this.$Indicator.open();
        const currentName = this.$route.name;
        const type = this.$route.params.type;
        var loanBusiness = {};
        const bizId = {
          bizId: this.$route.params.bizId
        };
        if (currentName === "creditOverallIndex") {
          loanBusiness = Object.assign(
            {},
            this.params,
            this.$refs.fieldOne.params,
            this.$refs.fieldTwo.params,
            this.$refs.fieldThree.params,
            this.$refs.fieldFour.params,
            this.$refs.fieldFive.params,
            bizId
          );
          this.infoSave(loanBusiness, currentName, type, val.tag);
        } else if (currentName === "overalltDefinite3") {
          this.$nextTick(() => {
            loanBusiness = Object.assign(
              {},
              this.$refs.m3rview.loanBusiness,
              bizId
            );
            // 审批页面的保存走审批接口，只是传的对象不同
            this.submit(loanBusiness, currentName);
          });
        } else {
          this.$nextTick(() => {
            loanBusiness = Object.assign(
              {},
              this.$refs.m3rview.loanBusiness,
              bizId
            );
            console.log(loanBusiness)
            this.infoSave(loanBusiness, currentName, type, val.tag);
          });
        }
      }
    }
  },
  methods: {
    getSelect (val) {
      this.params.securityKind = val[0].key;
    },
    changeProp (val) {
      this.popupVisible = val;
    },
    checkData (val) {
      this.params.securityKind = val;
      this.securityKindsF();
    },
    securityKindsF () {
      var arr = [];
      if (
        this.params.securityKind &&
        typeof this.params.securityKind === "object"
      ) {
				const flag = this.params.securityKind.some(item => item === "5");
				
				if(flag){
					this.params.otherSecurityKindMsg = this.otherSecurityKindMsg
				}else{
					this.params.otherSecurityKindMsg = ''
				}
        this.securityKindsArr.map(item => {
          this.params.securityKind.map(item2 => {
            if (item2 === item.value) {
              arr.push(item.label);
            }
          });
				});
				
        this.securityKind = arr.join(",");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.credit-overall {
  width: 100%;
  height: 100%;
  .newly-18 {
    width: 100%;
    height: 100%;
    .definite-field {
      .input-item {
        padding: inherit;
        .other-textArea {
          height: px2rem(44);
        }
      }
    }
    .blue-titile-one {
      height: px2rem(24);
      line-height: px2rem(24);
    }
    .blue-titile-two {
      height: px2rem(44);
      line-height: px2rem(44);
    }
    .newly-18-field {
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
