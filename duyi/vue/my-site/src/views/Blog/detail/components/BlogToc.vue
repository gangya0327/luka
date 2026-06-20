<template>
  <div class="blog-toc-container">
    <h2> 目录</h2>
    <RightList :list="tocWithSelected" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from '../../index/components/RightList'
import { debounce } from '@/utils';

export default {
  components: { RightList },
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeAnchor: ''
    }
  },
  computed: {
    // 添加选中样式的 toc
    tocWithSelected() {
      const getToc = (toc = []) => {
        return toc.map(t => ({
          ...t,
          selected: t.anchor === this.activeAnchor,
          children: getToc(t.children)
        }))
      }
      return getToc(this.toc)
    },
    // 获取 toc 的数组列表
    tocDoms() {
      const doms = []
      const addToList = toc => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length) {
            addToList(t.children)
          }
        }
      }
      addToList(this.toc)
      return doms
    }
  },
  created() {
    const debounceSetActiveSelect = debounce(this.setActiveSelect, 100)
    this.$bus.$on('mainScroll', debounceSetActiveSelect)
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    setActiveSelect(dom) {
      if (!dom) return
      this.activeAnchor = ''
      const range = 100
      for (const dom of this.tocDoms) {
        if (!dom) continue
        const top = dom.getBoundingClientRect().top // 获取元素距离顶部的距离
        if (top >= 0 && top <= range) { // 获取元素距离顶部小于200
          this.activeAnchor = dom.id
        } else if (top > range) { // 获取元素距离顶部大于200
          return
        } else { // 获取元素距离顶部小于0
          this.activeAnchor = dom.id
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>