<template>
  <div class="fixed bottom-0 w-full h-14 flex justify-around z-30 shadow-2xl border-t bg-white">
    <RouterLink class="link" to="/home">
      <i i-mage-home-2-fill></i>
      <span> 首页</span>
    </RouterLink>
    <a class="link" href="https://cn.vuejs.org/" target="_blank">
      <i i-mage-compass-fill></i>
      <span> 社区</span>
    </a>
    <RouterLink class="link" to="/study">
      <i i-mage-book-fill></i>
      <span> 学习</span>
    </RouterLink>
    <RouterLink class="link" to="/about">
      <i i-mage-information-square-fill></i>
      <span> 关于</span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply flex flex-col flex-1 text-xl items-center font-300 relative cursor-pointer;

  i {
    @apply flex-1 text-dark-50;
  }

  span {
    @apply text-sm text-dark-50;
  }

  &:hover {
    @apply font-500;

    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-1px bottom-0 left-[calc(50%-1rem)];
    }
  }

  &.router-link-active {
    span,
    i {
      @apply text-main font-500;
    }
  }
}
</style>
