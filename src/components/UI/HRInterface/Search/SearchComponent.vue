<template>
  <div>
    <el-form ref="form">
      <el-form-item>
        <el-input
          placeholder="Candidate's name"
          suffix-icon="el-icon-search"
          id="el-input"
          v-model="candidatesName"
          @input="filterCandidatesName"
        >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidatesName: "",
    };
  },
  computed: {},
  methods: {
    filterCandidatesName() {
      this.$emit("searchCandidatesName", this.candidatesName);
    },
  },
};
</script>

<style scoped>
.el-form-item {
  width: 271px;
  margin: 0;
}

</style>
