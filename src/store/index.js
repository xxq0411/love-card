import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    appName: '爱之卡'
  },
  mutations: {
    changeAppName (state, name) {
      state.appName = '爱之卡！' + name
    },
    updateUser (state, userInfo) {
      console.log(userInfo)
      state.user = userInfo
    }
  }
})
