<template>
  <div class="test-container">
    <ImageLoader
      src="https://cdnfile.sspai.com/2026/06/01/article/e89a0793acbd0b1fbc20e96cb49362ae.jpeg?imageMogr2/auto-orient/format/webp/ignore-error/1"
      placeholder="https://cdnfile.sspai.com/2026/06/01/article/3c534bdc67d7b896b047c5821190ae00.jpeg?imageMogr2/auto-orient/format/webp/ignore-error/1"
      :duration="2000"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from './'

export default {
  components: {
    ImageLoader
  },
  methods: {
    handleLoad() {
      console.log('Image loaded');
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
  width: 500px;
  height: 500px;
  border: 2px solid #ccc;
  margin: 0 auto;
}
</style>