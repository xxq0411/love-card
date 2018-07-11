import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      gender: ''
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
    updateUserGender (state, value) {
      state.user.gender = value
    }
  }
})
