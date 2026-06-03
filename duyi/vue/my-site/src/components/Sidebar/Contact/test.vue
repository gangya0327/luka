<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './'
import '@/styles/global.less'

export default {
  components: { Contact },
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
  width: 400px;
  height: 400px;
  border: 2px solid #ccc;
  background: #313131;
  margin: 0 auto;
  padding-top: 200px;
}
</style>