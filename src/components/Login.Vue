<template>
  <div class="login">
    <div class="from">
      <div class="header">
        <span class="el-icon-edit"></span>
        <span>登录页面</span>
      </div>
      <p>
        <span>邮箱：</span>
        <el-input v-model="email" placeholder="请输入注册邮箱"></el-input>
      </p>
      <p>
        <span>密码：</span>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </p>
      <div class="entryBtn">
        <el-button type="primary" @click = "entry">点我起飞！</el-button>
      </div>
      <div class="backT0HomePage">
        <router-link to='/register' class="backToRegiser">
          <i class="el-icon-arrow-left">~没账号点这里~</i>
        </router-link>
      </div>
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
    login: function () {
      // 注意声明this的位置
      const _this = this
      // 登录并返回用户信息
      this.$http
        .post('http://47.75.71.205/api/love/login', {
          email: this.email,
          password: this.password
        })
        .then(function (res) {
          if (res.data.code === 0) {
            _this.$store.commit('updateUser', res.data.data)
            _this.$router.push({path: '/homepage'})
            localStorage.setItem('token', res.data.token)
            _this.getCards()
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getCards () {
      const _this = this
      // 获取卡片
      this.$http.get('http://47.75.71.205/api/love/cardModelList', {
        headers: {'token': localStorage.getItem('token')}
      })
        .then(function (res) {
          let cards = res.data.data.filter(card => card.drop === 0)
          _this.$store.commit('updateCard', cards)
          console.log(1)
        })
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'lixuke';
  src: url(/static/font/lixuke.ttf) format('truetype');
}
.login {
  padding: 20px;
}
.from {
  margin:0 auto;
  width: 30vw;
  height:52vh;
  background: #fbbebb;
  border-radius: 20px;
  text-align: left
}
.login > div> p > span {
  font-family: 'lixuke';
  font-size: 2vw;
  display: block;
  width: 25vw;
  margin: 0 0 0 2.25vw;
}
.login > div> p:first-child >span {
  padding-top: 2.25vw
}
.el-input {
  width: 25vw;
  margin: 0 0 0 2.25vw;
}
.backToRegiser {
  font-family: 'lixuke';
  display: block;
  text-align: left;
  font-size: 1.6vh;
  color: #ff4d00;
  text-align: right;
  padding:2.5vw;
}
.header {
  font-family: 'lixuke';
  text-align: center;
  padding-top:2.25vw;
  font-size:2vw;
}
.entryBtn {
  text-align: center;
  padding-top: 2.25vw;
}
</style>
