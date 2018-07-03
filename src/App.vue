<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'App',
  mounted () {
    if (localStorage.getItem('token')) {
      const _this = this
      this.$http
        .get('http://47.75.71.205/api/love/getUserInfo', {
          headers: {'token': localStorage.getItem('token')}
        })
        .then(function (res) {
          // TODO: 需要徐菜花调整token过期时间为1分钟，有利于测试
          if (res.data.code === 0) {
            _this.$store.commit('updateUser', res.data.data[0])
          } else {
            _this.$message.error('用户登录信息过期咯')
            _this.$router.push('login')
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
