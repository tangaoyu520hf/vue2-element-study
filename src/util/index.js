/**
 * Created by tangaoyu on 2017/4/23.
 */
/**
 * 懒加载 component
 * @param url
 * @param component
 * @returns {function(): *}
 */
function load (url,component) {//按需加载组件
  let _router=url||'components';
  console.info(`../${_router}/${component}.vue`);
  return () => System.import(`../${_router}/${component}.vue`)
}

const util = {};
util.load = load;


export default util
