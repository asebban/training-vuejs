<template>
    <div class="container">
      <app-counter></app-counter>
      <app-result></app-result>
    </div>
</template>

<script>
  import Counter from './components/Counter';
  import Result from './components/Result';

  export default {

    components: {
      appCounter: Counter,
      appResult: Result
    }
  }
</script>

<style>
</style>
