<template>
  <div class="first">
    <h1 class="appName">欢迎进入{{$store.state.appName}}</h1>
    <el-button @click="toRegister" circle class="circleBtn" style="padding:0px">去注册</el-button>
    <el-button @click="toLogin" circle class="circleBtn" style="padding:0px">有账号</el-button>
    <footer>此项目由DA与Hua共同开发，有项目方面的问题欢迎关注github账号xch1029</footer>
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
.appName {
  font-size: 3vw;
}
.el-button {
  text-align: center;
  font-size:1vw;
  width:5vw;
  height: 5vw;
  margin: 2vw
}
footer {
  position:relative;
  bottom: -50vh;
  font-size:0.5vw;
}
</style>
