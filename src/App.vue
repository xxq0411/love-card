<template>
  <div id="app">
    <register></register>
  </div>
</template>

<script>
import Register from '@/components/Register'
import Login from '@/components/Login'

export default {
  components: {
    Register,
    Login
  },
  name: 'App'
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
