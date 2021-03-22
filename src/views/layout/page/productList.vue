<template>
    <div class="search-area">
        <search-form @submit="searchData"/>
    </div>
</template>

<script>
import SearchForm from '@/components/searchForm.vue';

export default {
  components: {
    SearchForm,
  },
  methods: {
    searchData(form) {
      console.log(form);
    },
  },
};
</script>
