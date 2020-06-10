<!--
 * @Descripttion: 新增 1-2
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="newly2">
      <div class="coInformation">
        <div class="title">客户资信情况检查</div>
        <div class="formTitle1">
          <span class="lightBlue"></span>
          <span class="coName">客户资信检查</span>
        </div>

        <div class="formBody">
          <mt-field
            class="textFiled"
            label="征信报告查询日期"
            placeholder="2020-06-02"
          ></mt-field>
          <mt-cell
            class="textFiled"
            title="当前企业及实际控制人征信情况(注明征信查询分类结果)"
          ></mt-cell>
        </div>

        <mt-field
          type="textarea"
          rows="3"
          v-model="params.fiveClass"
          class="textArea"
          style="overflow:hidden"
          placeholder="征信情况xxxxxxxx..."
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主征信是否有新增逾期记录</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.addedOverdues"
            :triggerId="addedOverdues"
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
          v-model="params.addedOverduesMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体为：xxxx"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行新增贷款</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.addedLoans"
            :triggerId="addedLoans"
            :title="selectTitle2"
            :fontColor="fontColor"
            @getSelectValue="getSelect2"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.addedLoansMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体为：xxxx"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有他行收缩贷款规模</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.shrinkLoanScale"
            :triggerId="shrinkLoanScale"
            :title="selectTitle3"
            :fontColor="fontColor"
            @getSelectValue="getSelect3"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.shrinkLoanScaleMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体为：xxxx"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有新增对外担保记录</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.addedGuarantees"
            :triggerId="addedGuarantees"
            :title="selectTitle4"
            :fontColor="fontColor"
            @getSelectValue="getSelect4"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.addedGuaranteesMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体为：xxxx"
        ></mt-field>
        <div class="item">
          <span class="tag">企业或企业主是否有其他异常变化</span>
          <almSelect
            :selectData="yesNo"
            :defaultValue="params.otherSitu"
            :triggerId="otherSitu"
            :title="selectTitle5"
            :fontColor="fontColor"
            @getSelectValue="getSelect5"
            class="info"
          ></almSelect>
          <span class="iconfont iconxiala arrow"></span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.otherSituMsg"
          class="textArea"
          style="overflow:hidden"
          placeholder="具体为：xxxx"
        ></mt-field>

        <div class="formTitle">
          <span class="lightBlue"></span>
          <span class="coName">检查要点小结</span>
        </div>
        <mt-field
          type="textarea"
          rows="3"
          v-model="params.summaryForCheck"
          class="textArea"
          style="overflow:hidden"
          placeholder="xxxx"
        ></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailsOfIOU, yesNo } from "../../../utils/dataMock";
import { Cell, Field } from "mint-ui";
import almSelect from "../components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      yesNo: yesNo,
      addedOverdues: "addedOverdues",
      addedLoans: "addedLoans",
      shrinkLoanScale: "shrinkLoanScale",
      addedGuarantees: "addedGuarantees",
      otherSitu: "otherSitu",
      popupVisible: false,
      payType: 1,
      fontColor: "blue",
      selectTitle1: "企业或企业主征信是否有新增逾期记录",
      selectTitle2: "企业或企业主是否有他行新增贷款",
      selectTitle3: "企业或企业主是否有他行收缩贷款规模",
      selectTitle4: "企业或企业主是否有新增对外担保记录",
      selectTitle5: "企业或企业主是否有其他异常变化",
      params: {
        fiveClass: "", // 当前企业及实际控制人征信情况（注明征信查询分类结果)
        addedOverdues: 0, // 企业或企业主征信是否有新增逾期记录  客户资信检查
        addedOverduesMsg: "", // 当前企业及实际控制人征信情况 说明
        addedLoans: 0, // 企业或企业主是否有他行新增贷款  客户资信检查
        addedLoansMsg: "", // 企业或企业主是否有他行新增贷款情况 说明
        shrinkLoanScale: 0, // 企业或企业主是否有他行收缩贷款规模  客户资信检查
        shrinkLoanScaleMsg: "", // 企业或企业主是否有他行收缩贷款规模 说明
        addedGuarantees: 0, // 企业或企业主是否有新增对外担保记录  客户资信检查
        addedGuaranteesMsg: "", // 企业或企业主是否有新增对外担保记录 说明
        otherSitu: 0, // 企业或企业主是否有其他异常变化  客户资信检查
        otherSituMsg: "" // 企业或企业主是否有其他异常变化 说明
      }
    };
  },
  methods: {
    getSelect1(data) {
      this.params.addedOverdues = data.key;
    },
    getSelect2(data) {
      this.params.addedLoans = data.key;
    },
    getSelect3(data) {
      this.params.shrinkLoanScale = data.key;
    },
    getSelect4(data) {
      this.params.addedGuarantees = data.key;
    },
    getSelect5(data) {
      this.params.otherSitu = data.key;
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite5里
        this.setDefinite5({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.coInformation {
  width: 100%;
  box-sizing: border-box;
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

  .formTitle1 {
    width: 100%;
    height: px2rem(34);
    position: relative;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
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
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    &:last-child {
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      // border: none;
      // padding: 0;
    }
    .tag {
      flex: 0 0 px2rem(250);
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

  .formBody {
    background-color: #fff;
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

    .mint-cell {
      width: 100%;
      height: px2rem(44);
      background: rgba(255, 255, 255, 1);
      border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      opacity: 1;

      &:last-of-type {
        border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      }
    }
  }
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
}
</style>

<style lang="scss">
@import "../../../assets/style/global.scss";
.newly2 {
  width: 100%;
  height: 100%;
  .textFiled {
    .mint-cell-title {
      width: px2rem(200) !important;
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
