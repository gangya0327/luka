<template>
  <div class="app-container">
    <el-table :data="data" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180" align="center" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="midImg2" label="中图" align="center">
        <template slot-scope="scope">
          <el-image style="width: 120px" :src="scope.row.midImg2" />
        </template>
      </el-table-column>
      <el-table-column prop="bigImg2" label="大图" align="center">
        <template slot-scope="scope">
          <el-image style="width: 120px" :src="scope.row.bigImg2" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80" align="center">
        <template slot-scope="scope">
          <el-tooltip effect="dark" content="编辑" placement="top">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="handleEdit(scope.row)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑信息" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="轮播标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" />
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="中图">
              <Upload v-model="form.midImg" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="大图">
              <Upload v-model="form.bigImg" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditBanner">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getBannerList, setBanner } from '@/api/banner'
import { server_url } from '@/utils/config'
import Upload from '@/components/Upload'

export default {
  components: { Upload },
  data() {
    return {
      data: [],
      dialogVisible: false,
      form: {
        id: '',
        midImg: '',
        bigImg: '',
        title: '',
        description: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getBannerList().then((res) => {
        this.data = res.data
        for (const i of this.data) {
          i.midImg2 = server_url + i.midImg
          i.bigImg2 = server_url + i.bigImg
        }
      })
    },
    handleEdit(item) {
      this.form = { ...item }
      this.dialogVisible = true
    },
    handleEditBanner() {
      const arr = [...this.data]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === this.form.id) {
          arr[i] = this.form
        }
      }
      setBanner(arr).then(() => {
        this.dialogVisible = false
        this.$message.success('修改成功')
        this.fetchData()
      })
    }
  }
}
</script>
