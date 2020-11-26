<template>
  <div>
    <b-card>
      <b-input-group class="mb-3">
        <b-form-input
          v-model="searchTerm"
          aria-label="Email"
          placeholder="Email..."
        >
        </b-form-input>
        <b-input-group-append>
          <b-button size="sm" text="Button" variant="success">Search</b-button>
        </b-input-group-append>
      </b-input-group>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :pagination-options="{
          enabled: true
        }"
        :search-options="{
          enabled: true,
          externalQuery: searchTerm
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'action'">
            <b-button variant="warning">Edit Member</b-button>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class TableMember extends Vue {
  data() {
    return {
      searchTerm: "",
      columns: [
        {
          label: "ID",
          field: "id",
          type: "number"
        },
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Group",
          field: "group"
        },
        {
          label: "Role",
          field: "role"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Status",
          field: "status"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          id: 1,
          name: "A",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        },
        {
          id: 2,
          name: "B",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        },
        {
          id: 3,
          name: "C",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        },
        {
          id: 4,
          name: "D",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        },
        {
          id: 5,
          name: "E",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        },
        {
          id: 6,
          name: "F",
          group: "Customer Services Group",
          role: "STAFF",
          email: "oke@gmail.com",
          status: "SUSPEND"
        }
      ]
    };
  }
}
</script>

<style lang="css"></style>
