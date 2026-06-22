<template>
  <div class="menu-container">
    <RouterLink
      v-for="(item, index) in menus" :key="index" :exact="item.exact" active-class="selected"
      exact-active-class="" :to="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon" :size="20" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
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
          icon: 'icon-home',
          exact: true // 判断是否精确匹配
        },
        {
          link: '/blog',
          title: '博客',
          icon: 'icon-content',
          // startsWith: true // 判断是否以 blog 开头
          exact: false // 判断是否精确匹配
        },
        {
          link: '/about',
          title: '关于',
          icon: 'icon-personal',
          exact: true // 判断是否精确匹配
        },
        {
          link: '/project',
          title: '项目',
          icon: 'icon-pay',
          exact: true // 判断是否精确匹配
        },
        {
          link: '/message',
          title: '留言',
          icon: 'icon-chat',
          exact: true // 判断是否精确匹配
        },
      ]
    }
  },
  methods: {
    // isSelected(item) {
    //   const link = item.link.toLowerCase()
    //   const pathname = location.pathname.toLowerCase()
    //   if (item.startWith) {
    //     return pathname.startsWith(link)
    //   }
    //   else {
    //     return pathname === link
    //   }
    // }
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
      background: darken(@word, 3%);
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