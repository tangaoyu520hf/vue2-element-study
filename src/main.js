// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerFunction from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(ElementUI)


// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let userinfo = store.state.user.userinfo;
  if(userinfo&&userinfo.token){
    config.headers.common["Authorization"]="Bearer "+userinfo.token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

//添加请求前的 header中的 token值以及请求后的 错误处理
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:routerFunction(store),
  store,
  template: '<App/>',
  components: { App }
})
