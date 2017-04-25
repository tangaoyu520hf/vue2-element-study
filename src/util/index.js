/**
 * Created by tangaoyu on 2017/4/23.
 */
/**
 * 懒加载 component
 * @param url
 * @param component
 * @returns {function(): *}
 */
function load (component) {//按需加载组件
  console.info(`../${component}.vue`);
  return () => System.import(`../${component}.vue`)
}

const util = {};
util.load = load;


export default util
