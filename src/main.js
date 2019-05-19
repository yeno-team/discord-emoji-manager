import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.use(VueRouter)

import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
