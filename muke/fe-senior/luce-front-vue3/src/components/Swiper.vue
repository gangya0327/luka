<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperItemType } from '@/components/types'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

const props = defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => [],
  },
  height: {
    type: String,
    default: 'h-200',
  },
})

const modules = [Navigation, Pagination]

function getClassAndStyle(str: string) {
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : '',
  }
}

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <swiper
    :modules="modules"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    :slides-per-view="1"
    :space-between="0"
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top flex flex-col justify-center"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container h-full>
            <div flex flex-col>
              <p class="text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>

    <div
      class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-black-300 w-40 h-16 z-30"
    >
      <div class="pagination w-unset" font-500 mr-4></div>
      <div i-line-md-chevron-small-double-left class="prev" text-6></div>
      <div i-line-md-chevron-small-double-right class="next" text-6></div>
    </div>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper-button-disabled {
  color: rgba(0, 0, 0, 0.3);
}
</style>
