<!--
 * @Descripttion: 检查申请明细-12
 * @Author: sunhua
 * @Date: 2020-06-05 9:03:54
-->
<template>
  <div class="checkDetail">
    <div class="definte12-wrapper">
      <!-- 公司信息 -->
      <div class="companyInformation">
        <div class="formBody">
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
  </div>
</template>

<script>
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  mixins: [normalMixin, userMixin],
  props: ["detail", "uBizId"],
  data() {
    return {
      bizId: this.uBizId,
      params: {
        requireCheck: "", // 审批意见要求
        checked: "", // 审批意见落实情况
        specialRequireCheck: "", // 产品贷后要求
        specialChecked: "", // 产品贷后落实情况
        holdPensonRisk: "", // 实际控制人或法定代表人风险点
        managerRisk: "", // 管理层风险点
        otherRisk: "", // 其他风险点
        lineAmout: ""
      },
      loanBusiness: {}
    };
  },
  async mounted() {
    const type = this.userBizType.bizType;
    const name = this.$route.name;

    if (this.bizId) {
      await this.setUserforDizDetail(this);
      this.params = this.userForBizDetail(name, type);
    }
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
			this.loanBusiness = Object.assign({},this.detail,this.params);
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
    height: px2rem(23);
    font-size: px2rem(14);
    // font-family: Source Han Sans CN;
    // font-weight: bold;
    line-height: px2rem(20);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    margin: px2rem(8) px2rem(17) px2rem(-8);
  }

  .formTitle {
    background-color: #f7f7f7;
    width: 100%;
    height: px2rem(44);
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
      padding: 0 px2rem(16);
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
