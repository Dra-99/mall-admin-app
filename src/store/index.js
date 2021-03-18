import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '@/util/useCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    userInfo: getCookie(),
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
  },
  modules: {
  },
});
