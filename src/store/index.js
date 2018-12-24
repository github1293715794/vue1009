// 状态管理 vuex用法
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);// 引用

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    }
  }
})
export default store;