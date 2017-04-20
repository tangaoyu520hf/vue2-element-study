import Vue from "vue";
import Router from "vue-router";
import Home from "../components/common/Home.vue";
import Menu from "../components/modules/Menu/Menu.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
          path:'menu',
          name:"菜单管理",
          component:Menu,
      }]
    }
  ]
})
