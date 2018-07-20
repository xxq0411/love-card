<template>
  <div class="register">
    <div class="from">
      <p class="header">
        <span class="el-icon-edit"></span>
        <span>注册页面</span>
      </p>
      <div>
        <span>邮箱：</span>
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      </div>
      <div>
        <span>雌雄：</span>
        <el-radio-group v-model="gender" class="sex">
          <el-radio :label="1" border>雌性</el-radio>
          <el-radio :label="0" border>雄性</el-radio>
        </el-radio-group>
      </div>
      <div>
        <span>密码：</span>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div>
        <span>确认密码：</span>
        <el-input type="password" v-model="password2" placeholder="请确认密码"></el-input>
      </div>
      <div class="entryBtn">
        <el-button type="primary" @click = "submit">点我起飞！</el-button>
      </div>
      <router-link to='/login' class="backToLogin">
          <i class="el-icon-arrow-left">~有账号点这里~</i>
      </router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      gender: 0,
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
    registe: function () {
      const {email, password, gender} = this
      this.$http.post('http://47.75.71.205/api/love/registry', {
        email,
        password,
        gender
      })
        .then(function (res) {
          console.log(res)
          if (res.data.code === 0) {
            this.$router.push({path: '/login'})
          }
        }.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
  .from {
    margin:0 auto;
    width: 30vw;
    height:75vh;
    background: #fbbebb;
    border-radius: 20px;
    text-align: left
  }
  .register {
    padding:20px;
  }
  .register >div >div >span {
  font-family: 'lixuke';
  font-size: 2vw;
  display: block;
  width: 25vw;
  margin: 0 0 0 2.25vw;
  }
  .el-input {
  width: 25vw;
  margin: 0 0 0 2.25vw;
  }
  .backToLogin {
    font-family: 'lixuke';
    display: block;
    text-align: left;
    font-size: 1.6vh;
    color: #ff4d00;
    text-align: right;
    padding:2.5vw;
  }
  .sex {
    display: inline-block;
    width:20%;
    text-align: left;
  }
  .el-radio {
    display: inline-block;
    width: 7vw;
    margin-right:10px;
  }
  .el-radio.is-bordered + .el-radio.is-bordered {
    margin:0
  }
  .el-radio-group {
    width:25vw;
    text-align: left;
    margin: 0 0 0 2.25vw;
  }
  .header {
    font-family: 'lixuke';
    text-align: center;
    font-size:2vw;
    padding-top:2.25vw;
    margin:0
  }
  .entryBtn {
    text-align: center;
    padding-top: 2.25vw;
  }
</style>

<style>
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #fff;
}
</style>
