<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useMouseInElement } from '@vueuse/core'

const target = useTemplateRef('target')
const { x, y, isOutside } = useMouseInElement(target)

const text = ref('hello text')
</script>

<template>
  <div>
    <RouterLink to="/home">home</RouterLink> |
    <RouterLink to="/about">about</RouterLink>
    <h1>This is index page</h1>
    <div p-4 text-teal-600>hello unocss</div>
    <div ref="target" bg-green p-10>{{ text }}</div>
    <div>屏幕鼠标位置： {{ x }} - {{ y }} - {{ isOutside }}</div>

    <user-component></user-component>
  </div>
</template>
