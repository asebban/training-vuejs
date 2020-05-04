<template>
  <div>
    <input type="text" v-model="text">
    <p>{{ text }}</p>
    <p>{{ text | toUpperCase }} (ToUpperCase)</p>
    <p>{{ text | toLowerCase }} (ToLowerCase)</p>
    <p>{{ text | toUpperCase | toLowerCase }} (ToUpperCase | ToLowerCase)</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello There!'
      }
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>
</style>
