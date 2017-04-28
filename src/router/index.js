import Vue from "vue";
import Router from "vue-router";
import util from "../core/util";
Vue.use(Router)

export default store => {
  let routes = [
    {
      path: '/login',
      name: "login",
      component: util.load("components/modules/Login/Login"),
      meta: {notRequire: true}
    },
    {
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
    }, ...store.getters.getRoutes]
  const router = new Router({
    mode: 'history',
    routes: routes
  });

  router.beforeEach((to, from, next) => {
    let token = store.state.user.userinfo.token;
    //如果直接是公开的 则直接就 next
    if(to.matched.some(record => record.meta.notRequire)){
      next();
    }else{
      //用户没有登录 但是访问的页面又不是登录页面 则跳转到登录
      if (!token && to.path !== '/login') {
        next({
          path: '/login',
          params: {redirect: to.path}
        })
      }else{
        //如果已经登录 但是访问页面又是 登录 则直接跳转到 欢迎页
        if ( to.path === '/login') {
          next({
            path: '/welcome'
          });
        } else {
          next();
        }
      }
    }
  })
  return router;
}
