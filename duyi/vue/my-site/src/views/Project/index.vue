<template>
  <div ref="projectContainer" v-loading="isLoading" class="project-container">
    <div v-for="item in data" :key="item.id" class="project-item">
      <img v-lazy="item.thumb" class="thumb" :src="item.thumb" alt="">
      <div class="info">
        <h2>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
          <a class="github" :href="item.github">github</a>
        </h2>
        <p v-for="desc in item.description" :key="desc">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mainScroll from '@/mixins/mainScroll';

export default {
  mixins: [mainScroll('projectContainer')],
  computed: {
    ...mapState('project', ['data', 'isLoading'])
  },
  mounted() {
    this.$store.dispatch('project/fetchProject')
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;

  .project-item {
    transition: .5s;
    padding: 10px;
    display: flex;
    margin-bottom: 20px;
    border-radius: 2px;
    box-shadow: 1px 1px 3px #aaa;

    &:hover {
      transform: scale(1.01) translate(1px, -1px);
      color: inherit;
    }

    .thumb {
      width: 260px;
      height: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
    }

    .info {
      line-height: 1.2;
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }

      .github {
        font-size: 14px;
        color: @primary;
        margin-left: 20px;
      }
    }
  }
}
</style>