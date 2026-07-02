<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="data" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="头像" width="120" align="center">
        <template slot-scope="scope">
          <el-image style="width: 50px" :src="server_url + scope.row.avatar" />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" width="180" label="昵称" />
      <el-table-column prop="scanNumber" label="评论文章">
        <template slot-scope="scope">{{ scope.row.blog.title }}</template>
      </el-table-column>
      <el-table-column prop="scanNumber" label="评论内容">
        <template slot-scope="scope">{{ scope.row.content }}</template>
      </el-table-column>

      <el-table-column prop="createDate" label="评论日期" width="200">
        <template slot-scope="scope">{{ parseTime(scope.row.createDate) }}</template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="handleDelete(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 30px"
      background
      :page-size="eachPage"
      :page-sizes="[5, 10, 20, 50]"
      layout="prev, pager, next, total, ->, sizes, jumper"
      :current-page.sync="pagerCurrentPage"
      :total="count"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { getCommentList, delComment } from '@/api/comment'
import { server_url } from '@/utils/config'
import { parseTime } from '@/utils'

export default {
  data() {
    return {
      data: [],
      form: {
        id: '',
        midImg: '',
        bigImg: '',
        title: '',
        description: ''
      },
      server_url,
      listLoading: false,
      // 分页
      currentPage: 1, // 当前页
      eachPage: 5, // 每页显示的条数
      totalPage: 0, // 总页数
      count: 0, // 总条数
      pagerCurrentPage: 1 // 分页组件当前页
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCommentList({ page: this.pagerCurrentPage, limit: this.eachPage }).then((res) => {
        this.listLoading = false
        this.data = res.data.rows
        this.count = res.data.total
        this.totalPage = Math.ceil(this.count / this.eachPage)
        if (this.currentPage > this.totalPage) {
          this.currentPage = this.totalPage
          this.fetchData()
        }
      })
    },
    parseTime,
    handleDelete(item) {
      this.$confirm('删除该评论吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delComment(item.id).then(() => {
            this.fetchData()
            this.$message.success('删除成功')
          })
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    handleSizeChange(size) {
      this.eachPage = size
      this.currentPage = 1
      this.pagerCurrentPage = 1
      this.fetchData()
    },
    handleCurrentChange(page) {
      this.pagerCurrentPage = page
      this.fetchData()
    }
  }
}
</script>
