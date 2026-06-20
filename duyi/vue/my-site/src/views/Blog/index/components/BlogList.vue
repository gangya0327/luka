<template>
  <div ref="listContainer" v-loading="isLoading" class="blog-list-container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div v-if="item.thumb" class="thumb">
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <img :src="item.thumb" alt="bbb" title="ccc">
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span> 日期：{{ item.createDate }}</span>
            <span> 浏览量：{{ item.scanNumber }}</span>
            <span> 评论数：{{ item.commentNumber }}</span>
            <RouterLink :to="{ name: 'BlogCategory', params: { categoryId: item.category.id } }">
              {{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pagination
      :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :page-count="5"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import fetchData from '@/mixins/fetchData'
import mainScroll from '@/mixins/mainScroll'
import { getBlogList } from '@/api/blog'

export default {
  components: { Pagination },
  mixins: [fetchData({}), mainScroll('listContainer')],
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return { categoryId, page, limit }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true
      this.$refs.listContainer.scrollTop = 0
      this.data = []
      this.data = await this.fetchData()
      this.isLoading = false
    }
  },
  methods: {
    async fetchData() {
      return await getBlogList(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      }
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({ name: 'Blog', query })
      } else {
        this.$router.push({ name: 'BlogCategory', query, params: { categoryId: this.routeInfo.categoryId } })
      }
    },
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

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
        min-width: 240px;
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