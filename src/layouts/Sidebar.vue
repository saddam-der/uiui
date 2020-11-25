<template>
  <div class="sidebar">
    <div class="sidebar__brand">
      <img src="/media/logo/automate-logo-only.png" alt="" />
    </div>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link tag="a" class="sidebar__menu__link" to="summary">
          <i class="la la-chart-bar text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Summary</p>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link tag="a" class="sidebar__menu__link" to="summary">
          <i class="la la-envelope-o text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Message</p>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link tag="a" class="sidebar__menu__link" to="members">
          <i class="la la-user-plus text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Members</p>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link tag="a" class="sidebar__menu__link" to="summary">
          <i class="la la-dropbox text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Others</p>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link tag="a" class="sidebar__menu__link" to="audiences">
          <i class="la la-users text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Audiences</p>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu sidebar__menu--secondary">
      <li id="sidebar-tooltip-signout" class="sidebar__menu__item">
        <a class="sidebar__menu__link" @click="signOut">
          <i class="la la-power-off text-white"></i>
          <p class="sidebar__menu__link__text text-white mb-0">Logout</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sidebar extends Vue {
  signOut(): void {
    this.$store.dispatch("user/LOGOUT");
  }
}
</script>
