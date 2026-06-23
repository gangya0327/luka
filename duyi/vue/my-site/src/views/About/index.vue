<template>
  <div v-loading="!iframeLoaded || loading" class="about-container">
    <iframe v-if="src" class="content" :src="src" frameborder="0" @load="iframeLoaded = true" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      iframeLoaded: false
    }
  },
  computed: {
    ...mapState('about', {
      src: 'data',
      loading: 'isLoading'
    })
  },
  mounted() {
    this.$store.dispatch('about/fetchAbout');
  }
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>