<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="data" highlight-current-row border style="width: 100%">
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="项目名称" align="center">
        <template slot-scope="scope">
          <a class="column-url" :href="scope.row.url" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述">
        <template slot-scope="scope">{{ scope.row.description.join(',') }}</template>
      </el-table-column>
      <el-table-column label="预览图" width="180" align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 120px"
            :src="server_url + scope.row.thumb"
            :preview-src-list="[server_url + scope.row.thumb]"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-share"
            size="mini"
            @click="handleShare(scope.row)"
          />
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="handleEdit(scope.row)"
          />
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="handleDelete(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑信息" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="项目名称">
          <el-input v-model="form.name" placeholder="请输入项目名称" />
        </el-form-item>
        <el-form-item label="描述（每一项描述用英文逗号分割）">
          <el-input v-model="form.description" type="textarea" rows="5" placeholder="请输入描述" />
        </el-form-item>
        <el-form-item label="预览图">
          <Upload v-model="form.thumb" />
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.url" placeholder="请输入链接" />
        </el-form-item>
        <el-form-item label="github">
          <el-input v-model="form.github" placeholder="请输入github" />
        </el-form-item>
        <el-form-item label="排序">
          <el-select v-model="form.order" placeholder="请选择" style="width: 100%">
            <el-option label="一级" :value="1" />
            <el-option label="二级" :value="2" />
            <el-option label="三级" :value="3" />
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditProject">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getProjectList, editProject, delProject } from '@/api/project'
import { server_url } from '@/utils/config'
import { parseTime } from '@/utils'
import Upload from '@/components/Upload'

export default {
  components: { Upload },
  data() {
    return {
      data: [],
      listLoading: false,
      server_url,
      dialogVisible: false,
      form: { name: '', description: '', thumb: '', url: '', github: '', order: 1 }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    parseTime,
    fetchData() {
      this.listLoading = true
      getProjectList().then((res) => {
        this.listLoading = false
        this.data = res.data
      })
    },
    handleShare(item) {
      window.open(item.github)
    },
    handleEdit(item) {
      this.form = { ...item, description: item.description.join(',') }
      this.dialogVisible = true
    },
    handleEditProject() {
      const data = {
        ...this.form,
        description: this.form.description.split(','),
        order: Number(this.form.order)
      }
      editProject(data).then(() => {
        this.fetchData()
        this.$message.success('修改成功')
        this.dialogVisible = false
      })
    },
    handleDelete(item) {
      this.$confirm('删除该项目吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delProject(item.id).then(() => {
          this.fetchData()
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.column-url {
  color: #53bcf5;
}
</style>
