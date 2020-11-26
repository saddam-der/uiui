<template>
  <div class="card1">
    <p>
      <center>
        <svg
          aria-hidden="true"
          style="width:35%;"
          focusable="false"
          data-prefix="fa"
          data-icon="puzzle-piece"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="other__item__icon svg-inline--fa fa-puzzle-piece fa-w-18"
        >
          <path
            fill="currentColor"
            d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"
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
