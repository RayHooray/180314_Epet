import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from '../pages/Category/Category'   //分类页面
import GoodsDetails from '../pages/GoodsDetails/GoodsDetails'
import Login from '../pages/Login/Login'
import Msite from '../pages/Msite/Msite'
import ShopCart from '../pages/ShopCart/ShopCart'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    //启动时的默认页面（首页）
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/goodslist',
      component: GoodsDetails,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
