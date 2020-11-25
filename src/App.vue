<template>
  <Fragment>
    <vue-progress-bar></vue-progress-bar>
    <Home v-if="loginStatus" />
    <Auth v-else />
  </Fragment>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import { Fragment } from "vue-fragment";
import Auth from "./views/Auth/Auth.vue";
import Home from "./views/Home.vue";

@Component({
  components: {
    Auth,
    Home,
    Fragment
  }
})
export default class App extends Vue {
  get loginStatus(): boolean {
    return this.$store.getters["user/userDetail"];
  }
}
</script>

<style lang="scss">
// 3rd party plugins css
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~socicon/css/socicon.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "./assets/plugins/flaticon/flaticon.css";
@import "./assets/plugins/flaticon2/flaticon.css";
@import "./assets/plugins/keenthemes-icons/font/ki.css";
@import "vue-select/src/scss/vue-select.scss";

// Main demo style scss
@import "./assets/sass/style.vue";
</style>
