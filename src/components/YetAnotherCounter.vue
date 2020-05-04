<template>
    <div>
      <button class="btn btn-primary" @click="myIncrement">Increment by yet another counter</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

    export default {
      methods: {
        ...mapActions(['increment']),
        myIncrement() {
          this.$store.dispatch('increment', 5)
        }
      }
    }
</script>

<style scoped>

</style>
