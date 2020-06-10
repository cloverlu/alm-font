<!--
 * @Descripttion: 
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!-- 公司信息 -->
    <div class="companyInformation">
      <div class="formBody">
        <mt-field
          class="textFiled"
          label="检查类型"
          v-model="params.checkType"
        ></mt-field>
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
            :selectData="coordinate"
            :defaultValue="params.securityKind"
            :triggerId="securityKind"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
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
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <div class="item">
          <span class="tag">额度年检</span>
          <almSelect
            :selectData="coordinate"
            :defaultValue="params.yearlyInspection"
            :triggerId="yearlyInspection"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <div class="item">
          <span class="tag">押品重估</span>
          <almSelect
            :selectData="coordinate"
            :defaultValue="params.revalOfColl"
            :triggerId="revalOfColl"
            :title="selectTitle3"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, coordinate } from "../../../utils/dataMock";
import almSelect from "../components/select";
import { Field } from "mint-ui";
export default {
  components: { "mt-field": Field, almSelect },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      coordinate: coordinate,
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
        yearlyInspection: "", // 额度年检
        revalOfColl: "" // 押品重估
      }
    };
  },
  methods: {
    getSelect(data) {
      this.params.cooperate = data.key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
      padding: 0 px2rem(10);
      display: flex;
      font-size: px2rem(14);
      box-sizing: border-box;
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      &:last-child {
        border: none;
        padding: 0;
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
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
}
</style>
