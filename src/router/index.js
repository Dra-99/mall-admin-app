import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
// 在组件中使用store不需要引用
import store from '../store';
// import Login from '../views/layout/Login.vue'

import getUseRoutes from '../util/getUseRoutes';

Vue.use(VueRouter);

// 所有页面内使用的路由
const asyncRouters = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    hidden: false,
    icon: 'taobao',
  },
  component: Home,
  children: [
    {
      path: '/productList',
      name: 'ProductList',
      meta: {
        title: '商品列表',
        hidden: false,
        icon: 'unordered-list',
      },
      component: () => import('../views/layout/page/productList.vue'),
    },
    {
      path: '/productAdd',
      name: 'ProductAdd',
      meta: {
        title: '新增商品',
        hidden: false,
        icon: 'arrow-up',
      },
      component: () => import('../views/layout/page/productAdd.vue'),
    },
    {
      path: '/diyList',
      name: 'DiyList',
      meta: {
        title: '定义类目',
        hidden: false,
        icon: 'codepen',
      },
      component: () => import('../views/layout/page/diyList.vue'),
    },
  ],
}];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home',
    },
    children: [
      {
        path: '/index',
        meta: {
          title: '统计',
          hidden: false,
          icon: 'line-chart',
        },
        name: 'Index',
        component: () => import('../views/layout/page/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/layout/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

// 路由拦截
let isBoolean = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.userInfo.username && store.state.userInfo.appkey && store.state.userInfo.role) {
      // console.log(menuRender);
      if (!isBoolean) {
        const menuRender = getUseRoutes(store.state.userInfo.role, asyncRouters);

        store.dispatch('changeMenuList', routes.concat(menuRender)).then(() => {
          next();
          router.addRoutes(menuRender);
        });
        isBoolean = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
