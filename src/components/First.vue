<template>
  <div class="first">
    <h1>欢迎来到爱之卡！</h1>
    <router-link to="/first"></router-link>
    <router-link to="/register" tag=el-button>注册账户</router-link>
    <router-link to="/login" tag=el-button>已有账户</router-link>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {}
  }
  // 监听路径变化，未成功
  // beforeRouteUpdate (to, from, next) {
  //   console.log(1)
  // }
  // watch: {
  //   '$route' (to, from) {
  //     console.log(1)
  //   }
  // }
}
</script>
