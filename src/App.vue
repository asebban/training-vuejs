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
    methods: {
      update(event) {
        this.counter += event
      }
    },
    components: {
      appCounter: Counter,
      appResult: Result
    }
  }
</script>

<style>
</style>
