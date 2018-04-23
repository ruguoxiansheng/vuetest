import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import option1 from '@/components/option1'

// 计算中心
import calCenter from '@/components/calCenter'
// 计算标底模块
import calTender from '@/components/calTender'


// 用户中心
import userCenter from '@/components/usercenter'
// 账单
import bill from '@/components/bill'

// 账户查询
import accountQuery from '@/components/accountQuery'

// option3
import option3 from '@/components/option3'

// 公司认证
import companyAuthentication from '@/components/companyAuthentication'

// 应用中心
import appCenter from '@/components/appCenter'


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
          path: '/userCenter',
          name: 'userCenter',
          component:userCenter,
          children:[
            // 账单
            {
              path: 'bill',
              name : 'bill',
              component : bill
            },
            // 账户查询
            {
              path: 'accountQuery',
              name : 'accountQuery',
              component : accountQuery
            },
            // option3
            {
              path: 'option3',
              name : 'option3',
              component : option3
            },
            // 公司认证
            {
              path: 'companyAuthentication',
              name : 'companyAuthentication',
              component : companyAuthentication
            }

          ]
        },
        {
          path: '/calCenter',
          name : 'calCenter',
          component: calCenter,
          children : [
            // 标底计算
            {
              path: 'calTender',
              name : 'calTender',
              component : calTender
            }
          ]
        },
        {
          path: '/appCenter',
          name : 'appCenter',
          component: appCenter
        }
        ]
    }

  ]
})
