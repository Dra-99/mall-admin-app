<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="">用户</a></a-breadcrumb-item>
        <a-breadcrumb-item>关于</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <ul>
        <li>
          用户信息
          <a-icon type="down" />
        </li>
        <li>退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>
