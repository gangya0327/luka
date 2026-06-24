<template>
  <div class="message-container">
    <MessageArea
      :is-list-loading="isLoading" :list="data.rows" title="留言列表" :sub-title="`（${data.total}）`"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import { getMessage, addMessage } from '@/api/message';

export default {
  components: { MessageArea },
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  methods: {
    async fetchData() {
      return await getMessage(this.page, this.limit)
    },
    async handleSubmit(formData, callback) {
      const res = await addMessage(formData)
      callback('留言成功')
      this.data.rows.unshift(res)
      this.data.total++
    }
  }
}
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>