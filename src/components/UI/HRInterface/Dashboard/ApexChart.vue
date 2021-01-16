<template>
  <div>
    <apexchart
      width="380"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      options: {
          title: {
            display: true,
            text: 'ENGINEERING APPLICANTS'
        },
        fill: {
          colors: ["#527CBD", "#DFEEFB"],
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                customScale: 0.8,
              },
            },
          },
        },
      },
      series: [12, 45],
    };
  },
};
</script>
<style lang="css">
.apexcharts-canvas {
  /* background-color: red; */
}
path {
}
text{
    text-align: center;
}
.apexcharts-legend {
    display: none;
}
</style>
