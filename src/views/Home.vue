<template>
  <div>
    <keep-alive>
      <Sidebar />
    </keep-alive>
    <div class="content-container">
      <div class="page-content">
        <div class="container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import Sidebar from "../layouts/Sidebar.vue";

@Component({
  components: {
    Sidebar
  }
})
export default class Home extends Vue {}
</script>
