<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="">404 page</div>
  <RouterView></RouterView>
  <el-button type="primary" @click="router.push('/')">返回</el-button>
</template>

<style lang="scss" scoped></style>
