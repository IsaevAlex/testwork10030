import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import mainLayout from '@/views/layouts/mainLayout.vue'
const VueInputMask = require('vue-inputmask').default

Vue.use(VueInputMask)

Vue.component('main-layout', mainLayout)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
