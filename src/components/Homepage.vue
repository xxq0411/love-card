<template>
  <div class="homepage">
        <header>
            <h1 @click='changeUserInfor'>Hello {{userId}}</h1>
        </header>
    </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      userId: '小可爱'
    }
  }
}
</script>
