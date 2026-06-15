<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index" @click="handleItem(item)">
      <div :class="{ active: item.selected }" class="info">
        <span class="name">{{ item.name }}</span>
        <span v-if="item.sub" class="sub">{{ item.sub }}</span>
      </div>
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
  },
  methods: {
    handleItem(item) {
      if (item.selected) return
      this.$emit('select', item)
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
    cursor: pointer;

    .info {
      display: flex;

      .name {
        width: 50px;
      }

      .sub {
        color: @gray;
        font-size: 16px;
      }

      &.active {
        color: @primary;
        font-weight: bold;

        .sub {
          color: @primary;
        }
      }
    }
  }
}

ul {
  list-style: none;
  padding: 0;
}
</style>