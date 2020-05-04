<template>
    <h3>Edit the User ({{ id }})</h3>
</template>


  <script>
    export default {
      data() {
        return {
          id: this.$route.params.id
        }
      }
    }
  </script>
