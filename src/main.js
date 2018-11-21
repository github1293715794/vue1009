// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axiosUrl from './api'// 引入api
Vue.prototype.axiosUrl = axiosUrl;// 将接口api挂载到Vue.prototype中  全局使用this.axiosUrl.***

import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
}).$mount('#app')
