<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <!-- <Avatar url="https://picsum.photos/id/996/300/240" :width="60" :height="60" /> -->
      <Avatar :url="item.avatar" :width="60" :height="60" />
      <div class="data">
        <div class="nickname">
          {{ item.nickname }}
        </div>
        <div class="content">
          {{ item.content }}
        </div>
        <div class="time">
          {{ item.createDate }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  components: { Avatar },
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

.data-list-container {
  li {
    display: flex;
    border-bottom: 1px solid lighten(@gray, 20%);
    padding: 15px 0;

    .avatar-container {
      margin-right: 15px;
    }

    .data {
      position: relative;
      flex: 1;

      .nickname {
        color: darken(@success, 10%);
        margin-bottom: 10px;
      }

      .content {
        font-size: 14px;
      }

      .time {
        position: absolute;
        top: 5px;
        right: 0;
        font-size: 12px;
        color: @gray;
      }
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>