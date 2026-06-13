<template>
  <div ref="container" v-loading="isLoading" class="home-container" @wheel="handleWheel">
    <ul class="carousel-container" :style="{ marginTop: marginTop }" @transitionend="handleTransitionend">
      <li v-for="item in bannerList" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>

    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="icon-up" />
    </div>
    <div v-show="index < bannerList.length - 1" class="icon icon-down" @click="switchTo(index + 1)">
      <Icon type="icon-under" />
    </div>
    <ul class="indicator">
      <li v-for="(item, i) in bannerList" :key="i" :class="{ active: index === i }" @click="switchTo(i)" />
    </ul>
  </div>
</template>

<script>
import { getBannerList } from '@/api/banner'
import CarouselItem from './components/CarouselItem.vue';
import Icon from '@/components/Icon'

export default {
  components: { CarouselItem, Icon },
  data() {
    return {
      bannerList: [],
      index: 0, // 当前轮播图索引
      containerHeight: 0, // 轮播图容器高度
      isScrolling: false, // 是否正在滚动
      isLoading: true,
    }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + 'px'
    }
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight
    window.addEventListener('resize', this.handleResize)
    getBannerList().then(res => {
      this.bannerList = res.data
      this.isLoading = false
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    switchTo(i) {
      this.index = i
    },
    handleWheel(e) {
      if (this.isScrolling) return
      if (e.deltaY < -5 && this.index > 0) {
        this.isScrolling = true
        this.index--
      } else if (e.deltaY > 5 && this.index < this.bannerList.length - 1) {
        this.isScrolling = true
        this.index++
      }
    },
    handleTransitionend() {
      this.isScrolling = false
    },
    handleResize() {
      this.containerHeight = this.$refs.container.offsetHeight
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/variables.less';

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: .5s;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    font-size: 0;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 15px;

    &-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @jump-height: 10px;

    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump-height);
      }

      50% {
        transform: translate(-50%, -@jump-height);
      }

      100% {
        transform: translate(-50%, @jump-height);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump-height);
      }

      50% {
        transform: translate(-50%, @jump-height);
      }

      100% {
        transform: translate(-50%, -@jump-height);
      }
    }
  }

  .indicator {
    .self-center();
    left: auto;
    right: 20px;

    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: @word;
      cursor: pointer;
      border: 1px solid #fff;
      margin-bottom: 10px;
      box-sizing: border-box;

      &.active {
        background: #fff;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>