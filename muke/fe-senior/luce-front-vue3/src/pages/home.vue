<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import bg1 from '@/assets/images/bg1.jpeg'
import bg2 from '@/assets/images/bg2.jpeg'
import bg3 from '@/assets/images/bg3.jpeg'

const items: SwiperItemType[] = [
  {
    image: bg1,
    title: '基于AI的前端全链路开发工作流',
    subTitle: 'AI 原型设计、AI 生成前端 UI 代码、AI 对接后端接口 和 AI 代码评审',
  },
  {
    image: bg2,
    title: '提示词工程已死，Loop Engineering 称王',
    subTitle:
      '我不再提示 Claude 了，我有一堆循环在运行，它们才是在提示 Claude 并判断接下来该做什么',
  },
  {
    image: bg3,
    title: '用Superpowers打造靠谱的AI开发工作流',
    subTitle: 'AI 写代码很快，但返工更频繁。我们看似效率提升了，实际产出质量并没有真正提高',
  },
]
</script>

<template>
  <div class="">
    <Swiper :items="items" height="h-120"></Swiper>
    <div flex gap-10>
      <Card icon="i-mdi-home-account" border title="标题" subTitle="这是一段描述内容"></Card>
      <Card :image="bg1" border imageType="avatar" title="标题" subTitle="这是一段描述内容"></Card>
      <Card :image="bg1" border imageType="rounded" title="标题" subTitle="这是一段描述内容"></Card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<!-- <route lang="yaml">
name: home
redirect:
  path: /
</route> -->

<!-- <route lang="yaml">
{ name: 'home', redirect: '/' }
</route> -->
