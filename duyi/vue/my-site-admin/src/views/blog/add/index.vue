<template>
  <div class="app-container">
    <div class="block">文章标题</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.title" placeholder="请输入标题" />
    </div>

    <div class="block">文章编辑</div>
    {{ form.editorText }}
    <Editor ref="toastuiEditor" :options="editorOptions" :initial-value="form.editorText" height="400px" />

    <div class="block">文章描述</div>
    <el-input v-model="form.description" type="textarea" rows="5" placeholder="请输入描述" />

    <div class="block">文章封面</div>
    <Upload v-model="form.thumb" />

    <div class="block">文章类别</div>
    <el-select v-model="select" placeholder="请选择" style="width: 100%">
      <el-option v-for="item in blogTypeList" :key="item.id" :label="item.name" :value="item.id" />
    </el-select>

    <div class="block">
      <el-button type="primary" @click="handleAdd">添加文章</el-button>
    </div>
  </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn'
import Upload from '@/components/Upload'
import { getBlogTypeList } from '@/api/blogType'
import { addBlog, getBlog, editBlog } from '@/api/blog'

export default {
  components: { Editor, Upload },
  data() {
    return {
      form: {
        title: '',
        editorText: '',
        description: '',
        thumb: ''
      },
      select: '',
      blogTypeList: [],
      imageUrl: '',
      editorOptions: {
        language: 'zh-CN'
      }
    }
  },
  created() {
    getBlogTypeList().then((res) => {
      this.blogTypeList = res.data
      this.form.select = res.data[0].id
    })
    if (this.$route.params.id) {
      getBlog(this.$route.params.id).then((res) => {
        this.form = res.data
        this.select = res.data.category.id
        this.form.editorText = this.$refs.toastuiEditor.invoke('setHTML', res.data.htmlContent)
      })
    }
  },
  methods: {
    handleAdd() {
      const html = this.$refs.toastuiEditor.invoke('getHTML')
      const markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      const data = {
        title: this.form.title,
        description: this.form.description,
        createDate: new Date().getTime(),
        categoryId: this.select,
        toc: [],
        htmlContent: html,
        markdownContent: markdown,
        thumb: this.form.thumb,
        id: this.$route.params.id
      }
      if (!this.form.title || !this.form.description || !html || !this.select) {
        this.$message.error('请填写完整信息')
        return
      }
      if (this.$route.params.id) {
        editBlog(data).then(() => {
          this.$message.success('修改成功')
          this.$router.push('/blog/list')
        })
      } else {
        addBlog(data).then(() => {
          this.$message.success('添加成功')
          this.$router.push('/blog/list')
        })
      }
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
