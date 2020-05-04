<template>
<div>
  {{ myOwn }}, Counter is {{ doubleCounter }}
</div>
</template>

<script>
  import { mapGetters } from 'vuex';

    export default {
        computed: {
          ...mapGetters([ 'doubleCounter']),
          myOwn() {
            return 'Hello';
          }
        }
    }
</script>

<style scoped>

</style>
