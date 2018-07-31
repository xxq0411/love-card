<template>
  <div class="homepage">
    <el-container>
      <el-aside width="15vw">
        <div class="headerUserName">{{userName}}</div>
        <el-menu>
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <router-link to="/homepage/creat" tag="span">
                新建卡模
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <router-link to="/homepage/dispatch" tag="span">
                派发卡片
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <router-link to="/homepage/own" tag="span">
                卡模库
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <router-link to="/homepage/use" tag="span">
                我的卡片
              </router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/changeInfo" tag="span">
                  修改个人信息
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Hello {{userName}}</span>
        </el-header>
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
</style>

<style>
  #app {
    margin-top: 0;
  }
  #body {
    margin: 0;
  }
  .headerUserName {
    color:red;
    font-size:1.5vw;
  }
  .el-header {
  background-color:#ffffff41;
  width: 85vw;
  height:1vh;
  padding:0;
  margin:0;
}
.el-aside {
  height: 100vh;
  padding:0;
  margin:0;
  background-color: #383e4b;
}
.el-main {
  width:80vw;
  padding:0;
  margin:0;
}
</style>
