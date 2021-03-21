import Vue from 'vue';
// VCharts需要在./App.vue之前引用
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import '@/assets/css/reset.less';

Vue.use(VCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
