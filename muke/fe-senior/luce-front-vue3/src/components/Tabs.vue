<script setup lang="ts" generic="T">
defineProps({
  items: {
    type: Array as PropType<T[]>,
    default: () => [],
  },
})

const activeIndex = defineModel<number>({ default: 0, local: true })
</script>

<template>
  <div border-b-1 border-b-color-gray-300>
    <ul class="tabs" flex w-full>
      <li
        class="px-4 py-2 cursor-pointer"
        :class="{ active: activeIndex === index }"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  .active {
    @apply text-sky-400 relative;

    &:after {
      @apply content-empty absolute bg-sky-400 w-8 h-2px bottom-0 left-12 transform-translate-x--1/2;
    }
  }
}
</style>
