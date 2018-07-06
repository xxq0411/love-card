<template>
  <div class="changeInfo">
      <h1>修改个人信息</h1>
      <el-form ref="form" label-width="80px">
        <el-form ref="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="userName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-form>
      <div class="backT0HomePage">
        <router-link to='/Homepage' class="backToFirst">
          <i class="el-icon-back">回首页</i>
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    // TODO: 修改昵称报错
    userName () {
      return this.$store.state.user.userName
    }
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>
