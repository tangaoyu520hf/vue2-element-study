/**
 * Created by tangaoyu on 2017/4/20.
 */

const menuModule = {
  state:{ headerIndex:'1' },
  mutations:{
    setHeadIndex(state,applicationCode){
      state.headerIndex = applicationCode
    }
  }
}
export default menuModule
