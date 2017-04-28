/**
 * Created by tangaoyu on 2017/4/23.
 */
export default {
  /**
   * 懒加载 component
   * @param url
   * @param component
   * @returns {function(): *}
   */
  load(component){
    console.info(`../${component}.vue`);
    return () => System.import(`@/${component}.vue`)
  }
}
