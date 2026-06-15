<template>
  <div v-loading="isLoading" class="blog-list-container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div v-if="item.thumb" class="thumb">
          <a href="">
            <img :src="item.thumb" alt="bbb" title="ccc">
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span> 日期：{{ item.createDate }}</span>
            <span> 浏览量：{{ item.scanNumber }}</span>
            <span> 评论数：{{ item.commentNumber }}</span>
            <a href="ccc" class="cc">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager />
  </div>
</template>

<script>
import Pager from '@/components/Pager'
import fetchData from '@/mixins/fetchData'
import { getBlogList } from '@/api/blog'

export default {
  components: { Pager },
  mixins: [fetchData({})],
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return { categoryId, page, limit }
    },
  },
  methods: {
    async fetchData() {
      return await getBlogList()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;

      img {
        display: block;
        min-width: 200px;
        border-radius: 5px;
      }
    }


    .main {
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .aside {
      font-size: 12px;
      color: @gray;

      span {
        margin-right: 15px;
      }
    }

    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}
</style>