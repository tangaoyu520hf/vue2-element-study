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
    },
    initMenuList(state,index){
      let menusList;
      if("/welcome"===index){
        menusList = [{menuName:"欢迎页",menuCode:"/welcome",menuUrl:"/welcome",applicationCode:""}]
      }else{
        if(state.userinfo.menuList&&index){
          menusList = state.userinfo.menuList.filter(obj =>obj.menuCode===index)[0].children;
        };
      }
      state.menuListByApplicaion = menusList
    }
  },
  getters: {
    getTopMenus: state => {
      let menus =  state.userinfo.menuList||[];
      return menus
    },
    getSubMenus: (state,getters) => {
      let menus =  state.menuListByApplicaion;
      return menus
    },
    getRoutes: (state,getters) => {
      return getRoutes(getters.getTopMenus);
    },
  },
}

/**
 * 只获取最下一级菜单 到路由中
 * @param data
 * @returns {*}
 */
/*function getRoutes(menus = [], routes = []) {
  menus.forEach((currentValue,index) => {
    let route = {
      path: currentValue.menuUrl,
      component: util.load("components/modules/Login", "Login"),
      meta: {
        applicationCode: currentValue.applicationCode
      }
    }
    if(currentValue&& currentValue.children.length>0){
    };

    routes.push(route);
    getRoutes(currentValue.children,routes);
  return routes;
}*/

/**
 * 只获取最下一级菜单 到路由中
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
