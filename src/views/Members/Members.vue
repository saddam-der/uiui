<template>
  <div>
    <b-card>
      <h1 class="text-center">Member List</h1>
      <b-row align-h="end">
        <b-col cols="2">
          <b-button v-b-modal.add-member variant="warning" class="mb-4">
            Add Member
          </b-button>
        </b-col>
      </b-row>
      <b-modal id="add-member" title="Form Member">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
      <b-row>
        <b-col>
          <TableMember />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";
import TableMember from "@/views/Members/TableMember.vue";
@Component({
  components: {
    TableMember
  }
})
export default class Members extends Vue {}
</script>

<style lang="css">
@import "../../assets/sass/custom_member/member.css";
</style>
