<template>
  <div v-loading="isLoading" class="blog-category-container">
    <h2> 文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList.vue';
import fetchData from '@/mixins/fetchData'
import { getBlogCategory } from '@/api/blog'

export default {
  components: { RightList },
  mixins: [fetchData([])],
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return this.$route.query.limit || 10
    },
    list() {
      const articleTotal = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [{ name: '全部', id: -1, articleCount: articleTotal }, ...this.data]
      return result.map(item => ({
        ...item,
        selected: item.id == +this.categoryId,
        sub: item.articleCount + '篇'
      }))
    }
  },
  methods: {
    async fetchData() {
      return await getBlogCategory()
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit
      }
      if (item.id === -1) {
        this.$router.push({ name: 'Blog', query })
      } else {
        this.$router.push({ name: 'BlogCategory', query, params: { categoryId: item.id } })
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.blog-category-container {
  width: 200px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>