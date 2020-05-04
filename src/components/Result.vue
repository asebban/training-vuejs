<template>
  <div>
    Counter is {{ getCounter }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

    export default {
      computed: mapGetters( [ 'getCounter', 'getMultipliedCounter' ] )
    }
</script>

<style scoped>

</style>
