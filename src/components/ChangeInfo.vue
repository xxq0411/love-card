<template>
  <div class="changeInfo">
      <h1>修改个人信息</h1>
      <el-form ref="form" label-width="80px">
        <el-form ref="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input :placeholder="userName" v-model="nickName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-form>
      <div class="backT0HomePage">
        <router-link to='/Homepage' class="backToFirst">
          <i class="el-icon-back">回首页</i>
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nickName: ''
    }
  },
  computed: {
    // TODO: 修改昵称报错
    userName () {
      return this.$store.state.user.userName
    }
  },
  methods: {
    onSubmit: function () {
      const _this = this
      this.$http
        .post('http://47.75.71.205/api/love/updateUser', {
          userName: this.nickName
        }, {
          headers: {'token': localStorage.getItem('token')
          }
        })
        .then(function (res) {
          if(res.data.code === 1){
            this.$message.error('你还没填密码呢SB')
            }
        })
    }
  }
}
</script>
