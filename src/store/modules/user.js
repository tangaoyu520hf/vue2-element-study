/**
 * Created by tangaoyu on 2017/4/20.
 */
import {
  localStorage
} from '@/core/store'
import util from "@/core/util"
const module = {
  state:{
    //登录成功后的用户信息
    userinfo: localStorage.get('userinfo') || {},
    menuListByApplicaion:[],
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
      state.userinfo = {...state.userinfo,...userInfo};
      localStorage.set("userinfo",state.userinfo);
    },
    logout(state){
      state.userinfo = {}
      localStorage.set("userinfo",state.userinfo);
    }
  },
  getters: {
    getTopMenus: state => {
      let menus =  state.userinfo.menuList||[];
      return menus
    },
    getSubMenus: (state,getters) => {
        let menus = []
        if(state.userinfo.menuList){
          state.userinfo.menuList.forEach((obj,index) =>menus=[...menus,...obj.children]);
        }
        menus.push({menuName:"欢迎页",menuCode:"/welcome",menuUrl:"/welcome",applicationCode:"welcome"})
        return menus
    },
    getRoutes: (state,getters) => {
        return getRoutes(getters.getTopMenus);
    },
  },
}
/**
 * 获取路由菜单
 * @param data
 * @returns {*}
 */
function getRoutes(menus) {
  let routes = [];
  menus.forEach((currentValue,index) => {
    let route = {
      path: currentValue.menuCode,
      component: util.load(currentValue.menuUrl),
      meta:{
        applicationCode:currentValue.applicationCode
      }
    };
    if(currentValue.children.length>0){
      route.children = [{
        path: '',
        hidden: true,
        redirect: to => {return currentValue.children[0].menuCode}
      },...getRoutes(currentValue.children)]
    }
    routes.push(route);
  });
  return routes;
}

export default module
