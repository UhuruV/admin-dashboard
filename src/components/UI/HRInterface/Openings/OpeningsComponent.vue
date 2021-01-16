<template>
  <div>
    <header-component />
    <side-navigation />
    <div class="oppenings">
      <el-button
        class="openings-button"
        id="el-button"
        icon="el-icon-plus"
        @click="openModel"
      >
        Create an opening
      </el-button>
      <el-card class="box-card" id="el-card">
        <div
          v-for="opening in openings"
          :key="opening.businessUnit"
          class="text item"
        >
          <div class="card-content">
            <div>
              <p class="bs-unit-header">
                {{ opening.businessUnit }}
              </p>
              <p class="p-position">{{ opening.position }}</p>
              <p class="p-location">{{ opening.location }}</p>
            </div>

            <div class="bg-purple date">
              <p>{{ opening.date }}</p>
            </div>

            <div class="card-buttons">
              <el-button id="edit-btn">Edit</el-button>
              <el-button id="candidates-btn">View Candidates (50)</el-button>
            </div>
          </div>
          <hr />
        </div>
      </el-card>

      <div v-if="myModel">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 id="h5" class="modal-title">{{ dynamicTitle }}</h5>
                    <button
                      type="button"
                      class="close"
                      id="button"
                      @click="myModel = false"
                    >
                      <span aria-hidden="true"> &times; </span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="">Position</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="position"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="location"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">About Sendy</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="aboutSendy"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">About Specific Sendy Branch</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="aboutBranch"
                      />
                    </div>
                    <br />
                    <div align="center">
                      <el-button v-model="actionButton" @click="nextPage">{{
                        actionButton
                      }}</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div v-if="nextModel">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 id="h5" class="modal-title">{{ dynamicTitle }}</h5>
                    <button
                      type="button"
                      class="close"
                      id="button"
                      @click="nextModel = false"
                    >
                      <span aria-hidden="true"> &times; </span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="">About the role</label>
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="location"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Key duties and responsibilities</label>
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="aboutSendy"
                      />
                    </div>
                    <br />
                    <div align="center">
                      <el-button v-model="actionButton" @click="lastPage">{{
                        actionButton
                      }}</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div v-if="lastModel">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 id="h5" class="modal-title">{{ dynamicTitle }}</h5>
                    <button
                      type="button"
                      class="close"
                      id="button"
                      @click="lastModel = false"
                    >
                      <span aria-hidden="true"> &times; </span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="">Applicant's Requirements</label>
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="requirements"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">What we offer</label>
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="offer"
                      />
                    </div>
                    <br />
                    <div align="center">
                      <el-button v-model="actionButton" @click="postOpening">{{
                        actionButton
                      }}</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/openings.js";
import HeaderComponent from "../Header/HeaderComponent";
import SideNavigation from "../SideNavigation/SideNavigation.vue";

export default {
  components: {
    SideNavigation,
    HeaderComponent,
  },
  data() {
    return {
      openings: store.openings,
      myModel: false,
      nextModel: false,
      location: "",
      position: "",
      aboutSendy: "",
      aboutBranch: "",
      dynamicTitle: "Add an opening",
      actionButton: "Next Page",
      role: "",
      responsbilities: "",
      requirements: "",
      offer: "",
      lastModel: false,
    };
  },
  methods: {
    openModel: function () {
      this.location = "";
      this.position = "";
      this.aboutSendy = "";
      this.aboutBranch = "";
      this.actionButton = "Next Page";
      this.myModel = true;
    },
    nextPage: function () {
      this.role = "";
      this.responsbilities = "";
      this.actionButton = "Next Page";
      this.nextModel = true;
      this.myModel = false;
    },
    lastPage: function () {
      this.requirements = "";
      this.offer = "";
      this.actionButton = "Post Opening";
      this.nextModel = false;
      this.myModel = false;
      this.lastModel = true;
    },
  },
};
</script>

<style scoped>
.oppenings {
  width: 80%;
  margin-left: auto;
}
.openings-button {
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 14px;
}

.el-card {
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.bs-unit-header {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0;
  color: #0f4176;
}
.p-position {
  margin: 0;
  color: #1c373a;
  font-size: 16px;
  padding: 6px 0;
}
.p-location {
  font-size: 14px;
  color: #828282;
}
.card-buttons {
  display: flex;
  flex-direction: row;
}

#edit-btn {
  background-color: #fff;
  color: #1c373a;
  border: 1px solid #ea7125;
  border-radius: 5px;
  padding: 10px 30px;
}
#edit-btn:hover {
  background: #ea7125;
  color: #fff;
}
#candidates-btn {
  background-color: #fff;
  color: #1c373a;
  border: 1px solid #219653;
  border-radius: 5px;
  padding: 10px 30px;
}
#candidates-btn:hover {
  background: #219653;
  color: #fff;
}

#el-button {
  margin-bottom: 10px;
  margin-left: 5%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
#button {
  margin-right: 0;
  margin-left: 0;
  /* float: right; */
}

#h5 {
  text-align: center;
  font-weight: 500;
  /* font-size: 18px; */
  color: #527cbd;
}

#el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
