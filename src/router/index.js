import Vue from "vue";
import Router from "vue-router";
import util from "../util";
Vue.use(Router)

export default store => {
  const route = {
    path: '/',
    component: util.load("components/common/Home"),
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'welcome'
      },
    }, {
      path: '/welcome',
      name: "welcome",
      component: util.load("components/common/Welcome"),
      meta: {
        applicationCode: "welcome"
      }
    }]
  };
  let routes = [
    {
      path: '/login',
      name: "login",
      component: util.load("components/modules/Login/Login"),
      meta: {notRequire: true}
    },
      ...[route],
      ...store.getters.getRoutes]
  const router = new Router({
    routes: routes/*[
      {
        path: '/login',
        name: "login",
        component: util.load("components/modules/Login/Login"),
        meta: {notRequire: true}
      },
      {
        path: '/test',
        name: "test",
        component: util.load("components/common/Context"),
        meta: {notRequire: true}
      },*/
      /*      {
       path: '',
       icon: 'inbox',
       component: util.load("components/common/Home"),
       children: [{
       hidden: true,
       path: '',
       redirect: to => {
       return 'appli'
       }
       },
       {
       path: '',
       icon: 'inbox',
       component: util.load("components/common/Context"),
       children: [{
       hidden: true,
       path: '',
       redirect: to => {
       return 'appli2'
       }
       },{
       path: '/appli2',
       icon: 'inbox',
       component: util.load("components/modules/Login/Login"),


       }

       ]
       }
       ]
       }*/
    /*]*/
  });

  router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.notRequire)) {
      // check if logged in
      // if not, redirect to login page.
      let userinfo = store.state.user.userinfo;
      if (!userinfo) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
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
