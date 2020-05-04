<template>
  <div class="row">
    <button class="btn btn-primary" @click="updateCounter(2)">Increment</button>
    <button class="btn btn-primary" @click="updateCounter(-2)">Decrement</button>
  </div>

</template>

<script>

  import { mapMutations } from 'vuex'

    export default {
      methods: mapMutations(['updateCounter'])
    }
</script>

<style scoped>

</style>
