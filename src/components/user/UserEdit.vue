<template>
  <div>
    <h3>Edit the User ({{ id }})</h3>
    <p>User name : {{ $route.query.name }}</p>
  </div>
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
