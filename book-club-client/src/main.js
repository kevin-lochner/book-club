import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import potentialBookAPIService from '@/services/potentialBookService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.prototype.$potentialBook_API = potentialBookAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
