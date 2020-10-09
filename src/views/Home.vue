<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ScoreConversion msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreConversion from '@/components/ScoreConversion.vue'

export default {
  name: 'Home',
  components: {
    ScoreConversion
  }
}
</script>
