<template>
  <b-card class="card-custom mb-8 mb-lg-0">
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h4 class="text-danger font-weight-bolder">
          Weekly Response Perfomance
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae?
        </p>
      </div>
      <select id="" class="form-control" style="width: 30%;" name="">
        <option value="">AVERAGE</option>
        <option value="">MEDIAN</option>
      </select>
    </div>
    <apexchart
      width="100%"
      height="320"
      type="line"
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
export default class ReportChart extends Vue {
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
      colors: ["#FDB912", "#cb1f6f"],
      width: 4,
      dashArray: 8
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
    colors: ["#FDB912", "#cb1f6f"],
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
      name: "Response Time",
      data: [30, 40, 45, 12, 49, 60, 70]
    },
    {
      name: "Resolution Time",
      data: [70, 10, 85, 42, 79, 30, 25]
    }
  ];
}
</script>
