<template>
  <div>
    <b-row>
      <b-col cols="12">
        <Header />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col class="col-sm-12 col-md-6 col-lg-4">
        <center>
          <CardChannels />
        </center>
      </b-col>
      <b-col class="col-sm-12 col-md-6 col-lg-4">
        <center>
          <CardAssigment />
        </center>
      </b-col>
      <b-col class="col-sm-12 col-md-6 col-lg-4">
        <center>
          <CardGroup />
        </center>
      </b-col>
      <b-col class="col-sm-12 col-md-6 col-lg-4">
        <center>
          <CardValet />
        </center>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/views/Others/layout_others/Header_others.vue";
import CardAssigment from "@/views/Others/layout_others/cardAssignment_others.vue";
import CardChannels from "@/views/Others/layout_others/cardChannels_others.vue";
import CardGroup from "@/views/Others/layout_others/cardGroup_others.vue";
import CardValet from "@/views/Others/layout_others/cardValet_others.vue";
@Component({
  components: {
    Header,
    CardAssigment,
    CardChannels,
    CardGroup,
    CardValet
  }
})
export default class Others extends Vue {}
</script>
