<!--
 * @Descripttion: 新增 1-9
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly9">
      <div class="coInformation">
        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">存货</span>
        </div>
        <mt-cell
          class="textFiled"
          title="客户名称"
          :value="detail.custName"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="贷款金额"
          :value="detail.loanAmout"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="贷款余额"
          :value="detail.loanBalance"
        ></mt-cell>
        <mt-cell
          class="textFiled"
          title="贷款期限"
          :value="detail.loanLength"
        ></mt-cell>
        <mt-field
          class="textFiled"
          label="还款方式"
          v-model="detail.repayKind"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="还款日期"
          v-model="detail.repayDate"
        ></mt-field>
        <mt-field
          class="textFiled"
          label="还款金额"
          v-model="detail.repayAmout"
        ></mt-field>
      </div>
      <definite7 :detail="detail.definite7"></definite7>
      <div class="definite-smalltitle">
        <span class="colum-blue"></span>
        <span>影像维护</span>
      </div>
      <div class="definite-13-content">
        <imageUpload
          v-for="item in imageList"
          :key="item.id"
          :item="item"
          :itemVmodel="detail.imagelist"
        ></imageUpload>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Cell } from "mint-ui";
import definite7 from "../m4/definite-7";
import imageUpload from "../../../loanInspection/components/imageUpload";

export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    definite7,
    imageUpload
  },
  data() {
    return {
      imageList: [
        {
          id: 0,
          text: "其它",
          vModel: "m4_0",
          vId: "m40"
        }
      ],
      params: {
        bizType: "小企业授信业务还款资金落实情况检查", // 检查类型
        custName: "王健林", // 客户名称
        loanAmout: "1000000000", // 贷款金额
        loanBalance: "999999", // 贷款余额
        loanLength: "2040-08-25", // 贷款期限
        repayKind: "", // 还款方式
        repayDate: "", // 还款日期
        repayAmout: "", // 还款金额
        definite7: {
          stageData: [
            // 还款资金落实阶段数组
            {
              checkStage: 1, // 检查阶段
              payIntention: 1, // 还款意愿
              practicableCheckAddr: "", // 检查地点
              practicableStaff: "xx", // 接待人员
              amoutSource: "xc", // 还款资金来源
              expectRepayDate: "2040-08-25", // 预计还款/付息时间
              practicableMsg: "xxx" // 还款资金落实情况说明
            }
          ]
        },
        imagelist: {
          pic_1s: [
            {
              dimension: "",
              longitude: "",
              url: ""
            }
          ]
        }
      }
    };
  },
  computed: {
    detail() {
      const newDetail = this.params;
      console.log(newDetail);
      return newDetail;
    }
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/style/global.scss";
.coInformation {
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
      // left: 21%;
      transform: translate(px2rem(16), -50%);
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
      transform: translate(px2rem(26), -50%);
      font-size: px2rem(15);
      // font-family: Source Han Sans CN;
      // font-weight: bold;
      color: rgba(113, 113, 113, 1);
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
.definite-smalltitle {
  width: 100%;
  height: px2rem(44);
  line-height: px2rem(44);
}
.definite-13-content {
  width: 100%;
  min-height: px2rem(123);
  background-color: #fff;
}
</style>

<style lang="scss">
@import "../../../../assets/style/global.scss";
textarea {
  resize: none;
}
.newly9 {
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
