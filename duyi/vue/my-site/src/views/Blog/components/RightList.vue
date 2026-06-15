<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index" @click="handleItem(item)">
      <span :class="{ active: item.selected }">{{ item.name }}</span>
      <RightList :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.right-list-container {
  .right-list-container {
    margin-left: 1.2em;
  }

  li {
    min-height: 40px;
    line-height: 40px;

    .active {
      color: @primary;
      font-weight: bold;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
}
</style>