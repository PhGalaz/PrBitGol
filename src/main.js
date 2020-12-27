import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSplide from '@splidejs/vue-splide';
import BootstrapVue from 'bootstrap-vue';

Vue.use( VueSplide, BootstrapVue );
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
