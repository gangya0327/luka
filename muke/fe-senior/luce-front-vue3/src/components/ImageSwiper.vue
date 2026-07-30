<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

const { width } = useWindowSize()

const props = defineProps({
  height: {
    type: Number,
    default: 1200,
  },
  items: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  titles: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
})

const swiperRef = ref<SwiperType>()
const activeIndex = ref(0)

const modules = [Navigation, Pagination, Autoplay]

const emits = defineEmits(['change'])

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}
const onSlideChange = (e: SwiperType) => {
  emits('change', e)
  activeIndex.value = e.realIndex
}
const handleClickTab = (index: number) => {
  swiperRef.value?.slideTo(index, 500)
  activeIndex.value = index
}
</script>

<template>
  <div py-4>
    <!-- tab 按钮 -->
    <ul flex justify-evenly items-center w-full pb-4>
      <li
        v-for="(item, index) in titles"
        :key="index"
        flex
        flex-col
        items-center
        cursor-pointer
        transition-all
        text-gray-400
        :class="[{ active: activeIndex === index }, 'item']"
        @click="handleClickTab(index)"
      >
        <div text-2xl border-b-2 pb-2 px-2 class="line">{{ index + 1 }}</div>
        <div pt-4 class="text">{{ item }}</div>
      </li>
    </ul>
    <!-- swiper -->
    <swiper
      :modules="modules"
      :autoplay="{ delay: 10000, pauseOnMouseEnter: true }"
      :slides-per-view="1"
      :space-between="0"
      :style="{ height: (width / 1200) * height + 'px' }"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :pagination="{
        clickable: true,
        bulletClass: 'inline-block w-3 h-3 rounded-1/2 bg-gray-300 z-20 mr-4 cursor-pointer',
        bulletActiveClass: 'w-8! bg-orange rounded-3',
      }"
      loop
      v-bind="$attrs"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item">
          <div
            class="w-full h-full bg-cover bg-no-repeat bg-center-top"
            :style="{ backgroundImage: `url(${item})` }"
          ></div>
        </slot>
      </swiper-slide>
      <!-- slot name="pagination" -->
      <div v-if="!$attrs.pagination_hide">
        <div
          bg-white
          shadow-lg
          border
          flex
          justify-center
          items-center
          cursor-pointer
          group
          class="rounded-1/2 w-15 h-15 absolute left-2 top-1/2 transform-translate-y--1/2 z-30"
        >
          <div class="prev" i-ep:arrow-left text-gray-300 group-hover:text-gray-700 text-8></div>
        </div>
        <div
          bg-white
          shadow-lg
          border
          flex
          justify-center
          items-center
          cursor-pointer
          group
          class="rounded-1/2 w-15 h-15 absolute right-2 top-1/2 transform-translate-y--1/2 z-30"
        >
          <div class="next" i-ep:arrow-right text-gray-300 group-hover:text-gray-700 text-8></div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}

.item {
  &.active,
  &:hover {
    .line {
      color: orange;
      border-color: orange;
    }
    .text {
      color: orange;
    }
  }
}
</style>
