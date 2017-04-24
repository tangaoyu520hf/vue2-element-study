import Vue from "vue";
import Router from "vue-router";
import Menu from "../components/modules/Menu/Menu.vue"
import util from "../util"
import user from '../store/modules/user'
Vue.use(Router)

export default store => {
  const route=  {
    path: '/',
    name: 'home',
    component: util.load("components/common","Home"),
    children:[]
  };
  route.children = [...route.children,...store.getters.getRoutes]
  const router = new Router({
    routes: [
      {
        path: '/login',
        name:"login",
        component: util.load("components/modules/Login","Login"),
        meta: { notRequire: true }
      },
      ...[route],
    ]
  });

  router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.notRequire)) {
      // check if logged in
      // if not, redirect to login page.
      let userinfo = store.state.user.userinfo;
      if (!userinfo) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  })
  return router;
}
