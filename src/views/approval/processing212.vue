<!--
 * @Descripttion: 流程处理2-12
 * @Author: sunhua
 * @Date: 2020-06-16 11:03:37
-->

<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="processing212" ref="processing212">
      <div class="formTitle">
        <span class="lightBlue"></span>
        <span class="coNameBlack">二级分行/一级分行抽查复核意见</span>
      </div>
      <div class="item1">
        <span class="tag1">是否同意检查结论</span>
        <almSelect
          :selectData="yesNo"
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
      <mt-cell class="textFiled" title="抽查复核意见及行动建议"></mt-cell>
      <mt-field
        type="textarea"
        rows="3"
        v-model="params.suggest"
        class="text"
        style="overflow:hidden"
        placeholder="请输入抽查复核意见及行动建议"
      ></mt-field>

      <div class="signBox">
        <span class="left"
          >抽查复核人员（签字）：<span
            class="iconfont iconqianzi"
            @click="goSign()"
          ></span
        ></span>
        <span class="right">2020-06-01</span>
      </div>
      <div class="subBox">
        <div class="submit">
          <mt-button type="primary" size="large" @click.native="submit()"
            >提交</mt-button
          >
          <mt-button size="large" @click.native="goback()">回退</mt-button>
          <mt-button size="large" @click.native="gobackLast()"
            >退回上一岗位</mt-button
          >
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="tanchaung">
        <div class="definite4">
          <!--填写信息  -->
          <div class="coInformation">
            <div class="enterpriseCredit">
              <div class="signBox">
                <span class="left"
                  >抽查复核人员（签字）：<span
                    class="iconfont iconqianzi"
                  ></span
                ></span>
                <span class="right">2020-06-01</span>
              </div>
              <canvas></canvas>
            </div>
          </div>
          <div class="submit">
            <button
              id="clearCanvas"
              ref="clearCanvas"
              class="mint-button mint-button--default"
            >
              重置
            </button>
            <button
              type="primary"
              id="saveCanvas"
              ref="saveCanvas"
              class="mint-button"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { DetailsOfIOU, yesNo } from "../../utils/dataMock";
import { Field, Cell, Button, Popup } from "mint-ui";
import almSelect from "../loanInspection/components/select";
export default {
  components: {
    "mt-cell": Cell,
    "mt-field": Field,
    "mt-button": Button,
    "mt-popup": Popup,
    almSelect
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      popupVisible: false,
      payType: 1,
      selectTitle1: "抽查人员",
      fontColor: "blue",
      yesNo: yesNo,
      agreeResult: "agreeResult",
      params: {
        agreeResult: 1, // 二级分行/一级分行抽查意见
        msg: "", // 二级分行/一级分行抽查意见说明
        suggest: "xxx", // 措施建议
        empSign: "" // 签名
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    to.params.hasRouterChild2 = to.name === "repaymentInspectionIndex";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.hasRouterChild2 = to.name === "repaymentInspectionIndex";
    next();
  },
  methods: {
    getSelect1: function(data) {
      this.params.agreeResult = data.key;
    },
    submit: function() {
      console.log(123);
    },
    goback: function() {
      console.log(123);
    },
    gobackLast: function() {
      console.log(123);
    },
    goSign: function() {
      this.params.empSign = "";
      this.popupVisible = true;
      this.lineCanvas({
        // el: this.$refs.canvas, //绘制canvas的父级div
        box: this.$refs.processing212, // 拿到宽度
        clearEl: this.$refs.clearCanvas, //清除按钮
        saveEl: this.$refs.saveCanvas //保存按钮
      });
    },
    lineCanvas(obj) {
      this.linewidth = 2;
      this.color = "#000000";
      this.background = "rgba(0, 0, 0, 0)";
      for (var i in obj) {
        this[i] = obj[i];
      }
      // this.canvas = document.createElement("canvas");
      this.canvas = document.getElementsByTagName("canvas")[0];
      // this.el.appendChild(this.canvas);
      this.cxt = this.canvas.getContext("2d");
      this.canvas.width = this.box.clientWidth;
      this.canvas.height = 400;
      this.cxt.fillStyle = this.background;
      this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.width);
      this.cxt.strokeStyle = this.color;
      this.cxt.lineWidth = this.linewidth;
      this.cxt.lineCap = "round";
      //开始绘制
      this.canvas.addEventListener(
        "touchstart",
        function(e) {
          this.cxt.beginPath();
          this.cxt.moveTo(
            e.changedTouches[0].pageX,
            e.changedTouches[0].pageY - 40
          );
        }.bind(this),
        false
      );
      //绘制中
      this.canvas.addEventListener(
        "touchmove",
        function(e) {
          this.cxt.lineTo(
            e.changedTouches[0].pageX,
            e.changedTouches[0].pageY - 40
          );
          this.cxt.stroke();
        }.bind(this),
        false
      );
      //结束绘制
      this.canvas.addEventListener(
        "touchend",
        function() {
          this.cxt.closePath();
          let imgBase64 = this.canvas.toDataURL();
          //console.log(imgBase64);
          this.params.empSign = imgBase64;
        }.bind(this),
        false
      );
      //清除画布
      this.clearEl.addEventListener(
        "click",
        function() {
          this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }.bind(this),
        false
      );
      //保存图片，直接转base64
      this.saveEl.addEventListener(
        "click",
        function() {
          let imgBase64 = this.canvas.toDataURL();
          this.params.empSign = imgBase64;
          console.log("图片", this.params.empSign);
          setTimeout(() => {
            var c = document.getElementsByTagName("canvas")[0];
            c.innerHTML = "";
            this.popupVisible = false;
          }, 200);
        }.bind(this),
        false
      );
    }
  },
  watch: {
    // 监听是否点击了下一步，用vuex里的nextFooter属性
    // nextFooter(val, oldval) {
    //   if (val !== oldval) {
    //     // 将数据存入vuex里的setDefinite5里
    //     this.setDefinite5({ params: this.params });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/global.scss";
.processing212 {
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

  .signBox {
    height: px2rem(44);
    font-size: px2rem(14);
    line-height: px2rem(44);
    color: rgba(9, 9, 9, 1);
    opacity: 1;
    padding: 0 px2rem(16);
    background-color: #fff;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    border-top: px2rem(1) solid rgba(229, 229, 229, 1);
    margin-top: px2rem(-1);
    .right {
      float: right;
      // width: px2rem(109);
      // height: 14px;
      font-size: px2rem(14);
      // padding: px2rem(15);
      // line-height: 20px;
      color: rgba(159, 159, 159, 1);
      opacity: 1;
    }
  }
  .subBox {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: px2rem(173);
    margin-top: px2rem(100);
    .submit {
      position: absolute;
      width: calc(100% - 30px);
      // height: px2rem(200);
      bottom: px2rem(0);
      padding-left: px2rem(15);
      .mint-button {
        width: px2rem(345);
        background-color: rgba(78, 120, 222, 1);
        font-size: px2rem(18);
        height: px2rem(44);
        color: rgba(255, 255, 255, 1);
        border-radius: px2rem(3);
        opacity: 1;
        margin-bottom: px2rem(10);
      }
      .mint-button--default {
        background-color: rgba(209, 210, 212, 1);
        margin-bottom: px2rem(10);
      }
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
.tanchaung {
  width: px2rem(375);
  height: px2rem(500);
  .definite4 {
    position: relative;
    width: 100%;
    height: 100%;

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
      // border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
      border-top: px2rem(1) solid rgba(229, 229, 229, 1);
      .right {
        float: right;
        // width: px2rem(109);
        // height: 14px;
        font-size: px2rem(14);
        // padding: px2rem(15);
        // line-height: 20px;
        color: rgba(159, 159, 159, 1);
        opacity: 1;
      }
    }

    canvas {
      display: block;
    }
    .submit {
      position: absolute;
      width: 100%;
      // height: px2rem(200);
      // bottom: px2rem(-290);
      padding-left: px2rem(13);
      // padding-right: px2rem(15);
      .mint-button {
        display: inline-block;
        width: 45%;
        background-color: rgba(78, 120, 222, 1);
        font-size: px2rem(18);
        height: px2rem(44);
        color: rgba(255, 255, 255, 1);
        border-radius: px2rem(3);
        opacity: 1;
        margin-left: px2rem(15);
      }
      .mint-button--default {
        background-color: rgba(209, 210, 212, 1);
        margin-left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../assets/style/global.scss";

.processing212 {
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
