<template>
  <div class="profile">
    <div class="profile-pic">
      <img src="" alt="" />
    </div>
    <p>Peris</p>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.profile-pic {
  width: 40px;
  height: 40px;
  background: rgb(202, 196, 196);
  border-radius: 50%;
  margin: 0 10px;
}
p {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #292b2a;
  /* align-self: baseline; */
}
</style>