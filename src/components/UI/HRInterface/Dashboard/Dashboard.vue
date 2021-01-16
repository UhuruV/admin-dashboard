<template>
  <div>
    <header-component />
    <side-navigation />
    <div class="dashboard">
      <div class="cards-box">
        <el-card
          class="box-card"
          v-for="applicant in applicantsData"
          :key="applicant.type"
        >
          <div>
            <i class="el-icon-user"></i>
            <br />
            <p >{{ applicant.number }}</p>
            <h6>{{ applicant.type }}</h6>
          </div>
        </el-card>
      </div>

      <template>
        <div class="chart-wrapper">
          <el-card id="chart-card">
            <chart :chartData="chartdata" :options="dataOptions"> </chart>
          </el-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
import SideNavigation from "../SideNavigation/SideNavigation.vue";
import Chart from "./Chart.vue";
import HeaderComponent from "../Header/HeaderComponent.vue";

// import Profile from "../ProfileComponent";
export default {
  // props: ["options"],
  components: {
    //  Profile
    SideNavigation,
    Chart,
    HeaderComponent,
  },
  data() {
    return {
      applicantsData: store.applicantsData,
      dataOptions: {
        responsive: true,
        maintainAspectRatio: false,
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  reverse: true,
                },
              },
            ],
          },
        },
        scales: {
          xAxes: [
            {
              zeroLineWidth: 50,
              beginAtZero: true,
              gridLines: {
                drawOnChartArea: false,
              },
              ticks: {
                padding: 20,
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
              barThickness: 40,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      chartdata: {
        labels: ["Applicants", "Completed", "Interviewed", "Pending"],
        datasets: [
          {
            label: "Candidate Status Distribution",
            backgroundColor: "#527CBD",
            data: [45, 35, 25, 15],
            borderWidth: 1,
            barPercentage: 1.0,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.dashboard{
  text-align: center;
}
form {
  overflow: auto;
}
.search-input {
  border-radius: 30px;
}
.cards-box,
.second-sec {
  display: flex;
  justify-content: space-between;
}
p {
  font-weight: 600;
  font-size: 1.8rem;
}
h6 {
  color: #909399;
}
.el-input {
  width: 20%;
  float: right;
}
.el-card {
  width: 20%;
}
/* .cards {
  width: 48.5%;
} */
.search,
.profile {
  margin-top: 3%;
  overflow: auto;
}
.second-sec,
.cards-box {
  margin-top: 3%;
  overflow: auto;
}
.el-icon-user-solid {
  float: right;
}
.search {
  overflow: auto;
}
.dashboard {
  /* margin-top: 40px; */
  width: 80%;
  float: right;
  margin-left: auto;
}

div.chart-wrapper {
  width: 95%;
  margin: 5% auto;
}
canvas {
  width: 80%;
  margin: 0 auto;
}
</style>
