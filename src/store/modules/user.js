/**
 * Created by tangaoyu on 2017/4/20.
 */
import {
  localStorage
} from '@/util/store/store.js'
import util from "@/util"
const module = {
  state:{
    //登录成功后的用户信息
    userinfo: localStorage.get('userinfo') || {},

    //记住密码相关信息，现在暂且只做记住一个账号密码
    //后期：每次登录成功一次，就缓存到列表中，然后在登录表单，输入时，会出现下拉列表选择之前登录过得用户
    remumber: {
      remumber_flag: window.localStorage.getItem('remumber_flag') ? true : false,
      remumber_login_info: window.localStorage.getItem('remumber_login_info') || {
        username: '',
        token: ''
      }
    }
  },
  mutations:{
    setToken(state,token){
      state.userinfo.token = token
      localStorage.set("userinfo",state.userinfo);
    },
    setUserInfo(state,userInfo){
      state.userinfo = userInfo
      localStorage.set("userinfo",state.userinfo);
    },
    logout(state){
      this.setUserInfo(state,state.userinfo);
    }
  },
  getters: {
    getMenus: state => {
      return state.userinfo.menu||{}
    },
    getRoutes: state => {
      return getRoutes(state.userinfo.menu);
    },
  },
}

/**
 * 只获取最下一级菜单 到路由中
 * @param data
 * @returns {*}
 */
function getRoutes(menus = [], routes = []) {
  menus.forEach((currentValue,index) => {
    if(currentValue&& currentValue.children.length<1){
      let route = {
        path: currentValue.url,
        component: util.load("components/modules/Login","Login"),
      };
      routes.push(route);
    }else{
      getRoutes(currentValue.children,routes);
    }
  });
  return routes;
}

export default module
