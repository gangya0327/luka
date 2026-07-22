<script setup lang="ts"></script>

<template>
  <div flex>
    <RouterLink class="link" to="/home">产品</RouterLink>
    <a class="link" href="https://cn.vuejs.org/" target="_blank">社区</a>
    <RouterLink class="link" to="/study">学习</RouterLink>
    <RouterLink class="link" to="/about">关于</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply text-white text-xl px-8 py-2 font-300 relative cursor-pointer;

  &:hover {
    @apply font-400;

    &:after {
      @apply content-none absolute bg-gray-100 w-8 h-1px bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
