// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import axiosUrl from './api';// 引入api
Vue.prototype.axiosUrl = axiosUrl;// 将接口api挂载到Vue.prototype中  全局使用this.axiosUrl.***

import axios from 'axios';// 引入axios 进行ajax请求
Vue.prototype.$http = axios;// 将axios挂载到Vue.prototype中，全局使用：this.$http.***

/* 非父子组件间传值，可以使用vuex去共享数据 */
/* 现在用另一种方式，事件总线：在生成vue前，给Vue的原型上添加一个bus属性，这个属性是vue的实例，之后创建的vue实例都具有bus这个属性 */
Vue.prototype.bus = new Vue();// 事件总线  全局使用 this.bus.*** 
/* 状态管理 当项目较大页面较多时使用，小型项目直接用时间总线即可 vuex */
// import Vuex from 'vuex'
import store from './store';// 引入store  store中已经引入了vuex

Vue.config.productionTip = false;
// 使用命令行提交代码
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h=>h(App)
}).$mount('#app');// 手动挂载
/* 
  render: function (createElement) {
    return createElement(App);
  } 
*/
