<!--
 * @Descripttion: 新增 1
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="newly1-wrapper">
      <div class="newly1">
        <div class="companyInformation">
          <div class="formBody">
            <mt-cell
              class="textFiled"
              title="贷后检查模式"
              :value="detail.newly1.checkModel"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="授信金额"
              :value="detail.newly1.lineAmout"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="授信余额"
              :value="detail.newly1.lineBalance"
            ></mt-cell>
            <div class="item m6-item">
              <span class="tag">担保方式</span>
              <span class="info" v-if="detail.newly1.securityKind === '1'"
                >信用</span
              >
              <span class="info" v-else-if="detail.newly1.securityKind === '2'"
                >抵押</span
              >
              <span class="info" v-else-if="detail.newly1.securityKind === '3'"
                >质押</span
              >
              <span class="info" v-else-if="detail.newly1.securityKind === '4'"
                >保证</span
              >
              <span class="info" v-else-if="detail.newly1.securityKind === '5'"
                >其它</span
              >
            </div>
            <mt-field
              v-if="detail.newly1.securityKind === '5'"
              type="textarea"
              rows="1"
              v-model="detail.newly1.otherSecurityKindMsg"
              class="text"
              style="overflow:hidden"
              placeholder="其他"
              :disabled="true"
            ></mt-field>
            <mt-cell
              class="textFiled"
              title="还款方式"
              :value="detail.newly1.repayKind"
            ></mt-cell>
            <mt-cell
              class="textFiled"
              title="检查地点"
              :value="detail.newly1.checkAddr"
            ></mt-cell>
            <div class="item">
              <span class="tag">检查配合程度</span>
              <span class="info" v-if="detail.newly1.cooperate === '1'"
                >配合</span
              >
              <span class="info" v-else-if="detail.newly1.cooperate === '2'"
                >一般</span
              >
              <span class="info" v-else-if="detail.newly1.cooperate === '3'"
                >不配合</span
              >
            </div>
            <div class="item">
              <span class="tag">额度年检</span>
              <span class="info" v-if="detail.newly1.yearlyInspection === 0"
                >否</span
              >
              <span class="info" v-if="detail.newly1.yearlyInspection === 1"
                >是</span
              >
            </div>
            <div class="item">
              <span class="tag">押品重估</span>
              <span class="info" v-if="detail.newly1.revalOfColl === 0"
                >否</span
              >
              <span class="info" v-if="detail.newly1.revalOfColl === 1"
                >是</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <newly2 :detail="detail.newly2"></newly2>
    <newly3 :detail="detail.newly3"></newly3>
    <newly45 :detail="detail.newly45"></newly45>
    <definite16 :detail="detail.definite16"></definite16>
  </div>
</template>

<script>
import newly2 from "../m6/newly-2";
import newly3 from "../m6/newly-3";
import newly45 from "../m6/newly-45";
import definite16 from "../m6/definite-16";
import { normalMixin, approvalMixin } from "../../../../utils/mixin";

export default {
  components: {
    newly2,
    newly3,
    newly45,
    definite16
  },
  mixins: [normalMixin, approvalMixin],
  data() {
    const m6Imagelist = _ => {
      const m6Imagelist = {};
      for (let i = 0; i < 10; i++) {
        const a = `pic_${i + 1}s`;
        m6Imagelist[a] = [
          {
            url: "",
            longitude: "",
            dimension: ""
          }
        ];
      }
      return m6Imagelist;
    };
    return {
      bizId: this.$route.params.bizId,
      detail: {
        newly1: {},
        newly2: {},
        newly3: {},
        newly45: {},
        definite16: {}
      }
    };
  },
  computed: {},
  async mounted() {
    await this.setApproveDetail(this);
    this.detail = this.approveDetail(this.$route.params.type);
  },
  methods: {},
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    // nextFooter(val, oldval) {
    //   if (val !== oldval) {
    //     // 将数据存入vuex里的setDefinite12里
    //     this.setDefinite12({ params: this.params });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.newly1-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .companyInformation {
    width: 100%;
    box-sizing: border-box;
    margin-top: px2rem(-1);

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
        width: px2rem(120);
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
      background-color: #fff;
      .item {
        background-color: #fff;
        width: 100%;
        // height: px2rem(44);
        // line-height: px2rem(44);
        padding: px2rem(15) px2rem(16);
        display: flex;
        font-size: px2rem(14);
        box-sizing: border-box;
        border-top: px2rem(1) solid rgba(229, 229, 229, 1);
        &:last-child {
          border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
          // border: none;
          // padding: 0;
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

      .mint-cell {
        width: 100%;
        height: px2rem(44);
        background: rgba(255, 255, 255, 1);
        border-top: px2rem(1) solid rgba(229, 229, 229, 1);
        opacity: 1;

        &:last-of-type {
          // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../../../assets/style/global.scss";
.newly1 {
  width: 100%;
  height: 100%;
  .textFiled {
    .mint-cell-title {
      width: px2rem(150) !important;
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
