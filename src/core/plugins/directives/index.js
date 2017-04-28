/**
 * Created by tangaoyu on 2017/4/28.
 */
export default {
  install(Vue) {
    Vue.directive('authority', {
      inserted: function (el, binding, vnode) {
        const $route = vnode.context.$route;
        const user = vnode.context.$store.state.user.userinfo;
        let isAuthority = false;
        if($route &&
           $route.path &&
           binding.arg &&
           user ){
          let paths = $route.path.split("/");
          if(paths.length>1){
            let menuPath = paths[1]+paths[paths.length-1];
            let roleFunction = user.roleFunctions[menuPath];
            if(roleFunction&&roleFunction.length>0){
              isAuthority = roleFunction[0].functionDTOList.some(operat => operat.functionCode===binding.arg);
            }
          }
        }
        if(!isAuthority&&el.parentNode){
          el.parentNode.removeChild(el);
        }
      }
    })
  }
};
