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
          <h6>Welcome back, <b>Muhammad Badar</b></h6>
          <p class="mb-0 text-dark">
            14 hari ku mencari dirimu Untuk menanyakan dimanakah dirimu 14 hari
            ku datangi rumahmu Agar engkau tahu tertatihku menunggumu
          </p>
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
export default class Summary extends Vue {}
</script>
