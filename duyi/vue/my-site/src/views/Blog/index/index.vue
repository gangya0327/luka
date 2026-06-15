<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/layout'
import BlogList from './components/BlogList.vue'
import BlogCategory from './components/BlogCategory.vue'
    // https://juejin.cn/post/7573694361474629659

export default {
  components: { Layout, BlogList, BlogCategory },
  data() {
    return {
      list: [
        {
          name: '先搞清楚：2025 的前端到底在变什么？', selected: false, children: [
            { name: '框架红海：从“会用”到“用得值”', selected: false },
            { name: '工具有 AI，开发方式也在变', selected: false },
            {
              name: '业务侧：前端不再是“画界面”，而是“做体验 + 做增长”', selected: false, children: [
                { name: 'B 端产品', selected: false },
                { name: 'C 端产品', selected: true },
                { name: '跨平台', selected: false },
              ]
            },
          ]
        },
        {
          name: '别再死磕框架 API：2025 的前端核心能力长什么样', selected: false, children: [
            { name: '基石能力：Web 原生三件套，得真的吃透', selected: false },
            { name: '工程能力：从“会用脚手架”到“能看懂和调整工程栈”', selected: false },
            { name: '跨端和运行时：不只会“写 Web 页”', selected: false },
            { name: '数据和状态：从“会用 Vuex/Redux”到“能设计状态模型”', selected: false },
            { name: '性能、稳定性、可观测性：高级前端的硬指标', selected: false },
          ]
        },
        {
          name: '路线图别再按“框架学习顺序”排了，按角色来选', selected: false, children: [
            { name: '初中级：从“会用”到“能独立负责一个功能”', selected: false },
            { name: '进阶：从“功能前端”到“工程前端 + 业务前端”', selected: false },
            { name: '高级/资深：从“高级前端”到“前端技术负责人”', selected: false },
          ]
        },
        { name: '2025 年不要再犯的几个错误', selected: false },
        {
          name: '一个现实点的建议：给自己的 2025 做个“年度规划', selected: false, children: [
            { name: '框架红海：从“会用”到“用得值”', selected: false },
            { name: '工具有 AI，开发方式也在变', selected: false },
            { name: '业务侧：前端不再是“画界面”，而是“做体验 + 做增长”', selected: false },
          ]
        },
      ]
    }
  },
}
</script>