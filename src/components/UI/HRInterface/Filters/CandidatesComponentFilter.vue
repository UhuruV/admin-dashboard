<template>
  <div class="filter-container">
    <div class="filter-content">
      <p>Filter based on:</p>
      <button id="filter-button">Experience</button>
      <button id="filter-button">Location</button>
      <button id="filter-button">Positions</button>
    </div>
    <search-component @searchCandidatesName="searchCandidatesName" />
  </div>
</template>

<style lang="css">
.filter-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 22.5%;
}
.filter-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
#filter-button {
  margin-left: 30px;
}
#filter-button:hover {
  background: #1782c5;
  color: #fff;
}
</style>
<script>
import SearchComponent from "../Search/SearchComponent.vue";
export default {
  components: {
    SearchComponent,
  },
  data: () => ({
    candidatesName: "",
  }),
  watch: {
    candidatesName(newValue) {
      this.$emit("emittedCandidatesName", newValue);
    },
  },
  methods: {
    searchCandidatesName(value) {
      this.candidatesName = value;
      console.log("Value", value);
    },
  },
};
</script>

SearchComponent
