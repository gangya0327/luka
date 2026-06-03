<template>
  <div class="test-container">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './'
import '@/styles/global.less'

export default {
  components: {
    Sidebar
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
  width: 250px;
  height: 600px;
  border: 2px solid #ccc;
  margin: 0 auto;
}
</style>