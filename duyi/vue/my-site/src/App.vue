<template>
  <div id="app">
    <Layout>
      <template slot="left">
        <div class="sidebar">
          <Sidebar />
        </div>
      </template>
      <RouterView />
    </Layout>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Layout from '@/layout'

export default {
  name: 'App',
  components: { Sidebar, Layout, },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

#app {
  .self-fill(fixed);
}

.sidebar {
  width: 250px;
  height: 100%;
}
</style>