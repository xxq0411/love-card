<template>
  <div class="creat">
    <h1>新建卡片</h1>
    <div class="cardName">
      <span class="label">卡片名：</span>
      <el-input v-model="creatCardName" autofocus="true" clearable></el-input>
    </div>
    <div class="cardDiscribe">
      <span class="label">功能设定：</span>
      <el-input
        type="textarea" v-model="creatcardDiscribe" autosize class="textarea" size="medium"></el-input>
    </div>
    <el-button round @click="creatNewCard">创建</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      creatCardName: '',
      creatcardDiscribe: ''
    }
  },
  methods: {
    creatNewCard () {
      const _this = this
      this.$http.post('http://47.75.71.205/api/love/addCardModel', {
        name: this.creatCardName,
        msg: this.creatcardDiscribe
      }, {
        headers: {'token': localStorage.getItem('token')
        }
      })
        .then(function (res) {
          _this.$message('创建成功！')
          _this.updateOwnCard()
        })
    },
    updateOwnCard () {
      const _this = this
      this.$http.get('http://47.75.71.205/api/love/cardModelList', {
        headers: {'token': localStorage.getItem('token')}
      })
        .then(function (res) {
          console.log(res)
          _this.$store.commit('updateCard', res.data.data)
        })
    }
  }
}
</script>

<style>
.el-input {
  width: 30%;
  padding:5px
}
.label {
  display:inline-block;
  width:80px
}
.textarea {
  width: 30%
}
.cardDiscribe {
  margin: 50px 0
}
</style>
