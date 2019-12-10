import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";
var _Store = null;
const ApiService = {
  init(Store) {
    _Store = Store;
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    this.setHeader();
  },

  setHeader() {
    Vue.axios.defaults.headers.common["Content-Language"] = "es";

    var token = _Store.getters.token ? _Store.getters.token : "";
    if (token) {
      Vue.axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    }
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  _cleanUser(){     
      
  },

  _handleError(error) {
    var result = error.response.data;
    if (error.response.status == 401) {

      localStorage.removeItem('user');
     
      window.clearInterval(window.threadRealTime);
      window.location = "/#/";
      window.location.reload();

      this.$snotify.error(error.message);
    }

    return Promise.reject(result);
  },

  get(resource, slug = "") {
    // console.error(resource, slug);
    return Vue.axios
      .get(`${resource}/${slug}`)
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(this._handleError);
  },

  download(resource, slug = "") {
    return Vue.axios
      .get(`${resource}/${slug}`, { responseType: "arraybuffer" })
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(this._handleError);
  },

  post(resource, params) {
    // console.error(resource);
    return Vue.axios
      .post(`${resource}`, params)
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(this._handleError);
  },

  postMultiPart(resource, params) {
    return Vue.axios
      .post(`${resource}`, params, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(this._handleError);
  }
};

export default ApiService;
