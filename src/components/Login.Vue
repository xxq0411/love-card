<template>
  <div class="login">
    <p>
      <span>邮箱：</span>
      <el-input v-model="email" placeholder="请输入注册邮箱"></el-input>
    </p>
    <p>
      <span>密码：</span>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </p>
    <el-button type="primary" @click = "entry">登录</el-button>
    <div class="backT0HomePage">
      <router-link to='/' class="backToFirst">
        <i class="el-icon-back">回首页</i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    entry: function () {
      if (this.email === '') {
        this.$message.error('记得填写邮箱哦')
      } else if (this.password === '') {
        this.$message.error('你还没填密码呢SB')
      } else {
        this.login()
      }
    },
    login: function (email, password) {
      this.$http
        .post('http://47.75.71.205/api/love/login', {
          email: this.email,
          password: this.password
        })
        .then(function (res) {
          var successMsg = res.data.msg
          alert(successMsg)
          console.log(res)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.login {
  padding: 20px;
}
.login > p > span {
  display: inline-block;
  width: 80px;
}
.el-input {
  width: 30%;
}
.backToFirst {
  display: block;
  text-align: left;
  font-size: 1px;
  padding: 5px;
  margin-left: 60vw;
}
</style>
