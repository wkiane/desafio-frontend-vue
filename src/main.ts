import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['navbar-vanilla']

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
