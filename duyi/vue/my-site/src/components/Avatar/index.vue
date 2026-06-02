<template>
  <img class="avatar-container" :src="url" :width="width" :height="height" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>