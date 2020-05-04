<template>
  <div>
    Counter is {{ counter }}
  </div>
</template>

<script>
    export default {
      computed: {
        counter() {
          return this.$store.state.counter;
        }
      }
    }
</script>

<style scoped>

</style>
