import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Field } from "mint-ui";

import "@/assets/font/font.scss";
import "@/assets/style/global.scss";

import "./assets/iconfont/iconfont.css";

import "mint-ui/lib/style.min.css";

Vue.component(Field.name, Field);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
