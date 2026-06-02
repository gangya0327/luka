<template>
  <div class="test-container">
    <Pager :current="current" :total="125" @pageChange="handlePageChange" />
    <Pager :current="1" :total="80" />
    <Pager :current="13" :total="200" :page-count="13" />
    <Pager :current="6" :total="62" />
  </div>
</template>

<script>
import Pager from './'

export default {
  components: {
    Pager
  },
  data() {
    return {
      current: 8
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage
    }
  }
}

// 新增以下代码，用于独立预览时自动挂载组件
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    const Vue = require('vue').default || require('vue');
    const App = require('./test.vue').default;
    new Vue({
      render: h => h(App)
    }).$mount('#app');
  }, 0);
}
</script>

<style lang="less" scoped>
.test-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
}
</style>