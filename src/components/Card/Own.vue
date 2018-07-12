<template>
  <div class="own">
    <h1>{{card}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    card () {
      // TODO: 显示获取的内容
      return this.$store.state.card
    }
  }
}
</script>
