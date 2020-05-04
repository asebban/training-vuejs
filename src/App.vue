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
  import { mixin } from './mixin';

  export default {
    mixins: [ mixin ]
  }
</script>

<style>
</style>
