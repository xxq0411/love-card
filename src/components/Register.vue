<template>
  <div class="register">
    <p>
      <span>邮箱：</span>
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
    </p>
    <p>
      <span>密码：</span>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </p>
    <p>
      <span>确认密码：</span>
      <el-input type="password" v-model="password2" placeholder="请确认密码"></el-input>
    </p>
    <el-button type="primary" @click = "submit">提交</el-button>

    <div class="loginBtn">
      <router-link to="/login">已有账户</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    submit: function () {
      if (this.email === '') {
        this.$message.error('记得填写邮箱哦')
      } else if (this.password !== this.password2) {
        this.$message.error('密码不一致哦')
      } else if (this.password.length < 6) {
        this.$message.error('密码长度要大于等于6位数才安全')
      } else {
        this.registe()
      }
    },
    registe: function (email, password) {
      this.$http.post('http://47.75.71.205/api/love/registry', {
        email: this.email,
        password: this.password
      })
        .then(function (res) {
          var msg = res.data.msg
          alert(msg)
        })
        .catch(function (error) {
          console.log(error)
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
