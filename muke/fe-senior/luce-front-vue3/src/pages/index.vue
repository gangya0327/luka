<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/home">home</RouterLink> |
    <RouterLink to="/about">about</RouterLink>
    <h1>This is index page</h1>
    <div p-4 text-teal-600>hello unocss</div>
  </div>
</template>
