<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-friends_add" :size="24" />
        </div>
        <span>{{ data.name }}</span>
      </a>
      <div class="pop">
        <img src="https://inews.gtimg.com/news_bt/OQoIp8QUTCBE22bGHbx42TiBAAZzg3HODrYc1658W7fC8AA/0" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-mail" :size="24" />
        </div>
        <span>{{ data.email }}</span>
      </a>
      <div class="pop">
        <img src="https://inews.gtimg.com/om_bt/Ow_l9u2rc2N-o5AGIFrh1rmVO9wAVOxHa8dbIVYkGM6hEAA/0" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-phonebook" :size="24" />
        </div>
        <span>{{ data.phone }}</span>
      </a>
      <div class="pop">
        <img src="https://inews.gtimg.com/news_bt/ONzmfQUYpVwB6iyXJJy5aGoh_jCw-mD9yfgnKcARA3W-EAA/0" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-voice" :size="24" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img src="https://inews.gtimg.com/news_bt/Op7FyTlVJKboQzNwfaOMQrs5GYWPdLOt44vT1n2BhDVXcAA/641" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'
import { mapState } from 'vuex';

export default {
  components: { Icon },
  data() {
    return {
      originLoaded: false, // 用于控制原图的显示与隐藏
      allLoaded: false, // 用于控制占位图的显示与隐藏
    }
  },
  computed: {
    ...mapState('setting', ['data'])
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    margin: 14px 0;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: @itemHeight;
    font-size: 14px;
  }

  .icon {
    font-size: 26px;
    width: 36px;
  }

  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 15px;
    background: #fff;
    border-radius: 4px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    font-size: 0;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    &::after {
      content: '';
      transform: translateX(-50%) rotate(45deg);
      position: absolute;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #fff;
      bottom: -5px;
    }
  }
}
</style>