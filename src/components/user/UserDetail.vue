<template>
  <div>
    <h3>Some User Details => ID = {{ $route.params.id }}</h3>
    <router-link style="cursor: pointer; color: blue;" :to="to">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        to: ''
      }
    },
    created() {
      this.to = '/' + this.$route.params.id + '/edit';
    }
  }
</script>
