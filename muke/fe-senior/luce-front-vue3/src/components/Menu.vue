<script setup lang="ts"></script>

<template>
  <div flex bg-gray>
    <RouterLink class="link" to="/">产品</RouterLink>
    <a class="link" href="https://cn.vuejs.org/" target="_blank">社区</a>
    <RouterLink class="link" to="/study">学习</RouterLink>
    <RouterLink class="link" to="/about">关于</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply text-white text-xl px-8 py-2 font-300 relative;

  &:hover {
    @apply font-500;

    &:after {
      @apply content-none absolute bg-gray-100 w-8 h-1 bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
