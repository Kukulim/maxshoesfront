import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import notify from "./modules/notify";
import emplo from "./modules/emplo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    notify,
    emplo
  }
});
