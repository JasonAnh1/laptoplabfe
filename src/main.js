import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import './axios'
import {store} from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueSweetalert2);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
