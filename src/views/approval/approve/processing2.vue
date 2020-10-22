<!--
 * @Descripttion: 流程处理2
 * @Author: sunhua
 * @Date: 2020-06-16 11:03:37
-->

<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="processing2">
      <!-- <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coNameBlack">一级支行/二级分行检查情况</span>
      </div> -->
      <div class="item1">
        <span class="tag1">一级支行/二级分行复核意见</span>
        <almSelect
          :selectData="agreeOrNot"
          :defaultValue="params.agreeResult"
          :triggerId="agreeResult"
          :title="selectTitle1"
          :fontColor="fontColor"
          @getSelectValue="getSelect1"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.msg"
        class="text"
        style="overflow:hidden"
        placeholder="请输入理由"
      ></mt-field>
      <div class="item1">
        <span class="tag1">是否存在风险预警信号</span>
        <almSelect
          :selectData="yesNo"
          :defaultValue="params.existRisk"
          :triggerId="existRisk"
          :title="selectTitle2"
          :fontColor="fontColor"
          @getSelectValue="getSelect2"
          class="info"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>
      <mt-cell class="textFiled" title="预警信号说明"></mt-cell>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.riskMsg"
        class="text"
        style="overflow:hidden"
        placeholder="请输入预警信号说明"
      ></mt-field>
      <mt-cell class="textFiled" title="复核意见及行动建议"></mt-cell>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.suggest"
        class="text"
        style="overflow:hidden"
        placeholder="请输入复核意见及行动建议"
      ></mt-field>
      <div class="item">
        <span class="tag1">下一岗位处理人</span>
        <almSelect
          :selectData="nextPositionHandlersArr"
          :defaultValue="params.nextEmplCode"
          :triggerId="nextEmplCode"
          :title="selectTitle3"
          :fontColor="fontColor"
          @getSelectValue="getSelect3"
          class="info"
          v-if="selectData"
        ></almSelect>
        <span class="iconfont iconxiala arrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { yesNo, agreeOrNot } from "../../../utils/dataMock";
import { mapActions } from "vuex";
import almSelect from "../../loanInspection/components/select";
export default {
  components: {
    almSelect
  },

  props: ["nextPositionHandlersArr"],
  data() {
    return {
      selectData: false,
      popupVisible: false,
      payType: 1,
      selectTitle1: "一级支行/二级分行复核意见",
      selectTitle2: "是否存在风险预警信号",
      selectTitle3: "下一岗位处理人",
      fontColor: "blue",
      yesNo: yesNo,
      agreeOrNot: agreeOrNot,
      existRisk: "existRisk",
      agreeResult: "agreeResult",
      nextEmplCode: "nextEmplCode",
      params: {
        existRisk: 9, // 存在风险
        agreeResult: 9, // 一级支行/二级分行复核意见
        nextEmplCode: "", // 下一岗位处理人
        emplName: "",
        msg: "", // 一级支行/二级分行复核意见说明
        riskMsg: "", // 风险说明
        suggest: "" // 措施建议
      }
    };
  },

  mounted() {
    //刚进入页面时页面滑到了最底端，这个用了vuex进行页面的滑动
    this.setScrollToPo({
      x: 0,
      y: 0,
      ratenum: Date.now(),
      tag: "nextFooter"
    });
  },
  watch: {
    nextPositionHandlersArr(val, oldval) {
      if (val) {
        this.params.nextEmplCode = val[0].key;
        this.selectData = true;
      }
    }
  },
  methods: {
    ...mapActions(["setScrollToPo"]),
    getSelect1: function(data) {
      this.params.agreeResult = data[0].key;
    },
    getSelect2: function(data) {
      this.params.existRisk = data[0].key;
    },
    getSelect3: function(data) {
      this.params.nextEmplCode = data[0].key;
      this.params.emplName = data[0].value;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
.processing2 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .formTitle {
    width: 100%;
    height: px2rem(44);
    position: relative;
    background-color: #f7f7f7;
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
      transform: translate(px2rem(23), -50%);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(78, 120, 222, 1);
      opacity: 1;
    }
    .coNameBlack {
      position: absolute;
      display: inline-block;
      height: px2rem(23);
      width: 100%;
      line-height: px2rem(20);
      top: 50%;
      // left: 21%;
      transform: translate(px2rem(23), -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }
  }

  .mint-cell {
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-of-type {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    }
  }
  .item1 {
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
      width: px2rem(100);
      text-align: left;
      color: #090909;
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(44);
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
  .item {
    background-color: #fff;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    padding: 0 px2rem(16);
    display: flex;
    font-size: px2rem(14);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);

    .tag {
      width: px2rem(100);
      text-align: left;
      color: #090909;
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(44);
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
}
</style>

<style lang="scss">
// @import "../../../assets/style/global.scss";

.processing2 {
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
      width: px2rem(100) !important;
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
  .text {
    .mint-cell-value {
      .mint-field-core {
        text-align: left;
        color: #888;
        font-size: px2rem(14);
      }
    }
  }
}
</style>
