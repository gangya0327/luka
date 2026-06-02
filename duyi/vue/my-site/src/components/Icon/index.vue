<template>
  <i :class="`iconfont ${type}`" :style="{ fontSize: size + 'px' }" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_4885896_hmw97jlzgv7.css';

.iconfont {
  font-size: 30px;
}
</style>