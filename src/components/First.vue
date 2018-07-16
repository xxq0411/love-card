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
</script>

<style>
body {
  background-color:rgb(245, 245, 220)
}
.appName {
  font-size: 3vw;
}
.el-button {
  text-align: center;
  font-size:1vw;
  width:5vw;
  height: 5vw;
  background-color: #DBF5E8;
  margin: 2vw
}
footer {
  position:relative;
  bottom: -50vh;
  font-size:0.5vw;
}
</style>
