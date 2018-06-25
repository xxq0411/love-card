<template>
  <div class="register">
    <p>
      <span>邮箱：</span>
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
    </p>
    <p>
      <span>密码：</span>
      <el-input type="password" v-model="password1" placeholder="请输入密码"></el-input>
    </p>
    <p>
      <span>确认密码：</span>
      <el-input type="password" v-model="password2" placeholder="请确认密码"></el-input>
    </p>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    submit: function () {
      if (this.email === '') {
        this.$message.error('记得填写邮箱哦')
      }
    }
  }
}
</script>
<style scoped>
  .register {
    padding:20px;
  }
  .register >p >span {
    display:inline-block;
    width:80px;
  }
  .el-input {
    width:30%
  }
</style>
