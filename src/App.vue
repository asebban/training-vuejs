<template>
    <div class="container">
      <app-counter></app-counter>
      <app-result></app-result>
      <app-another-result></app-another-result>
    </div>
</template>

<script>
  import Counter from './components/Counter';
  import Result from './components/Result';
  import AnotherResult from './components/AnotherResult';

  export default {

    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult
    }
  }
</script>

<style>
</style>
