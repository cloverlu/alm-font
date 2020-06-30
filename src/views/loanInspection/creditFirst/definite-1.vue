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
import { normalMixin, loanInsM1 } from "../../../utils/mixin";
import { unique } from "../../../utils/utils";
import {
  queryDetail,
  infoDetail,
  SaveEditModelBusiness
} from "../../../api/loanlnspection";

export default {
  mixins: [normalMixin, loanInsM1],
  components: { almSelect, fieldOne },
  data() {
    return {
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
  },
  computed: {},
  async mounted() {
    //判断是否是已经填了部分
    if (this.$route.params.saveFlag === 1) {
      await this.getInfoDetail(this.$route.params.bizId);
      this.params = this.forBizDetail(this.$route.name);
    } else {
      this.setSaveFlag([]);
    }

    this.getDetail(this.$route.params.bizId);

    //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
    this.setScrollToPo({ x: 0, y: 0 });
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.$Indicator.open();
        const currentName = this.$route.name;
        var loanBusiness = {};
        const bizId = {
          bizId: this.$route.params.bizId
        };
        if (currentName === "creditFirstIndex") {
          const fieldOne = this.$refs.fieldOne.params;
          const fieldTwo = this.$refs.fieldTwo.params;
          loanBusiness = Object.assign({}, this.params, fieldOne, fieldTwo);
          this.infoSave(loanBusiness, val.tag);

          // this.setm1Definite1({ params: loanBusiness });
        } else {
          this.$nextTick(() => {
            loanBusiness = Object.assign({}, this.$refs.rview.params, bizId);
            console.log(loanBusiness);
            this.infoSave(loanBusiness, val.tag);
            // console.log(this.$refs.rview.params);
          });
        }
      }
    }
    // 上一步回显
    // prevFooter(val, oldval) {
    //   console.log("prevFooter:" + this.$route.name);
    //   const name = this.$route.name;
    //   var params = {};
    //   if (name === "firstDefinite2") {
    //     params = this.m1Definite1.params;
    //     this.params = params;
    //   }
    //   // else if (name === "firstDefinite16") {
    //   //   params = this.m1Definite2.params;
    //   //   this.infoDetail = params;
    //   // } else if (name === "firstDefinite3") {
    //   //   params = this.m1Definite16.params;
    //   //   this.infoDetail = params;
    //   // }
    // }
  },
  methods: {
    // 保存
    async infoSave(loanBusiness, tag) {
      let res = await SaveEditModelBusiness(this, loanBusiness);
      if (res.status === 200 && res.data.returnCode === "200000") {
        this.$Indicator.close();
        this.$Toast({
          message: "保存成功！",
          iconClass: "iconfont icongou-01",
          duration: 1000
        });

        const currentName = this.$route.name;
        const type = this.$route.params.type;

        // 保存saveFlag
        const arr = [];
        const pa = {
          bizId: this.$route.params.bizId,
          currentName: currentName,
          flag: true
        };
        const saveFlags = this.saveFlag;
        saveFlags.push(pa);
        this.setSaveFlag(unique(saveFlags, "currentName"));

        if (tag === "nextFooter") {
          setTimeout(() => {
            this.footerRoute(type, currentName, loanBusiness);
          }, 1200);
        }
      } else {
        this.$Toast({
          message: "保存失败！",
          iconClass: "iconfont iconcha-01",
          duration: 5000
        });
      }
    },
    //获取详情
    getDetail(id) {
      const params = {
        bizId: id
      };
      queryDetail(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          if (res.data.data) {
            this.bizType(res.data.data, res.data.data.checkType);
            this.detail = res.data.data;
          }
        }
      });
    },
    //获取已填内容详情
    getInfoDetail(id) {
      const params = {
        bizId: id
      };
      infoDetail(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          if (res.data.data) {
            const params = res.data.data;
            // this.params = params;
          }
        }
      });
    },
    getSelect(data) {
      this.params.payKind = data[0].key;
    },
    aaa() {
      console.log(this.$refs.fieldOne.params);
      this.$router.push({
        name: "definite2"
      });
    },
    getScope(val) {
      console.log(val);
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
