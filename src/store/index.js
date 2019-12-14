import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth.module";
import seccion from "./modules/seccion.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    seccion
  }
});
