<template>
  <div class="header">
    <div>
      <h5>Sendy Recruiter <span>HR</span></h5>
    </div>
    <div>
      <profile-component />
    </div>
  </div>
</template>

<script>
import ProfileComponent from "../ProfileComponent.vue";

export default {
  components: {
    ProfileComponent,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 40px 0px;
  width: 96%;
  margin: 0 auto;
}
h5 {
  color: #0f4176;
  align-self: center;
  font-size: 24px;
  display: block;
}
span {
  color: #ea7125;
  font-size: 14px;
}
</style>
