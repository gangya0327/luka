<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index">
      <div :class="{ active: item.selected }" class="info" @click="handleItem(item)">
        <span class="name">{{ item.name }}</span>
        <span v-if="item.sub" class="sub">{{ item.sub }}</span>
      </div>
      <RightList :list="item.children" @select="handleItem" />
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
        margin-right: 20px;
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