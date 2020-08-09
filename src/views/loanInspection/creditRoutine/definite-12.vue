<!--
 * @Descripttion: 检查申请明细-12
 * @Author: sunhua
 * @Date: 2020-06-05 9:03:54
-->
<template>
  <div class="checkDetail">
    <div class="definte12-wrapper" v-if="hasRouterChild2">
      <!-- 公司信息 -->
      <div class="companyInformation">
        <div class="definite-1-title">
          <span class="colum-blue"></span>
          <span class="title">{{ detail.custName }}</span>
        </div>
        <div class="formBody">
          <mt-cell
            class="textFiled"
            title="检查类型"
            :value="detail.bizTypeName"
          ></mt-cell>
          <mt-cell
            class="textFiled"
            title="客户名称"
            :value="detail.custName"
          ></mt-cell>
          <!-- <mt-cell
            class="textFiled"
            title="贷款余额"
            :value="detail.loanBalance"
          ></mt-cell> -->
          <mt-field
            class="textFiled"
            label="授信金额"
            placeholder="请输入"
            v-model="params.lineAmout"
          ></mt-field>

          <mt-cell
            class="textFiled"
            title="贷款余额"
            :value="detail.loanBalance"
          ></mt-cell>
        </div>
      </div>
      <!--填写信息  -->
      <div class="fillInInformation">
        <div class="title">填写信息</div>
        <div class="dailyCheck">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">审批意见中贷后日常检查要求及落实情况</span>
          </div>
          <div class="textarea">
            <mt-cell title="要求" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.requireCheck"
              class="text  textArea"
              style="overflow:hidden"
              placeholder="请输入审批意见中贷后日常检查要求"
            ></mt-field>
            <mt-cell title="落实情况" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.checked"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入落实情况"
            ></mt-field>
          </div>
        </div>

        <div class="specialRequirements">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">产品贷后日常检查特殊要求及落实情况</span>
          </div>
          <div class="textarea">
            <mt-cell title="要求" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.specialRequireCheck"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入产品贷后日常检查特殊要求"
            ></mt-field>
            <mt-cell title="落实情况" class="textFiled textUpTitle"></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.specialChecked"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入落实情况"
            ></mt-field>
          </div>
        </div>

        <div class="actualController">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">实际控制人或法定代表人风险点</span>
          </div>
          <div class="textarea">
            <mt-cell
              title="健康、 嗜好、家庭关系等方面"
              class="textFiled textUpTitle"
            ></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.holdPensonRisk"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入"
            ></mt-field>
          </div>
        </div>

        <div class="management">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">管理层风险点</span>
          </div>
          <div class="textarea">
            <mt-cell
              title="股权变化、关键管理人员变动、关联企业变动等，是否存在偏离主业、盲目扩张等问题"
              class="textFiled textUpTitle"
            ></mt-cell>
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.managerRisk"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入"
            ></mt-field>
          </div>
        </div>

        <div class="recentInspection">
          <div class="formTitle">
            <span class="lightBlue"></span>
            <span class="coName">近期检查发现的其他风险点</span>
          </div>
          <div class="textarea">
            <mt-field
              type="textarea"
              rows="3"
              v-model="params.otherRisk"
              class="text textArea"
              style="overflow:hidden"
              placeholder="请输入"
            ></mt-field>
          </div>
        </div>
      </div>
    </div>
    <router-view ref="m2rview" v-else></router-view>
  </div>
</template>

<script>
import { normalMixin } from "../../../utils/mixin";
export default {
  mixins: [normalMixin],
  data() {
    return {
      bizId: this.$route.params.bizId,
      hasRouterChild2: this.$route.params.hasRouterChild2,
      detail: {},
      params: {
        requireCheck: "", // 审批意见要求
        checked: "", // 审批意见落实情况
        specialRequireCheck: "", // 产品贷后要求
        specialChecked: "", // 产品贷后落实情况
        holdPensonRisk: "", // 实际控制人或法定代表人风险点
        managerRisk: "", // 管理层风险点
        otherRisk: "", // 其他风险点
        lineAmout: ""
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasRouterChild2 = to.name === "creditRoutineIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasRouterChild2 = to.name === "creditRoutineIndex";
    next();

    // 点击上一步回到当前页面的时候数据回显，这边只有每个流程的第一个页面需要
    if (from.name === "definite13") {
      this.setforDizDetail(this);
      this.params = this.forBizDetail(this.$route.name);
      console.log(this.params);
    }
  },
  async mounted() {
    // 基本详情与流程详情的接口写在了vuex里
    //保存接口写在了Mixin里
		// 获取基本详情
		const currentName = this.$route.name;
		if (currentName === "creditRoutineIndex") {
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
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        if (val !== oldval) {
          this.$Indicator.open();
          const currentName = this.$route.name;
          const type = this.$route.params.type;
          var loanBusiness = {};
          const bizId = {
            bizId: this.$route.params.bizId
          };
          if (currentName === "creditRoutineIndex") {
            loanBusiness = Object.assign({}, this.params, bizId);
            this.infoSave(loanBusiness, currentName, type, val.tag);
          } else if (currentName === "routineDefinite3") {
            this.$nextTick(() => {
              loanBusiness = Object.assign(
                {},
                this.$refs.m2rview.loanBusiness,
                bizId
              );
              // 审批页面的保存走审批接口，只是传的对象不同
              this.submit(loanBusiness, currentName);
            });
          } else {
            this.$nextTick(() => {
              loanBusiness = Object.assign(
                {},
                this.$refs.m2rview.loanBusiness,
                bizId
              );
              // console.log(loanBusiness);
              this.infoSave(loanBusiness, currentName, type, val.tag);
            });
          }
        }
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.companyInformation {
  width: 100%;
  box-sizing: border-box;

  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
      top: 50%;
      left: px2rem(10);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      left: 21%;
      transform: translate(-50%, -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }
  .formBody {
    .mint-cell {
      width: 100%;
      height: px2rem(44);
      background: rgba(255, 255, 255, 1);
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;
      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
}
.fillInInformation {
  .title {
    width: px2rem(60);
    font-size: px2rem(14);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    padding: px2rem(5) px2rem(15);
    box-sizing: border-box;
    width: 100%;
  }

  .formTitle {
    background-color: #f7f7f7;
    width: 100%;
    height: px2rem(30);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(14);
      top: 50%;
      left: px2rem(16);
      transform: translate(-50%, -50%);
      background: rgba(78, 120, 222, 1);
      opacity: 1;
      border-radius: px2rem(2);
    }
    .coName {
      position: absolute;
      display: inline-block;
      height: px2rem(14);
      width: 100%;
      line-height: px2rem(15);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(22), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
  }
  .textarea {
    .textUpTitle {
      height: px2rem(14);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: 700;
      line-height: px2rem(20);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    }
    .text {
      border: 0;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";
.definte12-wrapper {
  width: 100%;
  height: 100%;
  .mint-cell {
    min-height: px2rem(44);
  }
  .textFiled {
    .mint-cell-wrapper {
      padding: 0 px2rem(16) !important;
    }
    .mint-cell-title {
      width: px2rem(252) !important;
      font-size: px2rem(14);
    }
    .mint-cell-value {
      color: #888;
      font-size: px2rem(14);
      .mint-field-core {
        text-align: right;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
}
</style>
