<template>
  <div class="app-container">
    <div style="margin-top: 15px">
      <el-input v-model="input" placeholder="请输入分类" class="input-with-select">
        <el-select slot="prepend" v-model="select" placeholder="请选择" style="width: 80px">
          <el-option label="一级" :value="1" />
          <el-option label="二级" :value="2" />
          <el-option label="三级" :value="3" />
        </el-select>
      </el-input>
      <el-button type="primary" style="margin-left: 10px" @click="handleAdd">添加</el-button>
    </div>

    <el-table v-loading="listLoading" :data="data" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="类别" align="center" />
      <el-table-column prop="order" label="等级" align="center" />
      <el-table-column prop="articleCount" label="博客数量" align="center" />
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
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

    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="400px">
      <el-form :model="form">
        <el-form-item label="类别">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="等级">
          <el-select v-model="form.order" placeholder="请选择" style="width: 100%">
            <el-option label="一级" :value="1" />
            <el-option label="二级" :value="2" />
            <el-option label="三级" :value="3" />
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditBlogType">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getBlogTypeList, addBlogType, delBlogType, editBlogType } from '@/api/blogType'

export default {
  data() {
    return {
      input: '',
      select: 1,
      data: [],
      listLoading: false,
      dialogVisible: false,
      form: {
        name: '',
        order: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getBlogTypeList().then((res) => {
        this.listLoading = false
        this.data = res.data
      })
    },
    handleAdd() {
      if (this.input) {
        addBlogType({ name: this.input, order: this.select }).then((res) => {
          this.fetchData()
          this.$message.success('添加成功')
        })
      } else {
        this.$message.error('请输入分类名称')
      }
    },
    handleEdit(item) {
      this.form = { ...item }
      this.dialogVisible = true
    },
    handleEditBlogType() {
      editBlogType(this.form).then(() => {
        this.dialogVisible = false
        this.$message.success('修改成功')
        this.fetchData()
      })
    },
    handleDelete(item) {
      this.$confirm('删除该分类吗？删除后改分类下所有博客将变为未分类状态', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delBlogType(item.id).then(() => {
            this.fetchData()
            this.$message.success('删除成功')
          })
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-with-select {
  width: 400px;
  margin-bottom: 20px;
}
</style>
