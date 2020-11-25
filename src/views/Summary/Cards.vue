<template>
  <div>
    <h1 :class="`font-weight-boldest text-${color} text-center`">
      {{ total }}
    </h1>
    <p :class="`mb-0 font-weight-bold text-dark-65 text-center`">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import ChatsIcon from "@/components/icons/Chats.vue";
import WarningIcon from "@/components/icons/Warning.vue";

const CardData = Vue.extend({
  props: {
    title: {
      type: String,
      default: ""
    },
    total: {
      type: String,
      default: "0"
    },
    color: {
      type: String,
      default: ""
    }
  }
});

@Component({
  components: {
    ChatsIcon,
    WarningIcon
  }
})
export default class TotalConversations extends CardData {}
</script>
