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
    <el-button type="primary" @click = "submit();registe()">提交</el-button>
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
      if (this.password1 !== this.password2) {
        this.$message.error('密码不一致哦')
      } else if (this.password1.length < 6) {
        this.$message.error('密码长度要大于等于6位数才安全')
      }
    },
    registe: function () {
      this.$http({
        method: 'post',
        url: 'https://www.easy-mock.com/mock/5a7f968a64632570965bcc83/api/shopList',
        data: {
          email: this.email,
          password: this.password1
        }
      })
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
