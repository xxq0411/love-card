import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      gender: 1,
      userName: '',
      phone: '',
      address: '',
      email: ''
    },
    appName: '爱之卡'
  },
  mutations: {
    changeAppName (state, name) {
      state.appName = '爱之卡！' + name
    },
    updateUser (state, userInfo) {
      state.user = userInfo
    },
    updateEmail (state, value) {
      state.user.email = value
    },
    updateUserName (state, value) {
      state.user.userName = value
    },
    updatePhone (state, value) {
      state.user.phone = value
    },
    updateAddress (state, value) {
      state.user.address = value
    },
    updateGender (state, value) {
      state.user.gender = value
    }
  }
})
