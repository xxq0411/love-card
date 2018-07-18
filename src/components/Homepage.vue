<template>
  <div class="homepage">
    <el-container>
      <el-header>
        <h1 class="greet">Hello {{userName}}</h1>
        <router-link to="/changeInfo" tag="p">
          <i class="el-icon-arrow-right">  修改个人信息</i>
        </router-link>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="12" class="el-col">
            <h5>卡片库</h5>
            <el-menu class="el-menu-vertical-demo">
              <router-link to="/homepage/creat" tag="li">
                <el-menu-item index="1">
                  <span slot="title">新建卡片</span>
                </el-menu-item>
              </router-link>
              <el-menu-item index="2">
                <span slot="title"><router-link to="/homepage/dispatch" tag="li">派发卡片</router-link></span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title"><router-link to="/homepage/own" tag="li">已有卡片</router-link></span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title"><router-link to="/homepage/use" tag="li">使用卡片</router-link></span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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

<style scoped>
.el-col {
  width: 100%
}
.el-icon-arrow-right {
  font-size: 1vw;
  color:#FF4D00;
  margin-left: 35vw;
  cursor: pointer;
}
.el-header {
  margin-bottom: 30px
}
</style>
