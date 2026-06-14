<template>
  <div ref="container" class="carousel-item-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div ref="image" class="carousel-img" :style="imagePosition">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="showWord" />
    </div>
    <div ref="title" class="title">
      {{ carousel.title }}
    </div>
    <div ref="desc" class="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
import { debounce } from '@/utils'

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
      descWidth: 0,
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    this.setSize()
    this.mouseX = this.centerPosition.left
    this.mouseY = this.centerPosition.top
    window.addEventListener('resize', this.setSize)

    this.handleMouseMoveDebounce = debounce((e) => {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
    }, 30)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize)
    this.handleMouseMoveDebounce = null
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return
      }
      const extraWidth = this.innerSize.width - this.containerSize.width
      const extraHeight = this.innerSize.height - this.containerSize.height
      const left = -extraWidth / this.containerSize.width * this.mouseX
      const top = -extraHeight / this.containerSize.height * this.mouseY
      return { transform: `translate(${left}px, ${top}px)` }
    },
    centerPosition() {
      return {
        left: this.containerSize.width / 2,
        top: this.containerSize.height / 2
      }
    }
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
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      }
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      }
    },
    handleMouseMove(e) {
      this.handleMouseMoveDebounce(e)
    },
    handleMouseLeave() {
      this.mouseX = this.centerPosition.left
      this.mouseY = this.centerPosition.top
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    transition: .3s;
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