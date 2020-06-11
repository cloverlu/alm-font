import Vue from "vue";
import Vuex from "vuex";
import creditFirst from "./modules/loanInspection/creditFirst";
import creditRoutine from "./modules/loanInspection/creditRoutine";
import dailyInspection from "./modules/loanInspection/dailyInspection";
import footerNext from "../store/modules/footerNext";
import actions from "../store/action";
import getters from "../store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    creditFirst,
    creditRoutine,
    dailyInspection,
    footerNext
  }
});
