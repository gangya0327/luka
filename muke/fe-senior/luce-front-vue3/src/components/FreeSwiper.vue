<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

const modules = [Autoplay, FreeMode]

interface ItemsType {
  items: string[]
}

defineProps<ItemsType>()

const { width } = useWindowSize()
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="width > 640 ? 4 : 2"
    :autoplay="{ pauseOnMouseEnter: true }"
    :space-between="50"
    :free-mode="true"
    :pagination="{ clickable: true }"
    loop
    v-bind="$attrs"
  >
    <swiper-slide py-4 v-for="(item, index) in items" :key="index">
      <div px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100>
        <div
          class="w-full h-full bg-contain bg-no-repeat bg-center"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
    </swiper-slide>
  </swiper>
</template>
