<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from './'

export default {
  components: {
    Empty
  },
  data() {
    return {
      current: 8
    }
  },
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
  width: 500px;
  height: 400px;
  border: 2px solid #ccc;
  margin: 0 auto;
  position: relative;
}
</style>