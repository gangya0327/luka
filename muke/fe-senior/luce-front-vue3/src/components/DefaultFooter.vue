<script setup lang="ts">
defineProps({
  icp: {
    type: String,
    default: '京ICP备2021037322号',
  },
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
        <div flex items-center pr-10 text-lg>
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
          <div text-gray-200 font-500 text-lg flex items-center pb-4>
            <i i-material-symbols-call-sharp mr-2></i>
            <span> 联系信息</span>
          </div>
          <p>邮箱：yingml@gmail.com</p>
          <p>电话：191-7070-7070</p>
          <p>地址：中国 杭州 拱墅区</p>
        </li>
        <li ml-10>
          <div text-gray-200 font-500 text-lg flex items-center pb-4>
            <i i-whh-friends mr-2></i>
            <span> 友链信息</span>
          </div>
          <p>DeepSeek</p>
          <p>ChatGPT</p>
          <p>Claude Code</p>
        </li>
      </ul>

      <!-- ICP备案 -->
      <div flex w-full justify-center>
        Copyright &copy; yingml 2021-{{ new Date().getFullYear() }}
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
