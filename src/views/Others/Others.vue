<template>
  <div>
    <!-- <h1>Others Test</h1> -->
    <Header/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/views/Others/layout_others/Header_others.vue";
import card from "@/views/Others/layout_others/card_others.vue";
@Component({
    components:{
        Header,
        card
    }
})
export default class Others extends Vue {
  
}
</script>
