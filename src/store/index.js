/**
 * Created by tangaoyu on 2017/4/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import user from './modules/user'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    user
  }
});
