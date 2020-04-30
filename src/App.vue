<template>
<div>
  <app-quote>
    <h2 slot="title">My title</h2>
    <p slot="content">My content</p>
  </app-quote>
</div>
</template>

<script>

  import Quote from './components/Quote';

  export default {
    components: {
      'app-quote': Quote
    }
  }
</script>

<style>

</style>
