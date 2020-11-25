<template>
  <div class="topbar">
    <ul class="topbar__breadcrumb">
      <li class="topbar__breadcrumb__item">
        <a class="topbar__breadcrumb__link" href="#">Channels</a>
      </li>
    </ul>
    <div class="topbar__profile">
      <div
        id="kt_quick_user_toggle"
        class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
      >
        <span
          class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
          >Hi,</span
        >
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
          >Badar</span
        >
        <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
          <span class="symbol-label font-size-h5 font-weight-bold">B</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Topbar extends Vue {}
</script>
