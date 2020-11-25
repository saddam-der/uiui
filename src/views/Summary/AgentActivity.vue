<template>
  <b-row>
    <b-col cols="12">
      <b-card class="card-custom">
        <!-- Header -->
        <div>
          <div class="">
            <h5 class="text-success font-weight-bolder text-center mb-8">
              Agent Activity
            </h5>
            <!-- Header End -->
          </div>
          <div>
            <div
              v-for="(item, index) in agents"
              :key="index"
              class="d-flex align-items-center justify-content-between mb-5"
            >
              <div class="d-flex align-items-center">
                <div class="symbol symbol-circle symbol-50 mr-3">
                  <img alt="Pic" :src="item.image" />
                </div>
                <div class="d-flex flex-column">
                  <a
                    href="#"
                    class="text-dark-75 text-hover-success font-weight-bold font-size-lg"
                    >{{ item.name }}</a
                  >
                  <span class="text-muted font-weight-bold font-size-sm"
                    >Last login: {{ item.group }}
                  </span>
                </div>
              </div>
              <div class="d-flex flex-column align-items-end">
                <span class="text-success font-weight-bold">
                  <span
                    class="label label-xl label-success font-size-sm font-weight-bolder"
                    >14</span
                  >
                </span>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="d-flex justify-content-between align-items-center mt-8">
            <b-button variant="success" size="sm"
              ><i class="la la-angle-left pr-0"></i
            ></b-button>
            <p class="mb-0 text-muted font-weight-bolder">1 of 2</p>
            <b-button variant="success" size="sm"
              ><i class="la la-angle-right pr-0"></i
            ></b-button>
          </div>
          <!-- Pagination End -->
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class AgentsPerfomance extends Vue {
  agents = [
    {
      name: "Muhammad Badar",
      image: "media/users/300_12.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "2m 48s",
      response_time: "1m 12s"
    },
    {
      name: "Alifia Berliana Putri",
      image: "media/users/300_10.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "3m 14s"
    },
    {
      name: "Arabella Alesha Seraphina",
      image: "media/users/300_11.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "3m 2s"
    },
    {
      name: "Dendy Rachmansyah",
      image: "media/users/300_13.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "1m 5s"
    },
    {
      name: "Mikaela Agatha",
      image: "media/users/300_16.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "1m 5s"
    },
    {
      name: "Beverly Reeds",
      image: "media/users/300_18.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "5m 5s"
    },
    {
      name: "Alleria Windrunner",
      image: "media/users/300_20.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "5m 5s"
    },
    {
      name: "Mirana Priest",
      image: "media/users/100_2.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "5m 5s"
    },
    {
      name: "Revina Velove",
      image: "media/users/100_4.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "5m 5s"
    },
    {
      name: "Juliana Koller",
      image: "media/users/100_11.jpg",
      group: "November 12, 2020, 17:21",
      resolution_time: "1m 72s",
      response_time: "5m 5s"
    }
  ];
}
</script>
