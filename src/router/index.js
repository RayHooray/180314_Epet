import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from '../pages/Category/Category'   //分类页面
import GoodsList from '../pages/GoodsList/GoodsList'
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
      component: Msite
    },
    {
      path: '/goodslist',
      component: GoodsList
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
