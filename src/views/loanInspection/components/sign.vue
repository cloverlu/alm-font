<template>
  <div>
    <div id="canvas" ref="canvas">
      <button id="clearCanvas" ref="clearCanvas">清除</button>
      <button id="saveCanvas" ref="saveCanvas">保存</button>
      <!-- <mt-button id="clearCanvas" type="default" ref="clearCanvas" size="small"
        >清除</mt-button
      >
      <mt-button id="saveCanvas" type="primary" ref="saveCanvas" size="small"
        >保存</mt-button
      > -->
    </div>
    <!-- <div class="mySign" v-show="isSign">
      <img :src="signSrc" alt="" />
    </div> -->
  </div>
</template>

<script>
import { Button } from "mint-ui";
export default {
  components: {
    // "mt-button": Button
  },
  data() {
    return {
      isSign: false,
      signSrc: ""
    };
  },
  created() {},
  mounted() {
    this.lineCanvas({
      el: this.$refs.canvas, //绘制canvas的父级div
      clearEl: this.$refs.clearCanvas, //清除按钮
      saveEl: this.$refs.saveCanvas //保存按钮
    });
  },
  methods: {
    lineCanvas(obj) {
      this.linewidth = 6;
      this.color = "#000000";
      this.background = "#ffffff";
      for (var i in obj) {
        this[i] = obj[i];
      }
      this.canvas = document.createElement("canvas");
      this.el.appendChild(this.canvas);
      this.cxt = this.canvas.getContext("2d");
      this.canvas.width = this.el.clientWidth;
      this.canvas.height = this.el.clientHeight;
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
        true
      );
      //绘制中
      this.canvas.addEventListener(
        "touchmove",
        function(e) {
          this.cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          this.cxt.stroke();
        }.bind(this),
        true
      );
      //结束绘制
      this.canvas.addEventListener(
        "touchend",
        function() {
          this.cxt.closePath();
          let imgBase64 = this.canvas.toDataURL();
          //console.log(imgBase64);
          this.signSrc = imgBase64;
          this.isSign = true;
        }.bind(this),
        true
      );
      //清除画布
      this.clearEl.addEventListener(
        "click",
        function() {
          this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }.bind(this),
        true
      );
      //保存图片，直接转base64
      this.saveEl.addEventListener(
        "click",
        function() {
          let imgBase64 = this.canvas.toDataURL();
          //console.log(imgBase64);
          this.signSrc = imgBase64;
          this.isSign = true;
          console.log("图片", this.signSrc);
        }.bind(this),
        true
      );
    }
  }
};
</script>

<style scoped lang="scss">
// @import "../../../assets/style/global.scss";
#canvas {
  width: 100%;
  height: px2rem(300);
  position: relative;
  canvas {
    display: block;
  }
  #clearCanvas {
    width: 20%;
    height: px2rem(40);
    line-height: px2rem(40);
    text-align: center;
    position: absolute;
    // font-size: px2rem(16);
    bottom: 0;
    left: 20%;
    border: 1px solid #dedede;
    z-index: 1;
    border-radius: px2rem(3);
  }
  #saveCanvas {
    width: 20%;
    height: px2rem(40);
    line-height: px2rem(40);
    text-align: center;
    position: absolute;
    // font-size: px2rem(16);
    bottom: 0;
    right: 20%;
    border: 1px solid #dedede;
    z-index: 1;
    border-radius: px2rem(3);
  }
}
// .mySign {
//   width: 100%;
//   height: px2rem(300);
//   img {
//     width: 100%;
//     height: px2rem(300);
//   }
// }
</style>
