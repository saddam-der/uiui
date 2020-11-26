<template>
  <div>
    <b-row>
      <b-col cols="12">
        <Header />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="4">
        <center>
          <Card />
        </center>
      </b-col>
      <b-col cols="4">
        <center>
          <Card />
        </center>
      </b-col>
      <b-col cols="4">
        <center>
          <Card />
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
import Card from "@/views/Others/layout_others/card_others.vue";
@Component({
  components: {
    Header,
    Card
  }
})
export default class Others extends Vue {}
</script>
