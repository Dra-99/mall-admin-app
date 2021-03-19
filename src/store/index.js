import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '@/util/useCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    userInfo: getCookie(),
    // 存储筛选出来的符合角色的路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userData) {
      state.userInfo = userData;
    },
    removeUserInfo(state) {
      state.userInfo = {
        username: '',
        appkey: '',
        email: '',
        role: '',
      };
    },
    changeMenuList(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userData) {
      commit('setUserInfo', userData);
      setCookie(userData);
    },
    removeUserInfo({ commit }) {
      commit('removeUserInfo');
      removeCookie();
    },
    changeMenuList({ commit }, routes) {
      commit('changeMenuList', routes);
    },
  },
  modules: {
  },
});
