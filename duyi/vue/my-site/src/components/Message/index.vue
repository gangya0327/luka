<template>
  <div class="message-container">
    <header>
      <slot name="header" />
    </header>
    <slot />
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.message-container {
  .self-center(fixed);
  border: 2px solid #ccc;
  padding: 20px;
}
</style>