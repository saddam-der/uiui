import Vue, { VNode } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueProgressBar from "vue-progressbar";
import vSelect from "vue-select";
import { baseUrl, token } from "./config/axios";
import VueApexCharts from "vue-apexcharts";

import { BootstrapVue } from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VueGoodTablePlugin from "vue-good-table";
import VueSweetalert2 from "vue-sweetalert2";

import "vue-good-table/dist/vue-good-table.css";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(BootstrapVue);
Vue.use(VueGoodTablePlugin);
Vue.use(VueSweetalert2);
Vue.use(VueApexCharts);

Vue.use(VueProgressBar, {
  color: "#3998BC",
  failedColor: "#fd397a",
  thickness: "6px"
});
// Register all dependency components
Vue.component("v-select", vSelect);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.component("apexchart", VueApexCharts);

// Axios Configuration
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = token;

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    router.app.$Progress.start();
    return config;
  },
  function(error) {
    // Do something with request error
    router.app.$Progress.fail();
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    router.app.$Progress.finish();
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    router.app.$Progress.fail();
    if (error.response && error.response.status === 403) {
      store.dispatch("user/LOGOUT").then(() => {
        router.push("/");
      });
    }
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount("#app");
