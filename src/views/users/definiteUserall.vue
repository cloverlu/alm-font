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
			span(class="title") {{$route.params.custName}}
		.user-all-content
			.alwanys-content
				.definite-field
					.item
						span(class="tag") 检查类型
						almSelect(:selectData="bizTypes"  :defaultValue="params.bizType" :title="selectTitle" :triggerId="triggerId" :fontColor="fontColor" @getSelectValue="getUserSelect" class="info" ) 
						span(class="iconfont iconxiala arrow")
					.item
						span(class="tag") 借据编号
						span(class="info") {{$route.params.billNo}}
			.select-content
				definite1(v-if="params.bizType === 'm1'" :detail="detail" :uBizId="bizId" ref="mView")
				definite12(v-else-if="params.bizType === 'm2'" :detail="detail" :uBizId="bizId" ref="mView")
				newly18(v-else-if="params.bizType === 'm3'"  :detail="detail" :uBizId="bizId" ref="mView")
				newly19(v-else-if="params.bizType === 'm4'"  :detail="detail" :uBizId="bizId" ref="mView")
				definite14(v-else-if="params.bizType === 'm5'"  :detail="detail" :uBizId="bizId" ref="mView")
				newly1(v-else-if="params.bizType === 'm6'"  :detail="detail" :uBizId="bizId" ref="mView")
	router-view(v-else :uBizId="bizId" ref="userview")



</template>

<script>
import almSelect from "../loanInspection/components/select";
import { bizTypes } from "../../utils/dataMock.js";
import definite1 from "../users/selectDefinite/definite1";
import definite12 from "../users/selectDefinite/definite-12";
import newly18 from "../users/selectDefinite/newly18";
import definite14 from "../users/selectDefinite/definite-14";
import newly1 from "../users/selectDefinite/newly-1";
import newly19 from "../users/selectDefinite/newly-9";
import { userMixin, normalMixin } from "../../utils/mixin";
import { queryDetail } from "../../api/loanlnspection";

export default {
  components: {
    almSelect,
    definite1,
    definite12,
    newly18,
    newly1,
    definite14,
    newly19
  },
  mixins: [userMixin, normalMixin],
  data() {
    return {
      // bizId: this.userBizId.bizId || "",
      hasUserAllChildRouter: this.$route.params.hasUserAllChildRouter,
      params: {
        bizType: "m1"
      },
      selectTitle: "检查类型",
      triggerId: "bizType",
      fontColor: "blue",
      detail: {},

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
  computed: {
    bizId() {
      if (this.userBizId) {
        var bizId;
        const allTag = this.userBizType.bizType + this.$route.params.billNo;
        this.userBizId.map(item => {
          if (item.allTag === allTag) {
            bizId = item.bizId;
          }
        });
      }
      return bizId;
    }
  },
  mounted() {
    //向vuex添加setBizType的值，以方便组件下一步的时候查看是选择了哪一个检查类型

    if (this.userBizType.bizType) {
      this.params.bizType = this.userBizType.bizType;
    } else {
      const type = this.params.bizType;
      this.setBizType({ bizType: type });
    }
    this.getBaseDetail();
  },
  watch: {
    nextFooter(val, oldval) {
      const name = this.$route.name;
      const type = this.userBizType.bizType;
      const operate = val.tag;
      var params = {};
      var tag = {};
      console.log(name);
      console.log(type);
      this.$nextTick(() => {
        this.$Indicator.open();
        if (name === "definiteUserAll") {
          if (this.bizId) {
            tag = {
              bizId: this.bizId
            };
          } else {
            tag = {
              billNo: this.$route.params.billNo,
              bizType: type
            };
          }
          params = Object.assign({}, this.$refs.mView.loanBusiness, tag);
        } else if (
          name === "userFirstDefinite3" ||
          name === "userRoutineDefinite3" ||
          name === "userOveralltDefinite3" ||
          name === "userFastCreDefinite3" ||
          name === "userNewlyDefinite3"
        ) {
          const bizId = {
            bizId: this.bizId
          };
          params = Object.assign({}, this.$refs.userview.loanBusiness, bizId);
          // 审批页面的保存走审批接口，只是传的对象不同
          this.userSubmit(params);
          return false;
        } else if (name === "userReInsProcessing4") {
          const bizId = {
            bizId: this.bizId
          };
          params = Object.assign({}, this.$refs.userview.loanBusiness, bizId);
          delete params.imageList;
          const loanBusiness2 = Object.assign(
            {},
            this.$refs.userview.params2,
            bizId
          );
          const moduleName = this.$route.params.moduleName;
          // 两个接口并发，都成功后才走操作
          this.bindSave(params, loanBusiness2, moduleName);
        } else {
          const pa = {
            bizId: this.bizId
          };
          params = Object.assign({}, this.$refs.userview.loanBusiness, pa);
          // console.log(params);
        }
        this.userInfoSave(params, name, type, operate);
      });
    }
  },
  methods: {
    getUserSelect(val) {
      this.params.bizType = val[0].key;
      //向vuex添加setBizType的值，以方便组件下一步的时候查看是选择了哪一个检查类型
      this.setBizType({ bizType: this.params.bizType });
      this.getBaseDetail();
    },
    //基本详情
    getBaseDetail() {
      const params = {
        bizType: this.params.bizType,
        billNo: this.$route.params.billNo
      };
      queryDetail(this, { params }).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.detail = res.data.data;
        }
      });
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
            flex: 0 0 px2rem(85);
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
