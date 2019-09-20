import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import(/* webpackChunkName: "cadastro" */ './views/Cadastro.vue')
  }
  ]
})
