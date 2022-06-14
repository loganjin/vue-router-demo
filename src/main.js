import Vue from 'vue'
import App from './App'
// MARK: 当导入目录时，会自动去找index文件，此处等价于'./router/index'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router,
  router,
  render: h => h(App)
})
