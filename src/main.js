import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import apiIntercept from "@/utils/apiIntercept";
import { Field, Cell, Indicator, Toast, MessageBox } from "mint-ui";

import "@/assets/font/font.scss";
// import "@/assets/style/global.scss";

import "./assets/iconfont/iconfont.css";

import "mint-ui/lib/style.min.css";

// Vue.component(Field.name, Field);
Vue.component("mt-field", Field);
Vue.component("mt-cell", Cell);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$Indicator = Indicator;
Vue.prototype.$Toast = Toast;
Vue.prototype.$MessageBox = MessageBox;

Vue.use(apiIntercept);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
