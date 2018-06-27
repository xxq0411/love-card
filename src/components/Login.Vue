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
  }
}
</script>
