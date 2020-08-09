<!--
 * @Descripttion: 
 * @Author: penglu
 * @Date: 2020-06-01 14:52:27
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    // 字体根据屏幕大小变化
    var documentElement = document.documentElement;

    function callback () {
      var clientWidth = documentElement.clientWidth;
      // 屏幕宽度大于780，不在放大
      clientWidth = clientWidth < 1200 ? clientWidth : 1200;
      documentElement.style.fontSize = clientWidth / 10 + "px";
    }

    document.addEventListener("DOMContentLoaded", callback);
    window.addEventListener(
      "orientationchange" in window ? "orientationchange" : "resize",
      callback
    );

    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      console.log("beforeunload");
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });

    window.addEventListener("load", () => {
      sessionStorage.removeItem('store')
    });

    // // 兼容Android，ios 键盘弹起时，把搜索的数据顶上去影响布局和搜索功能
    // var h = document.body.scrollHeight; // 用onresize事件监控窗口或框架被调整大小，先把一开始的高度记录下来
    // window.onresize = function() {
    //   // 如果当前窗口小于一开始记录的窗口高度，那就让当前窗口等于一开始窗口的高度
    //   if (document.body.scrollHeight < h) {
    //     document.body.style.height = h;
    //   }
    // };
    let startX, startY;

    document.addEventListener("touchstart", function (e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    });

    document.addEventListener("touchmove", function (e) {
      var moveX = e.touches[0].pageX;
      var moveY = e.touches[0].pageY;
      //因为上下滑动的时候多少左右会带一点横移呀
      //比较横移距离与垂直移动距离的大小，哪个大就是往哪个方向移动啊
      if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
        e.preventDefault();
      }

    }, { passive: false });
  },
  mounted () {
    // alert('app')
    // var params = {}
    // var userParams = {}
    // if (this.GetQueryValue("app") === 'youjie') {
    //   params = {
    //     emplName: this.GetQueryValue("userName"),
    //     orgCode: this.GetQueryValue("instId"),
    //     orgName: this.GetQueryValue("instName"),
    //   };
    //   userParams = {
    //     emplName: this.GetQueryValue("userName"),
    //     orgName: this.GetQueryValue("instName")
    //   }
    //   alert('appparam')
    //   alert(params.emplName)
    //   const token = this.GetQueryValue("token")
    //   sessionStorage.setItem('x-token', token)

    // } else {
    //   params = {
    //     emplName: "金林",
    //     orgCode: "12222",
    //     orgName: "南京"
    //   };
    //   userParams = {
    //     emplName: "金林",
    //     orgName: "南京"
    //   }
    // }
    // sessionStorage.setItem('userInfo', JSON.stringify(params))
    // sessionStorage.setItem('userUserInfo', JSON.stringify(userParams))
    // alert(sessionStorage.getItem("userInfo").emplName)
    // alert(sessionStorage.getItem("userInfo"))
    // alert(JSON.parse(sessionStorage.getItem("userInfo")))
    // alert(JSON.parse(sessionStorage.getItem("userInfo")).emplName)
    // var queryVal = this.GetQueryValue("app");
    // alert(queryVal)
    // if (queryVal === "youjie") {
    // 	alert('进来了')
    // 	this.getUserInfo();
    // }else{
    // 	alert('没有进来')
    // 	const userInfo = {
    // 		userName: "金林",
    // 		instId : "12222",
    // 		instName:"南京"
    // 	};

    // 	sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    // }

  },
  methods: {
    // listenKeybord ($input) {
    //   // var $input = document.getElementsByTagName("input");
    //   if (this.judgeDeviceType.isIOS) {
    //     // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
    //     console.log("sss");

    //     $input.addEventListener(
    //       "focus",
    //       function () {
    //         console.log("IOS 键盘弹起啦！");

    //         // IOS 键盘弹起后操作
    //       },
    //       false
    //     );

    //     // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，

    //     $input.addEventListener("blur", () => {
    //       console.log("IOS 键盘收起啦！");

    //       // IOS 键盘收起后操作
    //     });
    //   } else if (this.judgeDeviceType.isAndroid) {
    //     var originHeight =
    //       document.documentElement.clientHeight || document.body.clientHeight;

    //     window.addEventListener(
    //       "resize",
    //       function () {
    //         var resizeHeight =
    //           document.documentElement.clientHeight ||
    //           document.body.clientHeight;

    //         if (originHeight < resizeHeight) {
    //           console.log("Android 键盘收起啦！");

    //           // Android 键盘收起后操作
    //         } else {
    //           console.log("Android 键盘弹起啦！");

    //           // Android 键盘弹起后操作
    //         }

    //         originHeight = resizeHeight;
    //       },
    //       false
    //     );
    //   }
    // },
    getUserInfo () {
      let xui = requireModuleJs("xui");
      let obj = xui.getUserInfo();
      alert('app-obj')
      alert(obj)
      let token = xui.getDeviceTokens();
      alert(token)
      if (typeof obj === 'object') {
        sessionStorage.setItem('userInfo', JSON.stringify(obj))
        alert(sessionStorage.getItem("userInfo"))
      } else if (typeof obj === 'string') {
        sessionStorage.setItem('userInfo', obj)
        alert(sessionStorage.getItem("userInfo"))
      }

      if (typeof token === 'object') {
        sessionStorage.setItem('x-token', JSON.stringify(token))
      } else if (typeof token === 'string') {
        sessionStorage.setItem('x-token', token)
      }

    }

  }
};
// document.addEventListener("DOMContentLoaded", () => {
//   let fontSize = window.innerWidth / 10;
//   fontSize = fontSize > 50 ? 50 : fontSize;
//   const html = document.querySelector("html");
//   html.style.fontSize = fontSize + "px";
// });
</script>
<style scoped>
#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
