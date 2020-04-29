<template>
  <div>
    <server-status v-for="s in 5" v-bind:key="s"></server-status>
  </div>
</template>

<script>
    import ServerStatus from './ServerStatus'

    export default {
        components: {
          'server-status': ServerStatus
        }
    }
</script>

<style scoped>

</style>
