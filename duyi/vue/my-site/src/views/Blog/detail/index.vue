<template>
  <Layout>
    <div v-loading="isLoading" class="main-container">
      <BlogDetail :blog="data" />
    </div>
    <template #right>
      <div v-loading="isLoading" class="toc-container">
        <BlogToc :toc="data.toc || []" />
      </div>
    </template>
  </Layout>
</template>

<script>
import { getBlog } from '@/api/blog'
import fetchData from '@/mixins/fetchData'
import Layout from '@/layout'
import BlogDetail from './components/BlogDetail.vue'
import BlogToc from './components/BlogToc.vue'

export default {
  components: { Layout, BlogDetail, BlogToc },
  mixins: [fetchData({})],
  data() {
    return {

    }
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.id)
    },
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/markdown.less';

.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.toc-container {
  width: 420px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  font-size: 13px;
}
</style>