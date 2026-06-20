<template>
  <div class="blog-comment-container">
    <MessageArea
      :is-list-loading="isLoading" :list="data.rows" title="评论列表" :sub-title="`（${data.total} ）`"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import { getBlogComment, addBlogComment } from '@/api/blog'

export default {
  components: { MessageArea },
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total
    }
  },
  methods: {
    async fetchData() {
      return await getBlogComment()
    },
    async fetchMore() {
      if (!this.hasMore) return
      this.isLoading = true
      this.page++
      const res = await this.fetchData()
      this.data.rows = this.data.rows.concat(res.rows)
      this.isLoading = false
    },
    async handleSubmit(formData, callback) {
      const res = await addBlogComment({
        blogId: this.$route.params.id,
        ...formData
      })
      callback('评论成功')
      this.data.rows.unshift(res)
      this.data.total++
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) return
      const range = 100
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (dec <= range) {
        console.log('bottom')
        this.fetchMore()
      }
    }
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>