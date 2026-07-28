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
  <div
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="[{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }, { 'lt-sm:(bg-black h-full)': show }]"
  >
    <Container>
      <RouterLink to="/" pr-10>
        <img src="@/assets/logo4.png" w-16 h-full py-2 lt-sm:mx-auto />
      </RouterLink>
      <div
        class="hidden text-gray-300 text-2xl absolute right-3 top-3 cursor-pointer hover:text-white lt-sm:block"
        @click="toggleMenu()"
      >
        <Transition name="rotate-icon" mode="out-in">
          <div v-if="show" i-mage-multiply></div>
          <div v-else i-mage-arrowlist></div>
        </Transition>
      </div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>

  <RouterView></RouterView>

  <div>
    <div class="mobile-hide">
      <DefaultFooter></DefaultFooter>
    </div>
    <div class="mobile hidden">
      mobile footer
      <MobileNavbar></MobileNavbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
