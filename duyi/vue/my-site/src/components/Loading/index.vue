<template>
  <img class="loading-container" :src="imgLoading" alt="">
</template>

<script>
import imgLoading from '@/assets/loading.svg'

export default {
  data() {
    return {
      imgLoading
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.loading-container {
  .self-center();
}
</style>