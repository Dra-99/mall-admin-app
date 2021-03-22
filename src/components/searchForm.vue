<template>
  <div class="search-area">
    <a-form-model
      layout="inline"
      :model="searchForm"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item label="检索关键字">
        <a-input v-model="searchForm.searchWord" placeholder="请输入关键字">
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="商品类目">
        <a-select
          allowClear
          show-search
          placeholder="选择类目"
          style="width: 200px"
          @change="handleChange"
        >
          <a-select-option
            v-for="cate in categoryList"
            :key="cate.id"
            :value="cate.id"
          >
            {{ cate.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit"> 搜索 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from '../api/getCategory';

export default {
  data() {
    return {
      // 保存表单中用到的信息
      searchForm: {
        searchWord: '',
        category: '',
      },
      // 保存类目信息
      categoryList: [],
    };
  },
  created() {
    // console.log(11);
    api.categoryList().then((res) => {
      console.log(res);
      this.categoryList = res.data;
    });
  },
  methods: {
    // 表单提交时处理函数
    handleSubmit() {
      this.$emit('submit', this.searchForm);
    },
    // 类目选择变化时处理函数
    handleChange(val) {
      // console.log(val);
      this.searchForm.category = val;
    },
  },
};
</script>

<style scoped>
.search-area {
  padding: 10px 30px;
}
</style>
