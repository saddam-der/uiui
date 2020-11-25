<template>
  <b-card class="card-custom">
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h4 class="text-success font-weight-bolder">
          Weekly Conversations
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae?
        </p>
      </div>
    </div>
    <apexchart
      width="100%"
      height="320"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </b-card>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class ConversationsChart extends Vue {
  options = {
    chart: {
      id: "vuechart-example",
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: ["#05ccc2"],
      width: 3,
      dashArray: 0
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "12px",
        fontWeight: "bold"
      },
      background: {
        enabled: true,
        foreColor: "#FFFFFF",
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 1,
        borderColor: "#ffffff"
      }
    },
    colors: ["#05ccc2"],
    yaxis: {
      labels: {
        show: true
      }
    },
    xaxis: {
      tickPlacement: "between",
      labels: {
        show: true,
        rotate: 0
      },
      categories: [
        "2020-19-20",
        "2020-19-20",
        "2020-19-20",
        "2020-19-20",
        "2020-19-20",
        "2020-19-20",
        "2020-19-20"
      ]
    }
  };
  series = [
    {
      name: "series-1",
      data: [30, 40, 45, 12, 49, 60, 70]
    }
  ];
}
</script>
