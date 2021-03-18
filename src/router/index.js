import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
// 在组件中使用store不需要引用
import store from '../store';
// import Login from '../views/layout/Login.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/layout/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.userInfo.username && store.state.userInfo.appkey && store.state.userInfo.role) {
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
