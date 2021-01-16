<template>
  <div>
    <header-component />
    <side-navigation />
    <!-- <search-component/> -->
    <candidates-component-filter
      @emittedCandidatesName="emittedCandidatesName"
    />
    <div class="candidates-table">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="360"
          stripe
          :row-key="getRowKey"
          :expand-row-keys="expand_keys"
          @row-click="expandTableRow"
          @expand-change="handleRowExpand"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <div class="hidden-candidates-card">
                <el-card id="card-canditates-hide">
                  <el-table style="width: 100%">
                    <el-table-column prop="date" label="Name" width="180">
                    </el-table-column>
                    <el-table-column
                      prop="position"
                      label="Position"
                      width="180"
                    >
                    </el-table-column>
                    <el-table-column prop="name" label="Experience" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="Location">
                    </el-table-column>
                    <el-table-column prop="status" label="Status">
                      <button>status</button>
                    </el-table-column>
                  </el-table>
                  <el-row>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <p>
                          Location:{{props.row.date}}
                        </p>
                        <p>
                          cv:{{props.row.city}}
                        </p>
                        <p>
                          Application Status:{{props.row.zip}}
                        </p>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple-light">
                        <p>
                          Invitation for candidates In-Office interview
                        </p>
                        <label for="">Set the date</label>
                        <el-input
                          placeholder="Monday 23rd Dec"
                          id="input"
                        ></el-input>
                        <el-button>Send Invitation</el-button>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <el-button id="rejection-button"
                          >Send Rejection</el-button
                        >
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Name" prop="date"> </el-table-column>
          <el-table-column label="Position" prop="name"> </el-table-column>
          <el-table-column label="Location" prop="date"> </el-table-column>
          <el-table-column label="Date" prop="name"> </el-table-column>
          <el-table-column label="Status" prop="date"> 
            <el-button id="status-button">Anything goes</el-button>
          </el-table-column>
        </el-table>
      </template>

      <!-- <el-table :data="applicantsInfo" style="width: 100%" height="300">
        <el-table-column
          prop="name"
          label="Name"
          width="200"
          id="candidates-name"
        >
        </el-table-column>
        <el-table-column prop="email" label="Position" width="200">
        </el-table-column>
        <el-table-column prop="experience" label="Experience" width="180">
        </el-table-column>
        <el-table-column prop="country" label="Location"> </el-table-column>
        <el-table-column prop="status" label="Status">
          <button>status</button>
        </el-table-column>
      </el-table> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import SideNavigation from "../SideNavigation/SideNavigation.vue";
import HeaderComponent from "../Header/HeaderComponent";
import CandidatesComponentFilter from "../Filters/CandidatesComponentFilter.vue";
// import SearchComponent from '../Search/SearchComponent.vue';

export default {
  components: {
    SideNavigation,
    HeaderComponent,
    CandidatesComponentFilter,
    // SearchComponent
  },
  data() {
    return {
      candidatesInfo: [],
      candidatesName: "",
      expand_keys: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
      ],
    };
  },
  computed: {
    applicantsInfo() {
      return this.candidatesInfo.filter((candidate) => {
        return candidate.name === this.candidatesName;
      });
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    // getData: function() {
    //   axios
    //     .get(
    //       "https://sendy-recruiter.azurewebsites.net/recruiter/api/application"
    //     )
    //     .then(
    //       function(response) {
    //         this.candidatesInfo = response.data;
    //       }.bind(this)
    //     );
    // },
    emittedCandidatesName(value) {
      this.candidatesName = value;
    },
    getRowKey(row) {
      return row.key;
    },
    expandTableRow(row) {
      if (this.expand_keys.includes(row.key)) {
        this.expand_keys = [];
      } else {
        this.expand_id = row.key;
        this.expand_keys = [];
        this.order_id = row.key;
        this.expand_keys.push(row.key);
      }
    },
    handleRowExpand(row) {
      if (this.expand_keys.includes(row.key)) {
        this.expand_keys = [];
      } else {
        this.expand_id = row.key;
        this.expand_keys = [];
        this.order_id = row.key;
        this.expand_keys.push(row.key);
      }
    },
  },
};
</script>

<style scoped>
.candidates-table {
  width: 78%;
  float: right;
  margin: 0;
}
.hidden-candidates-card {
  text-align: left;
}
#rejection-button{
  background-color:  #EB5757;
  color: #fff;
  float: right;
}
#status-button{
  border-radius: 20px;
  width: 125px;
  height: 30px;
  text-align: center;
  padding: 0;
}
</style>
