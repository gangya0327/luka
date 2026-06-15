<template>
  <div v-if="totalPage > 1" class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">|&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">&lt;&lt;</a>
    <a v-for="(n, i) in sizes" :key="i" :class="{ active: current === n }" @click="handleClick(n)">{{ n }}</a>
    <a :class="{ disabled: current === totalPage }" @click="handleClick(current + 1)">&gt;&gt;</a>
    <a :class="{ disabled: current === totalPage }" @click="handleClick(totalPage)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    // 显示的页码数量
    pageCount: {
      type: Number,
      default: 7
    }
  },
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.limit)
    },
    // 最小页码
    minPage() {
      const num = this.current - Math.floor(this.pageCount / 2)
      return num < 1 ? 1 : num
    },
    // 最大页码
    maxPage() {
      const num = this.current + Math.floor(this.pageCount / 2)
      return num > this.totalPage ? this.totalPage : num
    },
    // 显示的页码列表
    sizes() {
      const arr = []
      for (let i = this.minPage; i <= this.maxPage; i++) {
        arr.push(i)
      }
      const minDiff = this.current - this.minPage
      const maxDiff = this.maxPage - this.current
      // 如果当前页码距离最小页码更近，则在最大页码后面补齐页码
      if (minDiff < maxDiff) {
        const mmDiff = maxDiff - minDiff
        for (let i = 0; i <= mmDiff; i++) {
          const nextPage = this.maxPage + i + 1
          if (nextPage > this.totalPage) break
          arr.push(nextPage)
        }
      }
      // 如果当前页码距离最大页码更近，则在最小页码前面补齐页码
      if (minDiff > maxDiff) {
        const mmDiff = minDiff - maxDiff
        for (let i = 0; i <= mmDiff; i++) {
          const prevPage = this.minPage - i - 1
          if (prevPage < 1) break
          arr.unshift(prevPage)
        }
      }
      return arr
    },
  },
  methods: {
    handleClick(newPage) {
      if (this.current === newPage) return
      if (newPage < 1 || newPage > this.totalPage) return
      this.$emit('pageChange', newPage)
    },
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;

    &.disabled {
      color: @light;
      cursor: not-allowed;
    }

    &.active {
      color: @word;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
