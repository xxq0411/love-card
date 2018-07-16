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
