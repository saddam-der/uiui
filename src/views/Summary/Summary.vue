<template>
  <div>
    <Header />
    <TicketCards />
    <b-row class="mt-8">
      <b-col cols="12" lg="8">
        <ConversationsChart />
        
        <ReportChart class="mt-8" />
      </b-col>
      <b-col cols="12" lg="4">
        <b-row>
          <b-col cols="12" class="mb-8">
            <b-card class="card-custom" header-tag="header">
              <template #header>
                <div
                  class="d-flex align-items-center justify-content-between w-100"
                >
                  <h6 class="mb-0 text-dark-65 font-weight-bolder">
                    Response Speed
                  </h6>
                  <b-button size="sm" variant="white" class="p-0">
                    <i class="fa fa-download text-success mr-0"></i>
                  </b-button>
                </div>
              </template>
              <b-row>
                <!-- Monthly Active User -->
                <b-col cols="12" lg="6">
                  <Cards title="First Response" color="success" total="10" />
                </b-col>
                <!-- Monthly Active User -->
                <b-col cols="12" lg="6">
                  <Cards title="Resolution Time" color="warning" total="10" />
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <AgentActivity />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/layouts/Header.vue";
import TicketCards from "@/views/Summary/TicketCards.vue";
import Cards from "@/views/Summary/Cards.vue";
import InfoCards from "@/views/Summary/InfoCards.vue";
import ConversationsChart from "@/views/Summary/ConversationsChart.vue";
import ReportChart from "@/views/Summary/ReportChart.vue";
import AgentActivity from "@/views/Summary/AgentActivity.vue";

@Component({
  components: {
    Header,
    TicketCards,
    Cards,
    InfoCards,
    ConversationsChart,
    ReportChart,
    AgentActivity
  }
})
export default class Summary extends Vue {
  ResponseSpeed = [
    {
      title: "Total Conversations",
      total: "928",
      color: "success"
    },
    {
      title: "Total Tickets",
      total: "42",
      color: "success"
    },
    {
      title: "Total Online",
      total: "4",
      color: "success"
    },
    {
      title: "Total Agents",
      total: "12",
      color: "success"
    }
  ];
}
</script>
