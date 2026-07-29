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

import project from '@/data/project.json'
import type Swiper from 'swiper'

const selectItem = ref<SwiperItemType>(items[0]!)

function handleSwiperChange(e: Swiper) {
  const index = e.realIndex
  selectItem.value = items[index] as SwiperItemType
}

const partners = ref([
  'https://www.imooc.com/static/img/index-v3/company/zte.png',
  'https://www.imooc.com/static/img/index-v3/company/shdz.png',
  'https://www.imooc.com/static/img/index-v3/company/ct.png',
  'https://www.imooc.com/static/img/index-v3/company/tu.png',
  'https://www.imooc.com/static/img/index-v3/company/gsbank.png',
  'https://www.imooc.com/static/img/index-v3/company/sa.png',
  'https://www.imooc.com/static/img/index-v3/company/chr.png',
  'https://www.imooc.com/static/img/index-v3/company/hgd.png',
  'https://www.imooc.com/static/img/index-v3/company/picc.png',
  'https://www.imooc.com/static/img/index-v3/company/smc.png',
  'https://www.imooc.com/static/img/index-v3/company/chsl.png',
  'https://www.imooc.com/static/img/index-v3/company/bjjt.png',
])
</script>

<template>
  <div>
    <Swiper :items="items" :height="30 * themeStore.rate + 'rem'"></Swiper>

    <Container>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            技术因分享而生生不息。我们致力于将一线实战中的工程思考、架构设计与最佳实践，化作可复用的种子，播撒到每一位开发者的土壤中，共同成长，彼此成就。
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>

    <Container>
      <!-- 内容 -->
      <div grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4>
        <a
          flex
          transition-all
          class="group hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
          :href="item.link"
          v-for="(item, index) in project"
          :key="index"
        >
          <Card
            w-full
            class="card"
            :image="item.cover"
            border
            imageType="rounded"
            :title="item.title"
            :subTitle="item.intro"
          >
            <template #default>
              <div mx-4 flex items-center text-sm text-gray-500 mb-4 group-hover:text-white>
                查看更多
                <div i-line-md-chevron-small-double-right></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>

    <!-- 课程项目展示 -->
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">课程项目展示</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
        </div>
      </div>
    </Container>

    <Container class="w-full text-gray-400">
      <Swiper
        :items="items"
        :height="28 * themeStore.rate + 'rem'"
        class="w-full sm:w-2/3"
        loop
        @change="handleSwiperChange"
      ></Swiper>
      <div
        class="lt-sm:hidden sm:(w-1/3) bg-coolGray-700 self-stretch flex flex-col justify-center px-4"
      >
        <a v-if="selectItem" :href="selectItem.url" target="_blank">
          <div class="text-xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
          <div class="text-sm">{{ selectItem.subTitle }}</div>
          <div class="flex items-center mt-6 text-gray-300">
            <span>查看更多</span>
            <div class="i-mdi:arrow-right-thin text-2xl"></div>
          </div>
        </a>
      </div>
    </Container>

    <!-- 合作伙伴 -->
    <Container>
      <div class="text-2xl font-bold mt-8">合作伙伴</div>
    </Container>
    <Container>
      <FreeSwiper :items="partners"></FreeSwiper>
    </Container>

    <Container py-4>
      <div class="w-2/3 h-400px">
        <div grid grid-cols-4 grid-rows-3 h-full gap-4 p-4>
          <div border col-start-1 col-span-4 row-start-1 row-span-1 bg-cyan>1</div>
          <div border col-start-1 col-span-2 row-start-2 row-span-2 bg-violet>2</div>
          <div border col-start-3 col-span-2 row-start-2 row-span-1 bg-pink>3</div>
          <div border col-start-3 col-span-1 row-start-3 row-span-1 bg-lime>4</div>
          <div border col-start-4 col-span-1 row-start-3 row-span-1 bg-teal>5</div>
        </div>
      </div>
      <div class="w-1/3">
        <div text-2xl font-bold pb-4>讲师团队</div>
        <div text-sm text-gray-400>
          <p>一线大厂，资深工程师</p>
          <p>技术专家定期分享行业动态</p>
          <p>前端，后端，全栈</p>
          <p>深度解析热门技术，提升开发效率</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
:deep(.card) {
  &:hover {
    p {
      color: white;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
