<template>
  <b-card class="mt-8">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div>
        <h4 class="text-warning font-weight-bolder">
          Response Speed
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae? asd
        </p>
      </div>
      <select id="" class="form-control" style="width: 30%;" name="">
        <option value="">AVERAGE</option>
        <option value="">MEDIAN</option>
      </select>
    </div>
    <b-row>
      <b-col v-for="(item, index) in CardList" :key="index" cols="12" lg="6">
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
  </b-card>
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
      title: "Median First Response",
      total: "1m 2s",
      color: "warning",
      icon: "WarningIcon"
    },
    {
      title: "Median Resolution Time",
      total: "2m 1s",
      color: "warning",
      icon: "ChatsIcon"
    }
  ];
}
</script>
