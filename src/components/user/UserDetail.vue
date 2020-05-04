<template>
  <div>
    <h3>Some User Details => ID = {{ $route.params.id }}</h3>
    <router-link style="cursor: pointer" :to="{ name: 'userEdit', query: { name: 'Ahmed' } }">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    beforeRouteEnter: (to, from, next) => {
      console.log('dans le composant UserDetail, beforeRouteEnter');
      next();
    }
  }
</script>
