<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<template>
  <div fixed top-0 w-full z-50 :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }">
    <Container>
      <img src="@/assets/logo3.png" w-20 h-full />
      <Menu></Menu>
    </Container>
  </div>

  <RouterView></RouterView>

  <div h-4000px></div>

  <div>footer</div>
</template>

<style lang="scss" scoped></style>
