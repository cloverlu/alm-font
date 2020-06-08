import Vue from "vue";
import Vuex from "vuex";
import creditFirst from "./modules/loanInspection/creditFirst";
import footerNext from "../store/modules/footerNext";
import actions from "../store/action";
import getters from "../store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    creditFirst,
    footerNext
  }
});
