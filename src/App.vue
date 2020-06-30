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
  created() {
    // 字体根据屏幕大小变化
    var documentElement = document.documentElement;

    function callback() {
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
      sessionStorage.clear();
    });
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
