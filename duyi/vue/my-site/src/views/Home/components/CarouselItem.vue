<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="showWord" />
      <div ref="title" class="title">
        {{ carousel.title }}
      </div>
      <div ref="desc" class="desc">
        {{ carousel.description }}
      </div>
    </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'

export default {
  components: { ImageLoader },
  props: {
    carousel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    // this.showWord()
  },
  methods: {
    showWord() {
      this.$refs.title.style.opacity = 1
      this.$refs.title.style.width = 0
      this.$refs.title.clientWidth // 强制重绘
      this.$refs.title.style.transition = '1s'
      this.$refs.title.style.width = this.titleWidth + 'px'

      this.$refs.desc.style.opacity = 1
      this.$refs.desc.style.width = 0
      this.$refs.desc.clientWidth // 强制重绘
      this.$refs.desc.style.transition = '3s 1s'
      this.$refs.desc.style.width = this.descWidth + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.carousel-item-container {
  background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;

  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title,
  .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, .5);
    white-space: nowrap;
    opacity: 0;
    overflow: hidden;
  }

  .title {
    top: calc(50% - 60px);
    font-size: 2em;
  }

  .desc {
    top: 50%;
    font-size: 1.2em;
    color: lighten(@gray, 20%)
  }
}
</style>