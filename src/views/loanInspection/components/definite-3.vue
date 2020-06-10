<!--
 * @Descripttion: 检查申请明细-3
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="coInformation">
      <div class="enterpriseCredit">
        <!--营业收入 -->
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查结论及措施建议</span>
        </div>
        <div class="item1">
          <span class="tag">是否存在风险预警信号</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.existRisk"
            :triggerId="existRisk"
            :title="selectTitle"
            :fontColor="fontColor"
            @getSelectValue="getSelect"
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
          placeholder="riskMsg"
        ></mt-field>

        <mt-cell class="textFiled" title="检查结论及措施建议"></mt-cell>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.suggest"
          class="text"
          style="overflow:hidden"
          placeholder="suggest"
        ></mt-field>
        <div class="signBox">
          <span class="left"
            >检查人员（签字）：<span
              class="iconfont iconqianzi"
              @click="goSign()"
            ></span
          ></span>
          <span class="right">2020-06-01</span>
        </div>
      </div>
    </div>
    <div class="submit">
      <mt-button type="primary" size="large">提交审批</mt-button>
      <mt-button size="large" @click="goback()">上一步</mt-button>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, yesNo } from "../../../utils/dataMock";
import { Cell, Field, Button } from "mint-ui";
import almSelect from "../components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    "mt-button": Button,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      yesNo: yesNo,
      popupVisible: false,
      payType: 1,
      selectTitle: "是否存在风险预警信号",
      fontColor: "blue",
      existRisk: "existRisk",
      params: {
        existRisk: 1,
        riskMsg: "",
        suggest: ""
      }
    };
  },
  methods: {
    getSelect: function(data) {
      this.params.existRisk = data.key;
    },
    goback: function() {
      console.log("返回");
      this.$router.push("definite5");
    },
    goSign: function() {
      this.$router.push("definite4");
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite1里
        this.setDefinite3({ params: this.params });
        this.setRoutineDefinite3({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.checkDetail {
  position: relative;
  // height: px2rem(582);
  .coInformation {
    .title {
      // width: px2rem(60);
      height: px2rem(23);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      line-height: px2rem(20);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      margin: px2rem(6) px2rem(17) px2rem(-8);
    }

    .formTitle {
      width: 100%;
      height: px2rem(50);
      position: relative;
      .lightBlue {
        position: absolute;
        display: inline-block;
        width: px2rem(3);
        height: px2rem(14);
        top: 50%;
        left: px2rem(18);
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
        transform: translate(px2rem(26), -50%);
        font-size: px2rem(14);
        // font-family: Source Han Sans CN;
        // font-weight: bold;
        color: rgba(78, 120, 222, 1);
        opacity: 1;
      }
    }
    .mint-cell {
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }

    .text {
      font-size: px2rem(12);
      // font-family: Source Han Sans CN;
      // font-weight: 500;
      color: rgba(9, 9, 9, 1);
      opacity: 1;
    }

    .item1 {
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
        // font-family: Source Han Sans CN;
        // font-weight: bolder;
        width: px2rem(270);
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

    .signBox {
      height: px2rem(44);
      font-size: px2rem(14);
      // font-family: Source Han Sans CN;
      // font-weight: 500;
      line-height: px2rem(44);
      color: rgba(9, 9, 9, 1);
      opacity: 1;
      padding: 0 px2rem(15);
      background-color: #fff;
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      .right {
        float: right;
      }
    }
  }
  .submit {
    position: absolute;
    width: calc(100% - 30px);
    height: px2rem(200);
    bottom: px2rem(-290);
    padding-left: px2rem(15);
    .mint-button {
      width: px2rem(345);
      background-color: rgba(78, 120, 222, 1);
      font-size: px2rem(18);
      height: px2rem(44);
      color: rgba(255, 255, 255, 1);
      border-radius: px2rem(3);
      opacity: 1;
      margin-bottom: px2rem(15);
    }
    .mint-button--default {
      background-color: rgba(209, 210, 212, 1);
    }
  }
}
</style>

<style lang="scss">
textarea {
  resize: none;
}
</style>
