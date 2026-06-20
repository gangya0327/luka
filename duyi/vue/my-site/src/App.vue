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
    <ToTop />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Layout from '@/layout'
import ToTop from '@/components/ToTop'

export default {
  name: 'App',
  components: { Sidebar, Layout, ToTop },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

#app {
  .self-full();
}

.sidebar {
  width: 250px;
  height: 100%;
}
</style>