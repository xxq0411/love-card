<template>
  <div class="own">
    <h1 class="owe-title">我的卡片</h1>
    <el-card v-for="card in cards" :key="card.id" class="box-card">
      <div slot="header">
        <span class="cardName">卡片名称: {{card.name}}</span>
      </div>
      <div class="text item">
        {{'列表内容: ' + card.msg }}
      </div>
      <div class="destroyWrapper"><el-button class="destroy" @click="ConfirmIfDel(card.id)">删除</el-button></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    cards () {
      // TODO: 显示获取的内容
      return this.$store.state.card
    }
  },
  methods: {
    ConfirmIfDel (CardID) {
      this.$confirm('此操作将永久删除该卡片, 是否继续?', '提示', {
        confirmButtonText: '想好了',
        cancelButtonText: '没想好',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.delCard(CardID)
      }).catch(() => {
      })
    },
    delCard (CardID) {
      const _this = this
      this.$http.post('http://47.75.71.205/api/love/delCardModel', {
        id: CardID
      }, {
        headers: {'token': localStorage.getItem('token')}
      })
        .then(function (res) {
          console.log(res)
          _this.update()
        })
    },
    // 获取卡片
    update () {
      const _this = this
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

<style scoped>
  @font-face {
    font-family: 'lixuke';
    src: url(/static/font/lixuke.ttf) format('truetype');
  }
  .own {
    font-family: 'lixuke';
    text-align: center
  }
  .owe-title {
    font-size: 2vw
  }
  .text {
    font-size: 1.5vw;
    text-align: left;
    overflow: auto;
    word-break: break-all
  }

  .item {
    margin-bottom: 18px;
  }
  .box-card {
    display: inline-block;
    width: 25vw;
    min-height: 30vh;
    margin: 5px 5px;
    position: relative;
  }
  .cardName {
    font-size: 1.5vw;
    word-break: break-all
  }
  .el-button--text {
    padding: 0 !important;
  }
  .destroy {
    margin: 0;
    width:100%;
    position: absolute;
    bottom:0;
    left: 0;
    border: none;
    border-top: 1px solid #dcdfe6;
    border-radius: 0;
    font-size:0.8vw;
  }
</style>
