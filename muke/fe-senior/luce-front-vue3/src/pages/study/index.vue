<script setup lang="ts">
import recommend from '@/data/recommend.json'

const activeIndex = ref(1)
</script>

<template>
  <div class="">
    <!-- 推荐内容 -->
    <Container>
      <div text-2xl font-bold pb-2 pt-6>推荐内容</div>
    </Container>
    <Container>
      <div grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4>
        <a
          flex
          transition-all
          class="group hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
          :href="item.courseUrl"
          v-for="(item, index) in recommend"
          :key="index"
        >
          <Card
            w-full
            class="card"
            :image="item.coverImage"
            border
            imageType="rounded"
            :title="item.courseName"
          >
            <template #default>
              <div mx-4 flex items-center text-sm text-gray-500 mb-2 group-hover:text-white>
                <span mr-2>{{ item.promotionTag }}</span>
                |
                <span ml-2>{{ item.category || '-' }}</span>
              </div>
              <div mx-4 flex justify-between items-center text-gray-500 mb-2 group-hover:text-white>
                <div>
                  <span mr-2>¥{{ item.currentPrice }}</span>
                  <span>{{ item.enrollmentCount }} 人学习</span>
                </div>
                <div i-mdi:cart text-xl text-sky-400></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 每日一课 -->
    <Container>
      <div text-3xl font-bold pb-2 pt-6>每日一课</div>
    </Container>
    <Container flex-col>
      <!-- tabs -->
      <Tabs :items="['Java', 'Vue', 'React', 'Vite']" v-model="activeIndex"></Tabs>
      <!-- grid -->
      <div grid grid-cols-6 w-full gap-3>
        <div col-start-1 col-span-2 row-start-1 row-span-2 bg-cyan>1</div>
        <div col-start-3 col-span-4 grid grid-cols-4 gap-3>
          <div h-30 bg-emerald>2</div>
          <div bg-amber>3</div>
          <div>4</div>
          <div>5</div>
          <div h-30>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </Container>
    <!-- 精品微课 -->
    <Container>
      <div text-3xl font-bold pb-2 pt-6>精品微课</div>
    </Container>
    <!-- 学习计划 -->
    <Container>
      <div text-3xl font-bold pb-2 pt-6>学习计划</div>
    </Container>
    <Container>
      <div w-full grid grid-cols-2 sm:grid-cols-4 gap-3>
        <div
          w-full
          lt-sm:px-4
          h-40
          flex
          items-center
          cursor-pointer
          v-for="(item, index) in recommend"
          :key="index"
        >
          <div relative w-full h-full rounded-3>
            <img
              absolute
              w-full
              h-full
              object-contain
              :src="item.coverImage + '?v=' + Date.now()"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </Container>
    <!-- 优质专栏 -->
    <Container>
      <div text-3xl font-bold pb-2 pt-6>优质专栏</div>
    </Container>
  </div>
</template>
