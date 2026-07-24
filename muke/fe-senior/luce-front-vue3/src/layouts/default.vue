<script setup lang="ts">
const { y } = useWindowScroll()

const [show, toggleMenu] = useToggle(false)
const isMenuHidden = ref(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggleMenu(true)
    isMenuHidden.value = false
  } else {
    if (isMenuHidden.value) return
    toggleMenu(false)
    isMenuHidden.value = true
  }
})
</script>

<template>
  <div fixed top-0 w-full z-50 :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }">
    <Container>
      <img src="@/assets/logo4.png" w-16 h-full py-2 lt-sm:mx-auto />
      <div
        class="i-mage-arrowlist"
        hidden
        text-gray-300
        text-2xl
        absolute
        right-3
        top-3
        cursor-pointer
        hover:text-white
        lt-sm:block
        @click="toggleMenu()"
      ></div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>

  <RouterView></RouterView>

  <div h-2000px></div>

  <div>
    <div class="mobile-hide">default footer</div>
    <div class="mobile hidden">mobile footer</div>
  </div>
</template>
