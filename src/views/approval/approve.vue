<!--
 * @Descripttion: 
 * @Author: penglu
 * @Date: 2020-07-08 16:59:09
-->
<template lang="pug">
	.approve-wrapper(ref="processing2")
		.wrapper-content  
			components(:is="commpoentName" :nextPositionHandlersArr="nextPositionHandlersArr" ref="commpoent")
		.wrapper-operation
			.signBox
				span(class="left") {{signName}}人员（签字）：
				span(class="iconfont iconqianzi" @click="goSign")
			.qianming
				img(:src="params.empSign")
			.subBox
				.submit
					mt-button(type="primary" size="large" @click.native="submitApprove") 提交
					mt-button(size="large" @click.native="goback") 回退
					mt-button(size="large" @click.native="gobackLast") 退回上一岗位

		mt-popup(v-model="popupVisible" class="sign-content" popup-transition="popup-fade")
			.tanchaung
				.definite4
					.coInformation
						.enterpriseCredit(ref="scroll")
							.signBox
								span(class="left") {{signName}}人员（签字）：
								span(class="iconfont iconqianzi")
							canvas
						.submit
							button(id="clearCanvas" ref="clearCanvas" class="mint-button mint-button--default") 重置
							button(type="primary" id="saveCanvas" ref="saveCanvas" class="mint-button") 保存

			
		 
</template>
<script>
// processing26:审核;processing28:审核;processing213:审核；processing23:审核;processing210:审核;processing211:抽查;processing213:抽查复核
import { Button, Popup } from "mint-ui";
import BScroll from "@better-scroll/core";
import processing2 from "../approval/approve/processing2";
import processing21 from "../approval/approve/processing21";
import processing23 from "../approval/approve/processing23";
import processing25 from "../approval/approve/processing25";
import processing26 from "../approval/approve/processing26";
import processing27 from "../approval/approve/processing27";
import processing28 from "../approval/approve/processing28";
import processing29 from "../approval/approve/processing29";
import processing210 from "../approval/approve/processing210";
import processing211 from "../approval/approve/processing211";
import processing212 from "../approval/approve/processing212";
import processing213 from "../approval/approve/processing213";
import { approvalMixin, normalMixin } from "../../utils/mixin.js";
import { submitApprove } from "../../api/loanlnspection";
export default {
  components: {
    "mt-button": Button,
    "mt-popup": Popup,
    processing2,
    processing21,
    processing23,
    processing25,
    processing26,
    processing27,
    processing28,
    processing29,
    processing210,
    processing211,
    processing212,
    processing213
  },
  mixins: [approvalMixin, normalMixin],
  data() {
    return {
      bizId: this.$route.params.bizId,
      orgName: this.$route.params.orgName,
      postCode: this.$route.params.currPost,
      popupVisible: false,
      signName: "复核",
      commpoentName: "",
      handleP: [],
      nextPositionHandlersArr: [],
      params2: {
        bizId: this.$route.params.bizId,
        orgName: this.$route.params.orgName,
        postCode: this.$route.params.currPost,
        opType: "1"
      },
      params: {
        empSign: "" // 签名
      }
    };
  },
  async mounted() {
    this.init();
    this.routerMatch();
    //2，27，25，29 下一级处理人
    await this.setHandleParams(this);
    if (this.handleParams) {
      this.handleP = this.handleParams;
      this.handleParams.map(item => {
        this.nextPositionHandlersArr.push({
          key: item.emplCode,
          value: item.emplName
        });
      });
    }
  },
  watch: {
    nextFooter(val, oldval) {
      if (val.tag === "save") {
        this.params2.opType = "0";
        const params = Object.assign(
          {},
          this.$refs.commpoent.params,
          this.params2,
          this.params
        );
        this.submit2(params);
      }
    }
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {
        console.log("done");
      });
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    },
    async submitApprove() {
      this.params2.opType = "1";
      const params = Object.assign(
        {},
        this.$refs.commpoent.params,
        this.params2,
        this.params
      );
      console.log(params);

      await this.submit2(params);
    },
    async goback() {
      this.params2.opType = "2";
      const params = Object.assign(
        {},
        this.$refs.commpoent.params,
        this.params2,
        this.params
      );
      console.log(params);
      await this.submit2(params);
    },
    async gobackLast() {
      this.params2.opType = "3";
      const params = Object.assign(
        {},
        this.$refs.commpoent.params,
        this.params2,
        this.params
      );
      console.log(params);
      await this.submit2(params);
    },
    routerMatch() {
      //一级支行主管岗     321
      //一级支行第二经营主责任人  320
      //二级分行贷后管理岗        222
      //二级分行主管岗         221
      //二级分行第二经营主责任人   220
      const currPost = this.$route.params.currPost;
      const biggerThan500 = this.$route.params.biggerThan500;
      const belongBranch = this.$route.params.belongBranch;
      const type = this.$route.params.type;
      if (currPost === "321") {
        if (type === "m1" || type === "m3") {
          this.commpoentName = "processing2";
        } else if (type === "m2" || type === "m5") {
          this.commpoentName = "processing27";
        } else if (type === "m4") {
          this.commpoentName = "processing25";
        } else if (type === "m6") {
          this.commpoentName = "processing29";
        }
      } else if (currPost === "320") {
        if (biggerThan500 === 1) {
          if (type === "m1") {
            this.commpoentName = "processing2";
          } else if (type === "m2" || type === "m5") {
            this.commpoentName = "processing27";
          } else if (type === "m3") {
            this.commpoentName = "processing21";
          } else if (type === "m4") {
            this.commpoentName = "processing25";
          } else if (type === "m6") {
            this.commpoentName = "processing29";
          }
        } else {
          if (type === "m1" || type === "m3") {
            this.commpoentName = "processing23";
            this.signName = "审核";
          } else if (type === "m2" || type === "m5") {
            this.commpoentName = "processing28";
            this.signName = "审核";
          } else if (type === "m4") {
            this.commpoentName = "processing26";
            this.signName = "审核";
          } else if (type === "m6") {
            this.commpoentName = "processing210";
            this.signName = "审核";
          }
        }
      } else if (currPost === "222") {
        if (belongBranch === 1) {
          if (type === "m1" || type === "m3") {
            this.commpoentName = "processing2";
          } else if (type === "m2" || type === "m5") {
            this.commpoentName = "processing27";
          } else if (type === "m4") {
            this.commpoentName = "processing25";
          } else if (type === "m6") {
            this.commpoentName = "processing29";
          }
        } else {
          if (type === "m1" || type === "m3") {
            this.commpoentName = "processing213";
            this.signName = "审核";
          } else if (type === "m2" || type === "m5") {
            this.commpoentName = "processing210";
            this.signName = "审核";
          } else if (type === "m4") {
            this.commpoentName = "processing26";
            this.signName = "审核";
          } else if (type === "m6") {
            this.commpoentName = "processing210";
            this.signName = "审核";
          }
        }
      } else if (currPost === "221") {
        if (type === "m1" || type === "m3") {
          this.commpoentName = "processing2";
        } else if (type === "m2" || type === "m5") {
          this.commpoentName = "processing27";
        } else if (type === "m4") {
          this.commpoentName = "processing25";
        } else if (type === "m6") {
          this.commpoentName = "processing29";
        }
      } else if (currPost === "220") {
        if (type === "m1" || type === "m3") {
          this.commpoentName = "processing23";
          this.signName = "审核";
        } else if (type === "m2" || type === "m5") {
          this.commpoentName = "processing28";
          this.signName = "审核";
        } else if (type === "m4") {
          this.commpoentName = "processing26";
          this.signName = "审核";
        } else if (type === "m6") {
          this.commpoentName = "processing210";
          this.signName = "审核";
        }
      }
    },
    // 提交审批页面的保存（opType: "0"）、提交（opType: "1"）、回退（opType: "2"）、返回上一岗（opType: "3"）
    async submit2(params) {
      var message = "";
      if (params.opType === "0") {
        message = "保存";
      } else if (params.opType === "1") {
        message = "提交";
      } else if (params.opType === "2") {
        message = "回退";
      } else if (params.opType === "3") {
        message = "退回上一岗位";
      }
      this.$Indicator.open();
      await submitApprove(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          this.$Indicator.close();
          this.$Toast({
            message: message + "成功！",
            iconClass: "iconfont icongou-01",
            duration: 1000
          });
          if (
            params.opType === "1" ||
            params.opType === "2" ||
            params.opType === "3"
          ) {
            setTimeout(() => {
              this.$router.push({ name: "approvalIndex" });
            }, 1200);
          } else if (params.opType === "0") {
            setTimeout(() => {
              this.$MessageBox
                .confirm("回到列表页吗？")
                .then(action => {
                  if (action === "confirm") {
                    this.$router.push({ name: "approvalIndex" });
                  }
                  if (action === "cancel") {
                    return false;
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }, 1200);
          }
        } else {
          this.$Indicator.close();
          this.$Toast({
            message: message + "失败！",
            iconClass: "iconfont iconcha-01",
            duration: 5000
          });
        }
      });
    },
    goSign() {
      this.params.empSign = "";
      this.popupVisible = true;
      this.lineCanvas({
        // el: this.$refs.canvas, //绘制canvas的父级div
        box: this.$refs.processing2, // 拿到宽度
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
        true
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
        true
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
          this.params.empSign = imgBase64;
          setTimeout(() => {
            var c = document.getElementsByTagName("canvas")[0];
            c.innerHTML = "";
            this.popupVisible = false;
          }, 200);
        }.bind(this),
        true
      );
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../assets/style/global.scss";
.approve-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .wrapper-content {
    flex: 1;
  }
  .wrapper-operation {
    flex: 0 0 px2rem(350);
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
      .left {
        float: left;
      }
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
    .qianming {
      width: 100%;
      height: px2rem(120);
      text-align: center;
      background-color: #fff;
      img {
        width: px2rem(120);
        height: 100%;
        margin: 0 auto;
      }
      img[src=""],
      img:not([src]) {
        opacity: 0;
      }
    }
    .subBox {
      background-color: #fff;
      position: relative;
      width: 100%;
      height: px2rem(173);
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
  }
  .sign-content {
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
  }
}
</style>
