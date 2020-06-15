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
            <mt-field
              class="textFiled"
              label="贷后检查模式"
              v-model="params.checkModel"
            ></mt-field>
            <mt-field
              class="textFiled"
              label="授信金额"
              v-model="params.lineAmout"
            ></mt-field>
            <mt-field
              class="textFiled"
              label="授信余额"
              v-model="params.lineBalance"
            ></mt-field>
            <div class="item">
              <span class="tag">担保方式</span>
              <almSelect
                :selectData="securityKindsArr"
                :defaultValue="params.securityKind"
                :triggerId="securityKind"
                :title="selectTitle"
                :fontColor="fontColor"
                @getSelectValue="getSelect1"
                class="info"
              ></almSelect>
              <span class="iconfont iconxiala arrow"></span>
            </div>
            <mt-field class="textFiled" label="其他xxxx"></mt-field>
            <mt-field
              class="textFiled"
              label="还款方式"
              v-model="params.repayKind"
            ></mt-field>
            <mt-field
              class="textFiled"
              label="检查地点"
              v-model="params.practicableCheckAddr"
            ></mt-field>
            <div class="item">
              <span class="tag">检查配合程度</span>
              <almSelect
                :selectData="coordinate"
                :defaultValue="params.cooperate"
                :triggerId="cooperate"
                :title="selectTitle1"
                :fontColor="fontColor"
                @getSelectValue="getSelect2"
                class="info"
              ></almSelect>
              <span class="iconfont iconxiala arrow"></span>
            </div>
            <div class="item">
              <span class="tag">额度年检</span>
              <almSelect
                :selectData="yesNo"
                :defaultValue="params.yearlyInspection"
                :triggerId="yearlyInspection"
                :title="selectTitle2"
                :fontColor="fontColor"
                @getSelectValue="getSelect3"
                class="info"
              ></almSelect>
              <span class="iconfont iconxiala arrow"></span>
            </div>
            <div class="item">
              <span class="tag">押品重估</span>
              <almSelect
                :selectData="yesNo"
                :defaultValue="params.revalOfColl"
                :triggerId="revalOfColl"
                :title="selectTitle3"
                :fontColor="fontColor"
                @getSelectValue="getSelect4"
                class="info"
              ></almSelect>
              <span class="iconfont iconxiala arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DetailsOfIOU,
  coordinate,
  securityKindsArr,
  yesNo
} from "../../../utils/dataMock";
import almSelect from "../../loanInspection/components/select";
import { Field } from "mint-ui";
import { loanInspectionMixin } from "../../../utils/mixin";
export default {
  mixins: [loanInspectionMixin],
  components: { "mt-field": Field, almSelect },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      coordinate: coordinate,
      securityKindsArr: securityKindsArr,
      yesNo: yesNo,
      popupVisible: false,
      payType: 1,
      selectTitle: "担保方式",
      selectTitle1: "检查配合程度",
      selectTitle2: "额度年检",
      selectTitle3: "押品重估",
      securityKind: "securityKind",
      revalOfColl: "revalOfColl",
      cooperate: "cooperate",
      yearlyInspection: "yearlyInspection",
      fontColor: "blue",
      params: {
        checkType: "", // 检查类型
        checkModel: "", // 检查模式
        lineAmout: "", // 授信金额
        lineBalance: "", // 授信余额
        securityKind: 1, // 担保方式
        cooperate: 1, // 检查配合程度
        yearlyInspection: 1, // 额度年检
        revalOfColl: 1 // 押品重估
      }
    };
  },
  methods: {
    getSelect1(data) {
      this.params.securityKind = data.key;
    },
    getSelect2(data) {
      this.params.cooperate = data.key;
    },
    getSelect3(data) {
      this.params.yearlyInspection = data.key;
    },
    getSelect4(data) {
      this.params.revalOfColl = data.key;
    }
  },
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
@import "../../../assets/style/global.scss";
.newly1-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .companyInformation {
    width: 100%;
    box-sizing: border-box;

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
        height: px2rem(44);
        line-height: px2rem(44);
        padding: 0 px2rem(10);
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
@import "../../../assets/style/global.scss";
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
