<script setup lang="ts"></script>

<template>
  <div class="">user-component</div>
  <el-button type="primary">测试按钮</el-button>
  <el-button type="success">测试按钮</el-button>

  <!-- <i-carbon-accessibility />
  <i-mdi-account-box style="font-size: 2em; color: red" /> -->
  <icon-mdi-account />

  <!-- 来自 Phosphor 图标的基本锚点图标 -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- 来自 Material Design Icons 的橙色警报 -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- 大型 Vue 徽标 -->
  <div class="i-logos-vue text-3xl" />
  <!-- 亮模式下的太阳，暗模式下的月亮，来自 Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- 笑脸表情，悬停时变为流泪表情 -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</template>

<style lang="scss" scoped></style>
