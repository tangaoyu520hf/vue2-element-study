import Vue from "vue";
import Router from "vue-router";
import Menu from "../components/modules/Menu/Menu.vue"
import util from "../util"
import user from '../store/modules/user'
Vue.use(Router)

let func = user.getters.getRoutes;

export default store => {
  const route=  {
    path: '/',
    name: 'home',
    component: util.load("components/common","Home"),
    children:[{
      path:'/menu',
      name:"菜单管理",
      component:Menu,
    }]
  };
  route.children = [...route.children,...store.getters.getRoutes]
  return new Router({
    routes: [
      {
        path: '/login',
        name:"login",
        component: util.load("components/modules/Login","Login"),
        meta: { notRequire: true }
      },
      ...[route],
    ]
  })
}
