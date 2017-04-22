// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8080';
Vue.http.options.emulateJSON = true;
//添加请求前的 header中的 token值以及请求后的 错误处理
Vue.http.interceptors.push((request, next)  => {
  let userinfo = store.state.user.userinfo;
  if(userinfo&&userinfo.token){
    request.headers.append("Authorization","Basic "+userinfo.token);
  }
  // continue to next interceptor
  next((response) => {
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
