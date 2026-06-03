<template>
  <div class="menu-container">
    <a v-for="(item, index) in menus" :key="index" :href="item.link" :class="{ selected: isSelected(item) }">
      <div class="icon">
        <Icon :type="item.icon" :size="20" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  data() {
    return {
      menus: [
        {
          link: '/',
          title: '首页',
          icon: 'icon-home'
        },
        {
          link: '/blog',
          title: '博客',
          icon: 'icon-content',
          startWith: true // 判断是否以 blog 开头
        },
        {
          link: '/about',
          title: '关于',
          icon: 'icon-personal'
        },
        {
          link: '/project',
          title: '项目',
          icon: 'icon-pay'
        },
        {
          link: '/message',
          title: '留言板',
          icon: 'icon-chat'
        },
      ]
    }
  },
  methods: {
    isSelected(item) {
      const link = item.link.toLowerCase()
      const pathname = location.pathname.toLowerCase()
      if (item.startWith) {
        return pathname.startsWith(link)
      }
      else {
        return pathname === link
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    cursor: pointer;

    &.selected {
      background: darken(@word, 8%);
    }

    .icon {
      width: 30px;
    }

    &:hover {
      color: #fff;
    }
  }
}
</style>