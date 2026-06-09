<template>
  <div class="sidebar-container">
    <Avatar :url="require('@/assets/avatar.png')" :width="160" :height="160" />
    <h2 class="title">
      欢迎来到我的空间
    </h2>
    <MenuComp />
    <Contact />
    <p class="footer">
      浙 ICP 备 18259 号
    </p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from '@/components/Sidebar/Contact'
import MenuComp from '@/components/Sidebar/Menu'

export default {
  components: { Avatar, Contact, MenuComp },
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

  .avatar-container {
    margin: 20px auto;
  }

  .footer {
    text-align: center;
    font-size: 12px;
  }

  .title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }
}
</style>