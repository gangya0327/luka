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

    <div mb-10 flex justify-around>
      <div class="grid-container1">
        <div class="item" style="grid-area: a">1</div>
        <div class="item" style="grid-area: b">2</div>
        <div class="item" style="grid-area: c">3</div>
        <div class="item" style="grid-area: d">4</div>
        <div class="item" style="grid-area: e">5</div>
        <div class="item" style="grid-area: f">6</div>
        <div class="item" style="grid-area: g">7</div>
        <div class="item" style="grid-area: h">8</div>
        <div class="item" style="grid-area: i">9</div>
      </div>

      <div class="grid-container2">
        <div class="item bg-amber" style="grid-row: 1 / 2; grid-column: 1 / span 4">1</div>
        <div class="item bg-coolGray" style="grid-row: 2 / span 2; grid-column: 1 / span 2">2</div>
        <div class="item bg-cyan" style="grid-area: c; grid-row: 2; grid-column: 3 / span 2">3</div>
        <div class="item bg-fuchsia" style="grid-area: d; grid-row: 3; grid-column: 3">4</div>
        <div class="item bg-indigo" style="grid-area: e; grid-row: 3; grid-column: 4">5</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  width: 300px;
  height: 100px;
}

.grid-container1 {
  width: 45vw;
  display: grid;
  border: 1px solid #777;
  grid-template-rows: 90px repeat(2, 200px);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'a . b'
    'c d e'
    'f . g'
    'h i .';

  .item {
    width: 60px;
    height: 60px;
    border: 1px solid #e50;
  }
}

.grid-container2 {
  display: grid;
  width: 45vw;
  border: 1px solid #777;

  .item {
    width: 100%;
  }
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
