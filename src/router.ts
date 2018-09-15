import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/forgot',
      name: '忘记密码',
      component: () => import(/* webpackChunkName: "about" */ './views/Forgot.vue')
    }
  ]
})
