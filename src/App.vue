<template>
    <div class="container">
      <app-counter @updated="update($event)"></app-counter>
      <app-result :counter="counter"></app-result>
    </div>
</template>

<script>
  import Counter from './components/Counter';
  import Result from './components/Result';

  export default {
    data(){
      return {
        counter: 0
      }
    },
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
