<!--
 * @Descripttion: 检查申请明细-13
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="definte13">
      <div class="companyInformation">
        <!-- <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coName">{{ DetailsOfIOU.orgName }}</span>
      </div> -->
        <div class="formBody">
          <mt-field
            class="textFiled"
            label="检查地点"
            v-model="params.checkAddr"
            placeholder="请输入"
          ></mt-field>
          <div class="item">
            <span class="tag">检查配合程度</span>
            <almSelect
              :selectData="coordinate"
              :defaultValue="params.cooperate"
              :triggerId="cooperate"
              :title="selectTitle"
              :fontColor="fontColor"
              @getSelectValue="getSelect"
              class="info"
            ></almSelect>
            <span class="iconfont iconxiala arrow"></span>
          </div>
          <mt-field
            class="textFiled"
            label="生产经营场所变动情况"
            placeholder="请输入"
            v-model="params.addrChangedMsg"
          ></mt-field>
          <mt-field
            class="textFiled"
            label="接待人员"
            placeholder="请输入"
            v-model="params.staff"
          ></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { coordinate } from "../../../utils/dataMock";
import almSelect from "../components/select";
import { normalMixin, userMixin } from "../../../utils/mixin";
export default {
  components: { almSelect },
  mixins: [normalMixin, userMixin],
  props: ["uBizId"],
  data() {
    return {
      bizId: this.$route.params.bizId || this.uBizId,
      coordinate: coordinate,
      cooperate: "cooperate",
      popupVisible: false,
      payType: 1,
      selectTitle: "检查配合程度",
      fontColor: "blue",
      params: {
        checkAddr: "",
        cooperate: "1",
        addrChangedMsg: "",
        staff: ""
      },
      loanBusiness: {}
    };
  },
  mounted() {
    const moduleName = this.$route.params.moduleName;
    const name = this.$route.name;
    const type = this.userBizType.bizType;
    // 上一步下一步需要走的详情接口
    if (moduleName === "custmer") {
      const billNo = this.$route.params.billNo;
      if (this.bizId) {
        this.userMountedTag(type, billNo, name);
      }
    } else {
      const flag = this.$route.params.saveFlag;
      this.mountedTag(flag, name, this.$route.params.bizId);
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        this.loanBusiness = this.params;
      }
    }
  },
  methods: {
    getSelect(data) {
      this.params.cooperate = data[0].key;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";

.companyInformation {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;

  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    .lightBlue {
      position: absolute;
      display: inline-block;
      width: px2rem(3);
      height: px2rem(17);
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
      height: px2rem(23);
      width: px2rem(120);
      line-height: px2rem(20);
      top: 50%;
      left: 21%;
      transform: translate(-50%, -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }
  .formBody {
    .item {
      background-color: #fff;
      width: 100%;
      height: px2rem(44);
      line-height: px2rem(44);
      padding: 0 px2rem(16);
      display: flex;
      font-size: px2rem(14);
      box-sizing: border-box;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      &:last-child {
        border: none;
        padding: 0;
      }
      .tag {
        // font-family: Source Han Sans CN;
        // font-weight: bolder;
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
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
}
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";
.definte13 {
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
