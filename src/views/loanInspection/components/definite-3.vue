<!--
 * @Descripttion: 检查申请明细-3
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
    <!--填写信息  -->
    <div class="definte3" ref="definte3">
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
      <div class="subBox">
        <div class="submit">
          <mt-button type="primary" size="large">提交审批</mt-button>
          <mt-button size="large" @click="goback()">上一步</mt-button>
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
                  >检查人员（签字）：<span class="iconfont iconqianzi"></span
                ></span>
                <span class="right">2020-06-01</span>
              </div>
              <!-- <div id="canvas" ref="canvas"></div> -->
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
import { DetailsOfIOU, yesNo } from "../../../utils/dataMock";
import { Cell, Field, Button, Popup } from "mint-ui";
import almSelect from "../components/select";
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
      yesNo: yesNo,
      popupVisible: false,
      payType: 1,
      selectTitle: "是否存在风险预警信号",
      fontColor: "blue",
      existRisk: "existRisk",
      params: {
        existRisk: 1, // 是否存在风险预警信号
        riskMsg: "", // 预警信号说明
        suggest: "", // 建议
        signSrc: "" // 签名
      }
    };
  },
  mounted() {},
  methods: {
    getSelect: function(data) {
      this.params.existRisk = data.key;
    },
    goback: function() {
      history.go(-1);
    },
    goSign: function() {
      this.params.signSrc = "";
      this.popupVisible = true;
      this.lineCanvas({
        // el: this.$refs.canvas, //绘制canvas的父级div
        box: this.$refs.definte3, // 拿到宽度
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
          // this.cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          this.cxt.moveTo(
            e.changedTouches[0].clientX -
              e.target.offsetLeft +
              document.documentElement.scrollLeft,
            e.changedTouches[0].clientY -
              40 -
              e.target.offsetTop +
              document.documentElement.scrollTop
          );
        }.bind(this),
        false
      );
      //绘制中
      this.canvas.addEventListener(
        "touchmove",
        function(e) {
          // console.log(
          //   e.changedTouches[0].clientY,
          //   e.target.offsetLeft,
          //   document.documentElement.scrollLeft,
          //   e
          // );
          // this.cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          this.cxt.lineTo(
            e.changedTouches[0].clientX -
              e.target.offsetLeft +
              document.documentElement.scrollLeft,
            e.changedTouches[0].clientY -
              40 -
              e.target.offsetTop +
              document.documentElement.scrollTop
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
          this.params.signSrc = imgBase64;
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
          this.params.signSrc = imgBase64;
          console.log("图片", this.params.signSrc);
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
    nextFooter(val, oldval) {
      if (val !== oldval) {
        // 将数据存入vuex里的setDefinite3里
        this.setDefinite3({ params: this.params });
        this.setRoutineDefinite3({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";

.definte3 {
  width: 100%;
  height: 100%;
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
    height: px2rem(44);
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
    padding: 0 px2rem(16);
    background-color: #fff;
    border-bottom: px2rem(1) solid rgba(229, 229, 229, 1);
    .right {
      float: right;
    }
  }

  .subBox {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: px2rem(229);
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
        margin-bottom: px2rem(15);
      }
      .mint-button--default {
        background-color: rgba(209, 210, 212, 1);
        margin-bottom: px2rem(10);
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
@import "../../../assets/style/global.scss";
textarea {
  resize: none;
}
.definte3 {
  .mint-cell {
    min-height: px2rem(44);
  }
  .textFiled {
    .mint-cell-wrapper {
      padding: 0 px2rem(16);
    }
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
