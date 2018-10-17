<template>
  <div class="first">
    <h1 class="appName">欢迎进入{{$store.state.appName}}</h1>
    <el-button @click="toRegister" circle class="circleBtn" style="padding:0px">去注册</el-button>
    <el-button @click="toLogin" circle class="circleBtn" style="padding:0px">有账号</el-button>
    <footer class="userAttention"><strong>用户请注意:</strong></footer>
    <footer>初始账号：123；密码：123123，直接点击<strong>有账号</strong>按钮登录（建议chrome浏览器），也可自行注册.登录后可进入修改个人信息页面完善昵称、地址、手机号等个人信息，页面会根据性别进行不同的主题显示。</footer>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {}
  },
  methods: {
    toRegister () {
      this.$router.push({path: '/register'})
    },
    toLogin () {
      this.$router.push({path: '/login'})
    }
  }
}
// TODO: 改背景图片 思路：在入口文件处监听路由变化（watch + computed），改掉body的背景图片 2：直接计算出class名 放在body上，根据路由计算class值
// 图片等静态资源放在static里统一管理
</script>

<style scoped>
  @font-face {
    font-family: 'lixuke';
    src: url(/static/font/lixuke.ttf) format('truetype');
  }
.appName {
  font-family: 'lixuke';
  font-size: 3vw;
}
.el-button {
  font-family: 'lixuke';
  text-align: center;
  font-size:1.3vw;
  width:5vw;
  height: 5vw;
  margin: 2vw
}
footer {
  width:40vw;
  margin: 0 auto;
  font-family: 'lixuke';
  position:relative;
  bottom: -50vh;
  font-size:1vw;
}
.userAttention {
  font-size: 1.2vw;
  padding-bottom:5px;
}
</style>

<style>
  @font-face {
    font-family: 'lixuke';
    src: url(/static/font/lixuke.ttf) format('truetype');
  }
</style>
