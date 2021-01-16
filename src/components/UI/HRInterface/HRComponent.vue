<template>
    <div>
       <side-navigation class="side-nav"/> 
       <landing-page/>
    </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import SideNavigation from './SideNavigation/SideNavigation'
export default {
   components:{
      SideNavigation,
      LandingPage
   }
}
</script>
     
<style scoped>
.side-nav{
   margin-top: 5%;
}
    
</style>