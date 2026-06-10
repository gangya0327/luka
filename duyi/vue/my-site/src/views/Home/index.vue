<template>
  <div>
    home
    <div ref="test" style="width: 500px;height: 600px;background: #cdc;" />
    <button @click="handleMessage">
      click
    </button>
  </div>
</template>

<script>
// import { showMessage } from '@/utils';

export default {
  methods: {
    handleMessage() {
      this.$showMessage({
        content: '这是一段消息', type: 'success', duration: 3000, container: this.$refs.test, callback: () => {
          console.log('回调函数...')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>