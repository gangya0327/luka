<template>
  <div class="blog-comment-container">
    <MessageArea :is-list-loading="isLoading" :list="data.rows" title="评论列表" :sub-title="`${data.total} 条评论`" />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import { getBlogComment } from '@/api/blog'

export default {
  components: { MessageArea },
  mixins: [fetchData({total: 0, rows: []})],
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  methods: {
    async fetchData() {
      return await getBlogComment()
    },
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>