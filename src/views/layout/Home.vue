<template>
  <div class="home">
    <!-- 我可以直接从这个父组件中进行赋值，入下 -->
    <menu-list></menu-list>
     <!-- <menu-list></menu-list> -->
    <div class="main-app" :class="{ 'menu-unfold': $store.state.collapsed }">
      <main-header></main-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/mainHeader.vue';
import MenuList from './components/menuList.vue';

export default {
  components: {
    MainHeader,
    MenuList,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang='less'>
@import url("~@/assets/css/home.less");
</style>
