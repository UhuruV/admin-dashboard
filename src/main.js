import Vue from 'vue'
import Router from 'vue-router';
import ElementUI from 'element-ui';
import router from './router/routes';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue'
import vueCountryRegionSelect from 'vue-country-region-select';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import '@/plugins/apexcharts'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueCountryRegionSelect);
Vue.use(Router);
Vue.use(router);
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
