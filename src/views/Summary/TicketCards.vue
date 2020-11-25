<template>
  <b-row>
    <b-col
      v-for="(item, index) in CardList"
      :key="index"
      cols="12"
      lg="3"
      class="mt-8"
    >
      <b-card :class="`card-custom bg-light-${item.color}`">
        <div class="d-flex flex-row align-items-center">
          <component :is="item.icon" size="4" :color="item.color"></component>
          <div class="ml-5">
            <h1
              :class="`font-weight-boldest text-${item.color}`"
              v-text="item.total"
            />
            <p
              :class="`mb-0 font-weight-bolder text-${item.color}`"
              v-text="item.title"
            />
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import ChatsIcon from "@/components/icons/Chats.vue";
import WarningIcon from "@/components/icons/Warning.vue";

@Component({
  components: {
    ChatsIcon,
    WarningIcon
  }
})
export default class TicketCards extends Vue {
  CardList = [
    {
      title: "Open Ticket",
      total: "3",
      color: "warning",
      icon: "WarningIcon"
    },
    {
      title: "Pending Ticket",
      total: "10",
      color: "danger",
      icon: "ChatsIcon"
    },
    {
      title: "Unassigned Ticket",
      total: "8",
      color: "primary",
      icon: "ChatsIcon"
    },
    {
      title: "Closed Ticket",
      total: "128",
      color: "success",
      icon: "ChatsIcon"
    }
  ];
}
</script>
