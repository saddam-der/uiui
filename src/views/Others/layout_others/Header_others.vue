<template>
<b-row>
    <b-col cols="12">
      <b-alert
        variant="white"
        class="alert-custom alert-shadow mb-0"
        role="alert"
        fade
        show=""
      >
        <div class="alert-text text-success">
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
