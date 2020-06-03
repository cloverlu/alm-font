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
// export default {};
// document.addEventListener("DOMContentLoaded", () => {
//   let fontSize = window.innerWidth / 10;
//   fontSize = fontSize > 50 ? 50 : fontSize;
//   const html = document.querySelector("html");
//   html.style.fontSize = fontSize + "px";
// });
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
  background: #7d8188;
  overflow: hidden;
}
</style>
