import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import channels from "./modules/summary";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    channels
  },
  strict: debug,
  plugins: [
    createPersistedState({
      key: "matamantra",
      reducer: state => ({
        user: state.user
      })
    })
  ]
});
