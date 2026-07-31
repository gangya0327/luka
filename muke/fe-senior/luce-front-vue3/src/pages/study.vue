<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore'
const themeStore = useThemeStore()

import type { SwiperItemType } from '@/components/types'
import bg1 from '@/assets/images/bg1.jpeg'
import bg2 from '@/assets/images/bg2.jpeg'
import bg3 from '@/assets/images/bg3.jpeg'

const items: SwiperItemType[] = [
  {
    image: bg1,
    title: '基于AI的前端全链路开发工作流',
    subTitle: 'AI 原型设计、AI 生成前端 UI 代码、AI 对接后端接口 和 AI 代码评审',
    url: 'https://www.deepseek.com/',
  },
  {
    image: bg2,
    title: '提示词工程已死，Loop Engineering 称王',
    subTitle: '我不再提示 Claude 了，我有一堆循环在运行，它们在提示 Claude 并判断接下来该做什么',
    url: 'https://www.baidu.com/',
  },
  {
    image: bg3,
    title: '用Superpowers打造靠谱的AI开发工作流',
    subTitle: 'AI 写代码很快，但返工更频繁。我们看似效率提升了，实际产出质量并没有真正提高',
    url: 'https://www.36kr.com/',
  },
]
</script>

<template>
  <div>
    <!-- 头部 -->
    <div relative>
      <Swiper :items="items" :height="28 * themeStore.rate + 'rem'"></Swiper>
      <div absolute bottom-0 left-0 w-full flex py-2 bg-gray-900 bg-opacity-40 z-20>
        <Container>
          <div flex justify-between w-full>
            <!-- 分类 -->
            <ul class="types" flex text-white>
              <li class="active item">每日一课</li>
              <li class="item">精品微课</li>
              <li class="item">学习计划</li>
              <li class="item">优质专栏</li>
            </ul>
            <div flex items-center>
              <!-- 搜索 -->
              <div relative bg-white rounded-6 pl-4 pr-2 h-full flex items-center>
                <input type="text" outline-none mr-2 placeholder="搜索课程" />
                <i i-ep:search></i>
              </div>
              <!-- 登录 -->
              <div text-gray-200 ml-4>
                <span mr-2 cursor-pointer hover:text-white> 登录</span>|
                <span ml-2 cursor-pointer hover:text-white> 注册</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.types {
  .item {
    @apply px-4 py-1 rounded-6 bg-gray-100 bg-opacity-20 mr-2 cursor-pointer;

    &.active,
    &:hover {
      @apply bg-white text-dark-300;
    }
  }
}
</style>
