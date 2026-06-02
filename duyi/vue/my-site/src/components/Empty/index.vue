<template>
  <div class="empty-container">
    <Icon type="icon-card" :size="50" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon'

export default {
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/variables.less';

.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
}
</style>