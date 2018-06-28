<template>
  <div class="register">
    <div>
      <span>邮箱：</span>
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
    </div>
    <div>
      <span>雌雄：</span>
      <div class="sex">
        <el-radio v-model="sex" label="0" border>雌性</el-radio>
        <el-radio v-model="sex" label="1" border>雄性</el-radio>
      </div>
    </div>
    <div>
      <span>密码：</span>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <div>
      <span>确认密码：</span>
      <el-input type="password" v-model="password2" placeholder="请确认密码"></el-input>
    </div>
    <el-button type="primary" @click = "submit">提交</el-button>
     <router-link to='/' class="backToFirst">
      <i class="el-icon-back">回首页</i>
     </router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      sex: '0',
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
      const {email, password, sex} = this
      this.$http.post('http://47.75.71.205/api/love/registry', {
        email,
        password,
        sex
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
  .register >div {
    padding:5px;
  }
  .register >div >span {
    display:inline-block;
    width:80px;
  }
  .el-input {
    width:30%
  }
  .backToFirst {
    display: block;
    text-align: left;
    font-size: 1px;
    padding: 5px;
    margin-left:60vw;
  }
  .sex {
    display: inline-block;
    width:30%;
    text-align: left;
  }
  .el-radio {
    text-align:left;
  }
</style>
