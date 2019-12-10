import ApiService from "@/common/api.service";
import AuthService from "@/common/auth.service";
import {  
WS_USER_LOGIN
  
} from "../actions.type";


import { SET_AUTH } from "../mutations.type";

const state = {
  token: AuthService.getToken(),
};

const getters = {
  token(state) {
    return state.token;
  }

};

const actions = {
  [WS_USER_LOGIN](context, credentials) {
    console.log(credentials)
    return ApiService.post("usuario/Login", credentials).then(data => {
      context.commit(SET_AUTH, data.token);
      return Promise.resolve(data.token);
    });
  },


  
};

const mutations = {
  [SET_AUTH](state, token) {
    state.token = token;

    ApiService.setHeader();
    AuthService.saveToken(state.token);
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
