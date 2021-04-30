import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//全局监听窗口变化事件
import '@/util/onResize'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
