<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="data" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" align="center">
        <template slot-scope="scope">
          <el-tooltip effect="light" placement="top">
            <template #content>
              <el-image :src="server_url + scope.row.thumb" style="width: 200px" />
            </template>
            <span>{{ scope.row.title }}</span>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column prop="description" label="描述" />
      <el-table-column prop="scanNumber" width="100" label="浏览量" />
      <el-table-column prop="commentNumber" width="100" label="评论数" />
      <el-table-column label="所属分类" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.category ? scope.row.category.name : '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建日期" width="200">
        <template slot-scope="scope">{{ parseTime(scope.row.createDate) }}</template>
      </el-table-column>
      <el-table-column label="操作" width="140" align="center">
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
import { getBlogList, delBlog } from '@/api/blog'
import { server_url } from '@/utils/config'
import { parseTime } from '@/utils'

export default {
  data() {
    return {
      data: [],
      server_url,
      form: {
        id: '',
        midImg: '',
        bigImg: '',
        title: '',
        description: ''
      },
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
      getBlogList({ page: this.pagerCurrentPage, limit: this.eachPage }).then((res) => {
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
    handleEdit(item) {
      this.$router.push('/blog/edit/' + item.id)
    },
    handleDelete(item) {
      this.$confirm('删除该文章吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delBlog(item.id).then(() => {
            this.fetchData()
            this.$message.success('删除成功')
          })
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    handleEditBanner() {
      const arr = [...this.data]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === this.form.id) {
          arr[i] = this.form
        }
      }
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
