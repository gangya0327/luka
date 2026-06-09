<template>
  <div>
    <Message>
      <template slot="header">
        提示
      </template>
      <main>
        <p>this is a message</p>
      </main>
      <template slot="footer">
        <button> 确定</button>
        <button style="margin-left: 10px;">
          关闭
        </button>
      </template>
    </Message>
  </div>
</template>

<script>
import Message from './'

export default {
  components: { Message },
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