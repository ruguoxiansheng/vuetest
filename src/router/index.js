import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import option1 from '@/components/option1'
// 计算标底模块
import calTender from '@/components/calTender'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'option1',
          name : 'option1',
          component: option1
        },
        {
          path: 'calTender',
          name : 'calTender',
          component: calTender
        }
        ]
    }
  ]
})
