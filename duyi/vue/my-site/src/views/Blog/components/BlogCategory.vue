<template>
  <div class="blog-category-container">
    BlogCategory
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.right-list-container {
  .right-list-container {
    margin-left: 1.2em;
  }

  li {
    min-height: 40px;
    line-height: 40px;

    .active {
      color: @primary;
      font-weight: bold;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
}
</style>