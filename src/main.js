import Vue from 'vue'
import './expansion.js'
import App from './App.vue'
import store from './store'
import './icons/iconfont'
import './icons/iconfont.css'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
