<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="info">
      <span>日期：{{ blog.createDate }}</span>
      <span>浏览量：{{ blog.scanNumber }}</span>
      <RouterLink to="">
        评论数：{{ blog.commentNumber }}
      </RouterLink>
      <RouterLink to="">
        {{ blog.category?.name }}
      </RouterLink>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown-body" v-html="blog.htmlContent" />
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.blog-detail-container {
  .info {
    font-size: 12px;
    color: @gray;

    span,
    a {
      margin-right: 15px;
    }
  }
}

.markdown-body {
  margin: 2em 0;
}
</style>