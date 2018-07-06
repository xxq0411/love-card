<template>
  <div class="homepage">
    <el-row :gutter="20">
      <el-col :span="19">
        <h1 class="greet">Hello {{userName}}</h1>
      </el-col>
      <el-col :span="5">
        <router-link to="/changeInfo">修改个人信息</router-link>
      </el-col>
    </el-row>
  <el-col :span="12">
    <h5>卡片库</h5>
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <span slot="title"><router-link to="/creat" tag="li">新建卡片</router-link></span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">派发卡片</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">已有卡片</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">使用卡片</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.userName
    }
  }
}
</script>
