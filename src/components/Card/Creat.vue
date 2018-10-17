<template>
  <div class="creat">
    <h1 class="title">新建卡模</h1>
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
          if (res.data.code === 0) {
            _this.$message(res.data.msg)
            _this.update()
          } else {
            _this.$message.error(res.data.msg)
          }
        })
        .then(
          _this.creatCardName = '',
          _this.creatcardDiscribe = ''
        )
    },
    update () {
      const _this = this
      // 获取卡片
      this.$http.get('http://47.75.71.205/api/love/cardModelList', {
        headers: {'token': localStorage.getItem('token')}
      })
        .then(function (res) {
          let cards = res.data.data.filter(card => card.drop === 0)
          _this.$store.commit('updateCard', cards)
        })
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'lixuke';
  src: url(/static/font/lixuke.ttf) format('truetype');
}
.creat {
  font-family: 'lixuke'
}
.title {
  font-size: 2vw;
  padding-left: 66px;
}
.el-input {
  width: 30%;
  padding:5px
}
.label {
  font-size:1vw;
  font-weight: 600;
  display:inline-block;
  width:6vw;
}
.textarea {
  width: 30%
}
.cardName {
  display:flex;
  align-items: center;
  justify-content: center;
}
.cardDiscribe {
  margin: 50px 0;
  display:flex;
  align-items: center;
  justify-content: center;
}
</style>
<style scoped>
.el-button {
  padding-left: 66px;
}
</style>
