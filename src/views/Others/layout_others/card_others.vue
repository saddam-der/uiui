<template>
    <a class="card1" href="#">
        <h3>This is option 1</h3>
        <p class="small">Card description with lots of great facts and interesting details.</p>
        <div class="go-corner" href="#">
            <div class="go-arrow">
                →
            </div>
        </div>
    </a>
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