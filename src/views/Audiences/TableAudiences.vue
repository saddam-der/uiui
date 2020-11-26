<template>
  <div>
    <input v-model="searchTerm" type="text" />
    <b-card>
      <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{ enabled: true, externalQuery: searchTerm }"
      />
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
export default class Audiences extends Vue {
  data() {
    return {
      searchTerm: "",
      columns: [
        {
          label: "Name",
          field: "name",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Email",
          field: "email",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Mobile No",
          field: "mobile_no",
          type: "number",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Gender",
          field: "gender",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Address",
          field: "address",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Province",
          field: "province",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "City",
          field: "city",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Postal Code",
          field: "postal",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Update Time",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy-MM-dd",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      rows: [
        {
          id: 1,
          name: "dfdfd",
          email: "test@gmail.com",
          mobile_no: 2185,
          createdAt: "2011-10-31"
        },
        {
          id: 2,
          name: "Jane",
          email: "test@gmail.com",
          mobile_no: 5645,
          createdAt: "2011-10-31"
        },
        {
          id: 3,
          name: "Susan",
          email: "test@gmail.com",
          mobile_no: 5466,
          createdAt: "2011-10-30"
        },
        {
          id: 4,
          name: "Chris",
          email: "test@gmail.com",
          mobile_no: 5548,
          createdAt: "2011-10-11"
        },
        {
          id: 5,
          name: "Dan",
          email: "test@gmail.com",
          mobile_no: 8468,
          createdAt: "2011-10-21"
        },
        {
          id: 6,
          name: "John",
          email: "test@gmail.com",
          mobile_no: 7564,
          createdAt: "2011-10-31"
        }
      ]
    };
  }
}
</script>
