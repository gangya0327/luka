<template>
  <div id="app">
    <Layout>
      <template slot="left">
        <div class="sidebar">
          <Sidebar />
        </div>
      </template>
      <div class="main">
        中间区域
      </div>
    </Layout>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Layout from './layout'

export default {
  name: 'App',
  components: { Sidebar, Layout, },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

#app {
  .self-fill(fixed);
  background: #cec;
}

.sidebar {
  width: 250px;
  height: 100%;
}
</style>