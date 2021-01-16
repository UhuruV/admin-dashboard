import Dashboard from '../components/UI/HRInterface/Dashboard/Dashboard.vue';
import SideNavigation from '../components/UI/HRInterface/SideNavigation/SideNavigation.vue'
import LandingPage from '../components/UI/HRInterface/LandingPage.vue'
import ProfileComponent from '../components/UI/HRInterface/ProfileComponent.vue'
import OpeningsComponent from '../components/UI/HRInterface/Openings/OpeningsComponent.vue'
import CandidatesComponent from '../components/UI/HRInterface/Candidates/CandidatesComponent.vue'
import SearchComponent from '../components/UI/HRInterface/Search/SearchComponent.vue'
import HRComponent from '../components/UI/HRInterface/HRComponent.vue'
import ApexChart from '../components/UI/HRInterface/Dashboard/ApexChart.vue'
import Router from "vue-router";

const router = new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      component:HRComponent,
      name:"all"
    }
    ,
    {
      path:"/dashboard",
      component:Dashboard,
      name:"dashboard"
    }
    ,
    {
      path:"/menu",
      component:SideNavigation,
      name:"menu"
    }
    ,
    {
      path:"/landing-page-hr",
      component:LandingPage,
      name:"landing-page-hr"
    }
    ,
    {
      path:"/profile",
      component:ProfileComponent,
      name:"profile"
    }
    ,
    {
      path:"/openings",
      component:OpeningsComponent,
      name:"openings"
    }
    ,
    {
      path:"/candidates",
      component:CandidatesComponent,
      name:"candidates"
    }
    ,
    {
      path:"/search",
      component:SearchComponent,
      name:"search"
    }
    ,
    {
      path:"/apexchart",
      component:ApexChart,
      name:"apexchart"
    }
   
  ],
});

export default router;
