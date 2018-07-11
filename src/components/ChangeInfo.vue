<template>
  <div class="changeInfo">
      <h1>修改个人信息</h1>
      <el-form ref="form">
        <el-form ref="form">
          <el-form-item>
            <span class="label">昵称：</span>
            <el-input :placeholder="userName" v-model="nickName"></el-input>
          </el-form-item>
          <el-form-item>
            <span class="label">性别：</span>
            <el-radio-group v-model="gender">
              <el-radio label="0">雄性</el-radio>
              <el-radio label="1">雌性</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <span class="label">住址：</span>
            <el-input :placeholder="address1" v-model="address"></el-input>
          </el-form-item>
          <el-form-item>
            <span class="label">邮箱：</span>
            <el-input :placeholder="email1" v-model="email"></el-input>
          </el-form-item>
          <el-form-item>
            <span class="label">手机号码：</span>
            <el-input :placeholder="phone1" v-model="phone"></el-input>
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
      nickName: '',
      address: '',
      email: '',
      phone: ''
      // TODO: 性别实时更新
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.userName
    },
    address1 () {
      return this.$store.state.user.address
    },
    phone1 () {
      return this.$store.state.user.phone
    },
    email1 () {
      return this.$store.state.user.email
    },
    gender: {
      get () {
        return this.$store.state.user.gender.toString()
      },
      set (value) {
        this.$store.commit('updateUserGender', value)
      }

    }
  },
  methods: {
    onSubmit: function () {
      const _this = this
      this.$http
        .post('http://47.75.71.205/api/love/updateUser', {
          userName: this.nickName,
          address: this.address,
          phone: this.phone,
          email: this.email,
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
            console.log(res)
          } else {
            _this.$message.error('用户登录信息过期咯')
            _this.$router.push('/')
          }
        })
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
