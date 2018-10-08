<template>
  <div class="homepage">
    <el-container>
      <el-aside width="15vw">
        <div class="headerUserNameWrapper">
          <div class="headerUserName"> hello! {{userName}}</div>
        </div>
        <el-menu>
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-circle-plus-outline"></i>
              <router-link to="/homepage/creat" tag="span">
                新建卡模
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-rank"></i>
              <router-link to="/homepage/own" tag="span">
                我的卡片
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <router-link to="/changeInfo" tag="span">
                  修改个人信息
              </router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h1 class="introduceApp">welcome to love-card</h1>
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
@font-face {
    font-family: 'lixuke';
    src: url(/static/font/lixuke.ttf) format('truetype');
  }
  #app {
    margin-top: 0;
  }
  #body {
    margin: 0;
    font-family: 'lixuke';
  }
  .headerUserName {
    color:gray;
    padding-left: 10px;
    font-size:2vw;
    height: 8vw;
    font-family: 'lixuke';
    display: table-cell;
    vertical-align: middle;
  }
  .el-header {
  background-color:#ffffff41;
  width: 85vw;
  height:8vw !important;
  padding:0;
  margin:0;
}
.el-aside {
  height: 100vh;
  padding:0;
  margin:0;
  background-color: #f3fba340;
}
.el-main {
  width:80vw;
  padding:0;
  margin:0;
}
.el-menu {
  border-right: solid 1px #f3fba340 !important;
  background-color: #f3fba340;
}
.introduceApp {
  font-family: 'lixuke';
  margin: 0px 0px 0px 0px;
  font-size: 5vw;
}
.headerUserNameWrapper {
  display: table;
}
</style>
