<script setup lang="ts">
interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone: string
  address: string
}

interface FootItem {
  icp?: string
  copyright?: string
  links?: LinkType[]
  contacts?: ContactsType
}

withDefaults(defineProps<FootItem>(), {
  icp: '京ICP备2021037322号',
  copyright: 'yingml',
  links: () => [
    { title: 'DeepSeek', url: 'https://www.deepseek.com/' },
    { title: 'ChatGPT', url: 'https://chat.openai.com/' },
    { title: 'Claude Code', url: 'https://claude.ai/' },
  ],
  contacts: () => ({
    email: 'yingml@gmail.com',
    phone: '191-7070-7070',
    address: '中国 杭州 拱墅区',
  }),
})
</script>

<template>
  <div bg-coolGray-700 text-coolGray-400 text-sm py-4>
    <Container flex-col>
      <!-- 菜单 -->
      <div w-full flex justify-between items-center>
        <ul flex flex-1 justify-start>
          <li><RouterLink class="link" to="/home">产品</RouterLink></li>
          <li><a class="link" href="https://cn.vuejs.org/" target="_blank">社区</a></li>
          <li><RouterLink class="link" to="/study">学习</RouterLink></li>
          <li><RouterLink class="link" to="/about">关于</RouterLink></li>
        </ul>
        <div flex items-center pr-10 text-2xl z-1>
          <div class="group relative">
            <i class="i-ic-baseline-wechat" cursor-pointer></i>
            <img
              src="@/assets/images/icon1.png"
              class="w-20 h-20 rounded absolute top-0 left-50% translate-x-[-50%] translate-y-[-100%]"
              group-hover:block
              hidden
              max-w-unset
            />
          </div>
          <div class="group relative">
            <i class="i-bi-sina-weibo" ml-4 cursor-pointer></i>
            <img
              src="@/assets/images/icon2.png"
              class="w-20 h-20 rounded absolute top-0 left-50% translate-x-[-50%] translate-y-[-100%]"
              group-hover:block
              hidden
              max-w-unset
            />
          </div>
        </div>
      </div>
      <div my-4 border-b-1 border-b-coolGray-600 w-full></div>

      <!-- 介绍 -->
      <ul w-full flex justify-start mb-4>
        <li>
          <div text-gray-200 font-500 flex items-center pb-4>
            <i i-material-symbols-call-sharp mr-2></i>
            <span> 联系信息</span>
          </div>
          <p>
            邮箱：<a :href="'mailto: ' + contacts.email">{{ contacts.email }}</a>
          </p>
          <p>电话：{{ contacts.phone }}</p>
          <p>地址：{{ contacts.address }}</p>
        </li>
        <li ml-10>
          <div text-gray-200 font-500 flex items-center pb-4>
            <i i-whh-friends mr-2></i>
            <span>友链信息</span>
          </div>
          <p v-for="link in links" :key="link.title">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </p>
        </li>
      </ul>

      <!-- ICP备案 -->
      <div flex w-full justify-center>
        Copyright &copy; {{ copyright }} 2021-{{ new Date().getFullYear() }}
        <a flex pl-2 items-center href="https://beian.miit.gov.cn/" target="_blank">
          <i class="i-twemoji-flag-for-flag-china" w-4 h-4 mr-2></i>
          <span>{{ icp }}</span>
        </a>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply px-4 text-gray-400;
}
</style>
