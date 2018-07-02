<template>
  <div class="homepage">
        <header>
            <h1>Hello {{userName}}</h1>
        </header>
    </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.data.userName
    }
  }
}
</script>
