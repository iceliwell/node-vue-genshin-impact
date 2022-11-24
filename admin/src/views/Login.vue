<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>原神游戏资讯后台管理系统</span>
    </div>
    <el-form @submit.native.prevent="Login">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
        <el-button type="danger" native-type="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    }
  },
  methods: {
    async Login() {
      const res = await this.$http.post('login', this.model)
      // sessionStorage.token = res.data.token
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功',
      })
    },
  },
}
</script>

<style>
.el-card {
  width: 30rem;
  margin: 10rem auto;
}

.el-card__body,
.el-main {
  padding-bottom: 5px;
}
</style>