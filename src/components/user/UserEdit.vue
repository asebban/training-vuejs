<template>
  <div>
    <h3>Edit the User ({{ id }})</h3>
    <p>User name : {{ $route.query.name }}</p>
    <div style="height: 900px"></div>
    <p id="data">This is some extra data</p>
  </div>
</template>


  <script>
    export default {
      data() {
        return {
          id: this.$route.params.id
        }
      },
      beforeRouteLeave(to, from, next) {
        console.log('before Leaving Edit to '+to.path);
        next();
      }
    }
  </script>
