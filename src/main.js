import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'weui/dist/style/weui.css'
import data from './service/data';

Vue.use(data)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
