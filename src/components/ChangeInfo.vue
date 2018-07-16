<template>
  <div class="changeInfo">
      <h1>修改个人信息</h1>
      <el-form ref="form">
        <el-form ref="form">
          <el-form-item>
            <span class="label">昵称：</span>
            <el-input v-model="userName"></el-input>
          </el-form-item>
          <el-form-item>
            <span class="label">性别：</span>
            <el-radio-group v-model="gender">
              <el-radio :label="0">雄性</el-radio>
              <el-radio :label="1">雌性</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <span class="label">住址：</span>
            <el-input v-model="address"></el-input>
          </el-form-item>
          <el-form-item>
            <span class="label">手机号码：</span>
            <el-input v-model="phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="cancel">取消</el-button>
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
    }
  },
  computed: {
    userName: {
      get () {
        return this.$store.state.user.userName
      },
      set (value) {
        this.$store.commit('updateUserName', value)
      }
    },
    gender: {
      get () {
        return this.$store.state.user.gender
      },
      set (value) {
        this.$store.commit('updateGender', value)
      }
    },
    address: {
      get () {
        return this.$store.state.user.address
      },
      set (value) {
        this.$store.commit('updateAddress', value)
      }
    },
    phone: {
      get () {
        return this.$store.state.user.phone
      },
      set (value) {
        this.$store.commit('updatePhone', value)
      }
    }
  },
  methods: {
    onSubmit: function () {
      const _this = this
      this.$http
        .post('http://47.75.71.205/api/love/updateUser', {
          userName: this.userName,
          address: this.address,
          phone: this.phone,
          gender: this.gender
        }, {
          headers: {'token': localStorage.getItem('token')
          }
        })
        .then(function (res) {
          if (res.data.code === 1) {
            _this.$message.error(res.data.msg)
          } else if (res.data.code === 0) {
            _this.$message(res.data.msg)
            _this.updateStoreInfo()
          }
        })
    },
    updateStoreInfo: function () {
      const _this = this
      this.$http
        .get('http://47.75.71.205/api/love/getUserInfo', {
          headers: {'token': localStorage.getItem('token')}
        })
        .then(function (res) {
          if (res.data.code === 0) {
            _this.$store.commit('updateUser', res.data.data[0])
          } else {
            _this.$message.error('用户登录信息过期咯')
            _this.$router.push('/')
          }
        })
    },
    cancel () {
      this.$router.push({path: 'homepage'})
    }
  }
}
</script>

<style scoped>
.changeInfo {
  padding: 20px
}
.el-input {
  width: 30%;
  padding:5px
}
.label {
  display:inline-block;
  width:80px
}
</style>
