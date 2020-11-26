<template>
  <div class="card1">
    <p>
      <center>
        <svg
          aria-hidden="true"
          style="width:35%;"
          focusable="false"
          data-prefix="fa"
          data-icon="object-group"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="other__item__icon svg-inline--fa fa-object-group fa-w-16"
        >
          <path
            fill="currentColor"
            d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"
            class=""
          ></path>
        </svg>
      </center>
    </p>
    <h2>
      Assignment
    </h2>
    <p>
      <a href="#" class="btn other__item__button rounded-pill button"> View </a>
    </p>
    <div class="go-corner">
      <div class="go-arrow">
        →
      </div>
    </div>
  </div>
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
@import "../../../assets/sass/custom_others/card_others.css";
</style>
