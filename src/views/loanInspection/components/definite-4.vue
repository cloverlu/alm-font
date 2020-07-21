<!--
 * @Descripttion: 检查申请明细-4
 * @Author: sunhua
 * @Date: 2020-06-04 17:03:54
-->
<template>
  <div class="checkDetail">
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
          <div id="canvas" ref="canvas"></div>
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
</template>

<script>
import { DetailsOfIOU, yesNo } from "../../../utils/dataMock";
import { Button } from "mint-ui";
export default {
  components: {
    // "mt-button": Button
  },
  data() {
    return {
      DetailsOfIOU: DetailsOfIOU,
      params: {
        signSrc: ""
      }
    };
  },
  mounted() {
    this.lineCanvas({
      el: this.$refs.canvas, //绘制canvas的父级div
      clearEl: this.$refs.clearCanvas, //清除按钮
      saveEl: this.$refs.saveCanvas //保存按钮
    });
  },
  methods: {
    lineCanvas(obj) {
      this.linewidth = 2;
      this.color = "#000000";
      this.background = "rgba(0, 0, 0, 0)";
      for (var i in obj) {
        this[i] = obj[i];
      }
      this.canvas = document.createElement("canvas");
      this.el.appendChild(this.canvas);
      this.cxt = this.canvas.getContext("2d");
      this.canvas.width = this.el.clientWidth;
      this.canvas.height = 500;
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
          this.cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        }.bind(this),
        false
      );
      //绘制中
      this.canvas.addEventListener(
        "touchmove",
        function(e) {
          this.cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
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
            this.$router.push("definite3");
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
        // 将数据存入vuex里的setDefinite4里
        this.setDefinite4({ params: this.params });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style/global.scss";
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

  #canvas {
    width: 100%;
    height: px2rem(500);
    position: relative;
    canvas {
      display: block;
    }
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
</style>

<style lang="scss">
textarea {
  resize: none;
}
</style>
