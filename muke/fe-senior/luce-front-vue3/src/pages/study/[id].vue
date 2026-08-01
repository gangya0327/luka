<template>
  <div bg-gray-100>
    <div bg-white py-10 mb-4>
      <Container>
        <!-- 内容区域 -->
        <div flex w-full>
          <!-- 课程介绍 -->
          <div class="bg w-1/2"></div>
          <!-- 左图右文 -->
          <div class="w-1/2">
            <div text-3xl>前端高级工程师（大前端）</div>
            <div text-gray-300 mb-4 line-clamp-2>
              全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”
              ，递进式锤炼思维与高阶技能，高效实现能力跃迁，助力成为“驾驭全局，深广兼备，打通多端全栈”的高级工程师
            </div>
            <div flex text-sm text-gray-500 mb-4>
              <span pr-2>peter</span>|
              <span pl-2>资深全栈工程师</span>
            </div>
            <div text-orange-400 text-2xl mb-8>¥399</div>
            <div flex>
              <div btn mr-4>加入购物车</div>
              <div btn-plain px-10>收藏</div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <Container>
      <!-- 课程详情 -->
      <div w-full flex>
        <div class="w-3/4" bg-white mr-4>
          <!-- tabs -->
          <!-- <div border-b-1 border-b-color-gray-300>
            <ul class="tabs" flex w-full>
              <li class="active" px-4 py-2 cursor-pointer>课程介绍</li>
              <li px-4 py-2 cursor-pointer>内容目录</li>
              <li px-4 py-2 cursor-pointer>学员评价</li>
            </ul>
          </div> -->
          <Tabs :items="['课程介绍', '内容目录', '学员评价']"></Tabs>
          <!-- tabs 内容 -->
          <div p-4>
            <!-- 左边 markdown -->
            <router-view></router-view>
            <!-- 课程目录 -->
            <!-- 评价 -->
          </div>
        </div>
        <!-- 右边 侧边栏 -->
        <div class="w-1/4">
          <div bg-white h-20 mb-4>侧边栏 1</div>
          <div bg-white h-20 mb-4>侧边栏 2</div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  .active {
    @apply text-sky-400 relative;

    &:after {
      @apply content-empty absolute bg-sky-400 w-8 h-2px bottom-0 left-12 transform-translate-x--1/2;
    }
  }
}
</style>
