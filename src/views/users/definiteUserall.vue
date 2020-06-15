<!--
 * @Descripttion: 检查申请明细，user部分所有的切换
 * @Author: penglu
 * @Date: 2020-06-12 15:15:05
-->
<template lang="pug">
.user-all
	.user-all-wrapper(v-if="hasUserAllChildRouter")
		.definite-1-title
			span(class="colum-blue")
			span(class="title") 张三有限责任公司
		.user-all-content
			.alwanys-content
				.definite-field
					.item
						span(class="tag") 检查类型
						almSelect(:selectData="bizTypes"  :defaultValue="params.bizType" :title="selectTitle" :triggerId="triggerId" :fontColor="fontColor" @getSelectValue="getUserSelect" class="info" ) 
						span(class="iconfont iconxiala arrow")
					.item
						span(class="tag") 借据编号
						span(class="info") {{this.$route.params.billNo}}
			.select-content
				definite1(v-if="params.bizType === 'm1'" ref="m1")
				definite12(v-if="params.bizType === 'm2'" ref="m2")
				newly18(v-if="params.bizType === 'm3'" ref="m3")
				definite14(v-if="params.bizType === 'm5'" ref="m5")
				newly1(v-if="params.bizType === 'm6'" ref="m6")
	router-view(v-else)



</template>

<script>
import almSelect from "../loanInspection/components/select";
import { bizTypes } from "../../utils/dataMock.js";
import definite1 from "../users/selectDefinite/definite1";
import definite12 from "../users/selectDefinite/definite-12";
import newly18 from "../users/selectDefinite/newly18";
import definite14 from "../users/selectDefinite/definite-14";
import newly1 from "../users/selectDefinite/newly-1";
import { loanInspectionMixin } from "../../utils/mixin";

export default {
  components: { almSelect, definite1, definite12, newly18, newly1, definite14 },
  mixins: [loanInspectionMixin],
  data() {
    return {
      hasUserAllChildRouter: this.$route.params.hasUserAllChildRouter,
      params: {
        bizType: "m1"
      },
      selectTitle: "检查类型",
      triggerId: "bizType",
      fontColor: "blue",

      bizTypes: bizTypes
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasUserAllChildRouter = to.name === "definiteUserAll";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasUserAllChildRouter = to.name === "definiteUserAll";
    next();
  },
  mounted() {
    //向vuex添加setBizType的值，以方便组件下一步的时候查看是选择了哪一个检查类型
    this.setBizType({ bizType: this.params.bizType });
  },
  methods: {
    getUserSelect(val) {
      this.params.bizType = val[0].key;
      //向vuex添加setBizType的值，以方便组件下一步的时候查看是选择了哪一个检查类型
      this.setBizType({ bizType: this.params.bizType });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.user-all {
  width: 100%;
  height: 100%;
  .user-all-content {
    .alwanys-content {
      .definite-field {
        .item {
          .tag {
            flex: 0 0 px2rem(100);
          }
        }
      }
    }
    .select-content {
      margin-top: px2rem(10);
    }
  }
}
</style>
