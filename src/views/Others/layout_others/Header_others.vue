<template>
  <b-row>
    <b-col cols="12">
      <b-alert
        variant="white"
        class="alert-custom  mb-0 headerOthers"
        role="alert"
        fade
        show=""
      >
        <div class="alert-text text-primary">
          <h1>Others</h1>
        </div>
      </b-alert>
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
export default class Others extends Vue {}
</script>
<style>
.headerOthers {
  box-shadow: 0 3px 5px grey;
}
</style>
