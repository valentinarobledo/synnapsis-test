import ApiService from "@/common/api.service";
import { 
WS_SECCION_CREAR,
WS_SECCION_LISTAR

} from "../actions.type";


import {
SET_SECCION
 } from "../mutations.type";

const state = {
 seccion: []
};

const getters = {
  seccion(state) {
 	return seccion.state
 }
};

const actions = {
  [WS_SECCION_LISTAR](context, data){
  	return ApiService.post("seccion/listar", data).then( result => {
  		context.commit(SET_SECCION, result );
  		return Promise.resolve(result)
  	})
  },

  [WS_SECCION_CREAR](context, data) {
    return ApiService.post("seccion/crear", data);
  }
  
};

const mutations = {
 [SET_SECCION](context, data){
 	context.seccion = data
 }
};

export default {
  state,
  actions,
  mutations,
  getters
};
