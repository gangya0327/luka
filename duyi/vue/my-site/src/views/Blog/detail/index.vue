<template>
  <Layout>
    <div ref="mainContainer" v-loading="isLoading" class="main-container">
      <BlogDetail :blog="data" />
      <BlogComment />
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
import BlogComment from './components/BlogComment.vue'

export default {
  components: { Layout, BlogDetail, BlogToc, BlogComment },
  mixins: [fetchData({})],
  data() {
    return {
      scrollTop: 0
    }
  },
  mounted() {
    this.$bus.$on('mainScrollTo', this.handleScrollTo)
    this.$refs.mainContainer.addEventListener('scroll', this.handleScroll)
  },
  updated() {
    const hash = location.hash
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50)
  },
  beforeDestroy() {
    this.$bus.$emit('mainScroll')
    this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll)
    this.$bus.$off('mainScrollTo', this.handleScrollTo)
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
    handleScroll() {
      this.$bus.$emit('mainScroll', this.$refs.mainContainer)
    },
    handleScrollTo(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop
    }
  },
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
  scroll-behavior: smooth;
}

.toc-container {
  width: 400px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 16px;
  font-size: 12px;
}
</style>