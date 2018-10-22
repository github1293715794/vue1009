import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(VueRouter)
export default new VueRouter({
	routes:[
    {
      path:'/',
      component: Index
    },
    {
      path:'/content',
      component: Content
    }
  ],
	linkActiveClass:"active"
})
 