<template>
  <div class="sidebar-container">
    <Avatar :url="require('@/assets/avatar.png')" :width="160" :height="160" />
    <h2 class="title">
      {{ data.siteTitle }}
    </h2>
    <MenuComp />
    <Contact />
    <p class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from '@/components/Sidebar/Contact'
import MenuComp from '@/components/Sidebar/Menu'
import { mapState } from 'vuex';

export default {
  components: { Avatar, Contact, MenuComp },
  computed: {
    ...mapState('setting', ['data'])
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
@import '~@/styles/variables.less';

.sidebar-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .avatar-container {
    margin: 20px auto;
  }

  .title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }

  .menu-container {
    flex: 1;
  }

  .footer {
    text-align: center;
    font-size: 12px;
    color: darken(@gray, 10%);
  }
}
</style>