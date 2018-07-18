<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  // computed: {
  //   bodyClassName () {
  //   }
  // },
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
            _this.$router.push('/')
          }
        })
        // 获取卡片
      this.$http.get('http://47.75.71.205/api/love/cardModelList', {
        headers: {'token': localStorage.getItem('token')}
      })
        .then(function (res) {
          let cards = res.data.data.filter(card => card.drop === 0)
          _this.$store.commit('updateCard', cards)
        })
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        console.log(1)
      } else if (to.path === '/login') {
        console.log(2)
      } else if (to.path === '/register') {
        console.log(3)
      } else {
        this.bodyClassName = 'pink'
        let body = document.getElementsByTagName('body')[0]
        console.log(body)
        body.setAttribute('class', 'pink')
      }
    }
  }
}
</script>

<style>
body {
  background-image: url(../static/background.jpg);
  background-repeat: no-repeat;
  background-size: 100%
}
.pink {
  background: #fbbebb
}
.bule {
  background: #c5e5e0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
