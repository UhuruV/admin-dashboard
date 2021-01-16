<template>
  <div>
    <div class="sidebar">
      <aside>
        <el-row>
          <el-col>
            <el-menu default-active="1">
              <router-link to="/dashboard">
                <el-menu-item index="1">
                  <i class="el-icon-s-grid"></i>
                  <span>Dashboard</span>
                </el-menu-item>
              </router-link>
              <router-link to="/openings">
                <el-menu-item index="2">
                  <i class="el-icon-folder-opened"></i>
                  <span>Openings</span>
                </el-menu-item>
              </router-link>
              <router-link to="/candidates">
                <el-menu-item index="3">
                  <i class="el-icon-user"></i>
                  <span>Canditades</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
        <router-view></router-view>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.sidebar {
  width: 15%;
  /* padding-right: 50px; */
  height: 100%;
  border-right: 2px solid #dcdfe6;
  position: fixed !important;
  z-index: 1;
  overflow: auto;
}
.el-menu {
  border-right: none;
}

</style>
