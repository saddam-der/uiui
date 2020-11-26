<template>
  <div>
    <b-card>
      <h1>
        Audiences
      </h1>
      <b-card-text>A second paragraph of text in the card.</b-card-text>      
      <p>asdsad</p>
      <TableAudiences />
    </b-card>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import TableAudiences from "@/views/Audiences/TableAudiences.vue";

@Component({
  components: {
    TableAudiences
  }
})
export default class Audiences extends Vue {}
</script>
