<template>
  <div>
    <b-card title="Member List" class="text-center card-member">
      <b-button v-b-modal.modal.add.member variant="warning" class="btn-add-member">Add Member</b-button>
      <TableMember />
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
