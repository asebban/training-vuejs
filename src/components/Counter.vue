<template>
  <div class="row">
    <button class="btn btn-primary" @click="updateCounter(1)">Increment</button>
    <button class="btn btn-primary" @click="updateCounter(-1)">Decrement</button>
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
