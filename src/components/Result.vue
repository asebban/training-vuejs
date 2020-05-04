<template>
  <div>
    hi {{ getName }}, Counter is {{ getCounter }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

    export default {
      computed: mapGetters( [ 'getCounter', 'getMultipliedCounter', 'getName' ] )
    }
</script>

<style scoped>

</style>
