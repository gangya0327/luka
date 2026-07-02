<template>
  <div class="app-container">
    <div class="block">项目名称</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.name" placeholder="请输入项目名称" />
    </div>

    <div class="block">描述（每一项描述用英文逗号分割）</div>
    <el-input v-model="form.description" type="textarea" rows="5" placeholder="请输入描述" />

    <div class="block">预览图</div>
    <Upload v-model="form.thumb" />

    <div class="block">链接</div>
    <el-input v-model="form.url" placeholder="请输入链接" />

    <div class="block">github</div>
    <el-input v-model="form.github" placeholder="请输入github" />

    <div class="block">排序</div>
    <el-select v-model="form.order" placeholder="请选择" style="width: 100%">
      <el-option label="一级" :value="1" />
      <el-option label="二级" :value="2" />
      <el-option label="三级" :value="3" />
    </el-select>

    <div class="block">
      <el-button type="primary" @click="handleAdd">添加项目</el-button>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import { addProject } from '@/api/project'

export default {
  components: { Upload },
  data() {
    return {
      form: { name: '', description: '', thumb: '', url: '', github: '', order: 1 }
    }
  },
  methods: {
    handleAdd() {
      addProject({
        ...this.form,
        description: this.form.description.split(',')
      }).then(() => {
        this.$message.success('添加成功')
        this.$router.push('/project/list')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 800px;
  margin: 0 auto;
}

.block {
  margin: 15px 0;
  font-weight: 100;
}
</style>
