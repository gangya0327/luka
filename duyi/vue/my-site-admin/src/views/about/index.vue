<template>
  <div class="app-container">
    <div class="block"> 关于我</div>
    <el-input v-model="url" placeholder="请输入内容" :disabled="disabled" />
    <el-button type="primary" style="margin-top: 15px" @click="handleClick">{{
      btnText
    }}</el-button>
  </div>
</template>

<script>
import { getAbout, editAbout } from '@/api/about'

export default {
  data() {
    return {
      url: '',
      disabled: false,
      btnText: '修改'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAbout().then((res) => {
        this.url = res.data
      })
    },
    handleClick() {
      if (this.btnText === '修改') {
        this.btnText = '完成'
        this.disabled = !this.disabled
      } else {
        if (this.url) {
          this.btnText = '修改'
          this.disabled = !this.disabled
          editAbout({ url: this.url }).then((res) => {
            this.$message.success('修改成功')
          })
        } else {
          this.$message.error('请输入内容')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  margin: 15px 0;
  font-weight: 100;
}
</style>
