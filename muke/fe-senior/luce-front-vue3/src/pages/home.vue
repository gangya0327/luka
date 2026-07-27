<script setup lang="ts">
import bg1 from '@/assets/images/bg1.jpeg'
import { useMouseInElement } from '@vueuse/core'

const target = useTemplateRef('target')
const { x, y, isOutside } = useMouseInElement(target)

const text = ref('hello text')
</script>

<template>
  <div class="">
    <div flex mt-20 gap-10>
      <Card icon="i-mdi-home-account" border title="标题" subTitle="这是一段描述内容"></Card>
      <Card :image="bg1" border imageType="avatar" title="标题" subTitle="这是一段描述内容"></Card>
      <Card :image="bg1" border imageType="rounded" title="标题" subTitle="这是一段描述内容"></Card>
    </div>

    <div p-4 text-teal-600>hello unocss</div>
    <div ref="target" bg-green p-10>{{ text }}</div>
    <div>屏幕鼠标位置： {{ x }} - {{ y }} - {{ isOutside }}</div>

    <div class="test">测试移动端样式转换</div>

    <div h-500px></div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  width: 300px;
  height: 100px;
}
</style>

<!-- <route lang="yaml">
name: home
redirect:
  path: /
</route> -->

<!-- <route lang="yaml">
{ name: 'home', redirect: '/' }
</route> -->
