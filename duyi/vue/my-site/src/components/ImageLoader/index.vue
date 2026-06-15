<template>
  <div class="image-loader-container">
    <img v-if="!allLoaded" class="placeholder" :src="placeholder">
    <img :src="src" :style="{ opacity: originOpacity, transition: `${duration}ms` }" @load="handleLoad">
  </div>
</template>

<script>

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500
    },
  },
  data() {
    return {
      originLoaded: false, // 用于控制原图的显示与隐藏
      allLoaded: false, // 用于控制占位图的显示与隐藏
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true
      setTimeout(() => {
        this.allLoaded = true
        this.$emit('load')
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-full();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(3px);
  }
}
</style>