<template>
    <div class="container">
      <app-counter></app-counter>
      <app-another-counter></app-another-counter>
      <app-result></app-result>
      <app-another-result></app-another-result>
    </div>
</template>

<script>
  import Counter from './components/Counter';
  import Result from './components/Result';
  import AnotherResult from './components/AnotherResult';
  import AnotherCounter from './components/AnotherCounter';

  export default {

    components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      appAnotherResult: AnotherResult
    }
  }
</script>

<style>
</style>
