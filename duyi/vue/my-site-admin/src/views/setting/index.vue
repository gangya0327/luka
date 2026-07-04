<template>
  <div class="app-container">
    <div class="block">网站信息</div>
    <div class="block">网站标题</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.siteTitle" disabled />
    </div>

    <div class="block">邮箱</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.mail" disabled />
    </div>

    <div class="block">备案号</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.icp" disabled />
    </div>

    <el-divider />

    <div class="block">网站头像信息</div>
    <div style="margin-bottom: 15px">
      <el-image :src="form.avatar2" style="width: 100px; height: 100px" />
    </div>

    <el-divider />

    <div class="block">网站图标信息</div>
    <div class="block">网站图标地址</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.favicon" disabled />
    </div>

    <div class="block">网站图标预览</div>
    <el-image v-model="form.favicon" disabled />

    <el-divider />

    <div class="block">github信息</div>
    <div class="block">github名称</div>
    <el-input v-model="form.githubName" placeholder="请输入github名称" disabled />

    <div class="block">github地址</div>
    <el-input v-model="form.github" placeholder="请输入github地址" disabled />

    <el-divider />

    <div class="block">QQ信息</div>
    <div class="block">QQ号码</div>
    <el-input v-model="form.qq" disabled />

    <div class="block">QQ 二维码预览</div>
    <el-image v-model="form.qqQrCode2" disabled />

    <div class="block">微信信息</div>
    <div class="block">微信号码</div>
    <el-input v-model="form.weixin" disabled />

    <div class="block">微信二维码预览</div>
    <el-image v-model="form.weixinQrCode2" disabled />

    <el-divider />

    <div class="block">
      <el-button type="primary" @click="handleEditMode">进入编辑模式</el-button>
    </div>
  </div>
</template>

<script>
import { getSetting } from '@/api/setting'
// import Upload from '@/components/Upload'
import { server_url } from '@/utils/config'

export default {
  // components: { Upload },
  data() {
    return {
      server_url,
      dialogVisible: false,
      form: {
        siteTitle: '',
        mail: '',
        icp: '',
        avatar: '',
        avatar2: '',
        url: '',
        favicon: '',
        githubName: '',
        github: '',
        qq: '',
        qqQrCode2: '',
        weixin: '',
        weixinQrCode2: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getSetting().then((res) => {
        this.form = res.data
        this.form.avatar2 = this.server_url + this.form.avatar
        this.form.favicon = this.server_url + this.form.favicon
      })
    },
    handleEditMode() {
      this.dialogVisible = true
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
