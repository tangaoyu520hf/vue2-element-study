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
    userinfo: {
        "menuList": [
          {
            "menuName": "平台管理",
            "menuCode": "/admin",
            "menuUrl": "components/common/Home",
            "menuIcon": "",
            "children": [
              {
                "menuName": "权限管理",
                "menuCode": "security",
                "menuUrl": "components/common/Context",
                "menuIcon": "security",
                "children": [
                  {
                    "menuName": "应用管理",
                    "menuCode": "application",
                    "menuUrl": "components/modules/Login/Login",
                    "menuIcon": "application",
                    "children": [ ],
                    "menuId": "0eb9d6465d654fb688164832625c07c2",
                    "applicationName": "平台管理",
                    "applicationCode": "admin"
                  },
                  {
                    "menuName": "菜单管理",
                    "menuCode": "menu",
                    "menuUrl": "components/modules/Login/Login",
                    "menuIcon": "menu",
                    "children": [ ],
                    "menuId": "e7c8fff8b4b24d95b0ed8161c8982ab4",
                    "applicationName": "平台管理",
                    "applicationCode": "admin"
                  },
                  {
                    "menuName": "功能管理",
                    "menuCode": "function",
                    "menuUrl": "components/modules/Login/Login",
                    "menuIcon": "function",
                    "children": [ ],
                    "menuId": "d100b4315f544369a2c25f9909f89e60",
                    "applicationName": "平台管理",
                    "applicationCode": "admin"
                  }
                ],
                "menuId": "1cc444e4720a4267a6f14a8ef50efd8d",
                "applicationName": "平台管理",
                "applicationCode": "admin"
              }
            ],
            "menuId": "",
            "applicationName": "平台管理",
            "applicationCode": "admin"
          }
        ],
        "roleFunctionDTOS": {
          "adminapplication": [
            {
              "roleId": "",
              "applicationCode": "admin",
              "menuCode": "application",
              "functionDTOList": [
                {
                  "functionId": "d769b600afda40baab20e56dfdfc440f",
                  "functionName": "添加",
                  "functionUrl": "application/add",
                  "sort": 1,
                  "isEnable": "Y",
                  "functionIcon": "fa-plus",
                  "functionCode": "add"
                },
                {
                  "functionId": "d769b600afda40baab20e56dfdfc4401",
                  "functionName": "查询",
                  "functionUrl": "application/add",
                  "sort": 2,
                  "isEnable": "Y",
                  "functionIcon": "",
                  "functionCode": "select"
                },
                {
                  "functionId": "6837454f6b004b9da474a6af9a3d14d9",
                  "functionName": "修改",
                  "functionUrl": "application/update",
                  "sort": 3,
                  "isEnable": "Y",
                  "functionIcon": "fa-edit",
                  "functionCode": "update"
                },
                {
                  "functionId": "c2af92a9a6fb42c7aedc2be5d4f599e1",
                  "functionName": "删除",
                  "functionUrl": "application/deletes",
                  "sort": 4,
                  "isEnable": "Y",
                  "functionIcon": "fa-remove",
                  "functionCode": "delete"
                }
              ]
            }
          ],
          "adminmenu": [
            {
              "roleId": "",
              "applicationCode": "admin",
              "menuCode": "menu",
              "functionDTOList": [
                {
                  "functionId": "d769b600afda40baab20e56dfdfc440f",
                  "functionName": "添加",
                  "functionUrl": "menu/add",
                  "sort": 1,
                  "isEnable": "Y",
                  "functionIcon": "fa-plus",
                  "functionCode": "add"
                },
                {
                  "functionId": "d769b600afda40baab20e56dfdfc4401",
                  "functionName": "查询",
                  "functionUrl": "menu/add",
                  "sort": 2,
                  "isEnable": "Y",
                  "functionIcon": "",
                  "functionCode": "select"
                },
                {
                  "functionId": "6837454f6b004b9da474a6af9a3d14d9",
                  "functionName": "修改",
                  "functionUrl": "menu/update",
                  "sort": 3,
                  "isEnable": "Y",
                  "functionIcon": "fa-edit",
                  "functionCode": "update"
                },
                {
                  "functionId": "c2af92a9a6fb42c7aedc2be5d4f599e1",
                  "functionName": "删除",
                  "functionUrl": "menu/deletes",
                  "sort": 4,
                  "isEnable": "Y",
                  "functionIcon": "fa-remove",
                  "functionCode": "delete"
                }
              ]
            }
          ],
          "adminfunction": [
            {
              "roleId": "",
              "applicationCode": "admin",
              "menuCode": "function",
              "functionDTOList": [
                {
                  "functionId": "d769b600afda40baab20e56dfdfc440f",
                  "functionName": "添加",
                  "functionUrl": "function/add",
                  "sort": 1,
                  "isEnable": "Y",
                  "functionIcon": "fa-plus",
                  "functionCode": "add"
                },
                {
                  "functionId": "d769b600afda40baab20e56dfdfc4401",
                  "functionName": "查询",
                  "functionUrl": "function/add",
                  "sort": 2,
                  "isEnable": "Y",
                  "functionIcon": "",
                  "functionCode": "select"
                },
                {
                  "functionId": "6837454f6b004b9da474a6af9a3d14d9",
                  "functionName": "修改",
                  "functionUrl": "function/update",
                  "sort": 3,
                  "isEnable": "Y",
                  "functionIcon": "fa-edit",
                  "functionCode": "update"
                },
                {
                  "functionId": "c2af92a9a6fb42c7aedc2be5d4f599e1",
                  "functionName": "删除",
                  "functionUrl": "function/deletes",
                  "sort": 4,
                  "isEnable": "Y",
                  "functionIcon": "fa-remove",
                  "functionCode": "delete"
                }
              ]
            }
          ]
        },
        "user": {
          "userId": "00010001",
          "userName": "00010001",
          "userType": "",
          "password": "123456",
          "passwordSalt": "0",
          "status": "",
          "loginFailNum": "",
          "lastLoginIp": "",
          "lastLoginMac": "2017-03-20 18:18:12",
          "lastLoginDate": "2016-07-08 10:46:30",
          "isDelete": "Y",
          "createId": "1",
          "createTime": "2016-07-08 10:46:30",
          "updateId": "00010001",
          "updateTime": "2017-04-25 15:04:14",
          "createName": "system",
          "updaterName": "system"
        }
    },
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
