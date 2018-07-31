<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    bodyClassName () {
      if (this.$store.state.user.gender === 1) {
        return ('pink')
      } else {
        return ('blue')
      }
    }
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
            _this.addBodyClassName1(_this.$route.path)
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
  methods: {
    addBodyClassName1 (routePath) {
      if (routePath === '/') {
        let body = document.getElementsByTagName('body')[0]
        body.classList.remove('blue')
      } else if (routePath === '/login') {
        let body = document.getElementsByTagName('body')[0]
        body.setAttribute('class', 'blue')
      } else if (routePath === '/register') {
        let body = document.getElementsByTagName('body')[0]
        body.setAttribute('class', 'blue')
      } else {
        let body = document.getElementsByTagName('body')[0]
        body.setAttribute('class', this.bodyClassName)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.addBodyClassName1(to.path)
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
.blue {
  background: #bcdbd7
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
