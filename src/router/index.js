import Vue from "vue";
import Router from "vue-router";
import Menu from "../components/modules/Menu/Menu.vue"
import util from "../util"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name:"login",
      component: util.load("components/modules/Login","Login"),
      meta: { notRequire: true }
    },
    {
      path: '/',
      name: 'home',
      component: util.load("components/common","Home"),
      children:[{
          path:'/menu',
          name:"菜单管理",
          component:Menu,
      }]
    },
  ]
})
