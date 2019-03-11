import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import './firebase'
import axios from 'axios'
import router from './router'
import store from './store'

window.axios = axios

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.$backend = 'https://us-central1-upheld-beach-230723.cloudfunctions.net/myWebsiteBackend'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
