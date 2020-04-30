<template>
<div>
  <component :is="selectedComponent">
    <h2 slot="title">My title</h2>
    <p slot="content">My content</p>
  </component>
  <hr>
  <button @click="selectedComponent = 'app-quote'">Select Quote</button>
  <button @click="selectedComponent = 'app-author'">Select Author</button>
  <button @click="selectedComponent = 'app-new'">Select New</button>
</div>
</template>

<script>

  import Quote from './components/Quote';
  import Author from './components/Author';
  import New from './components/New';

  export default {
    data() {
      return {
        selectedComponent: 'app-quote'
      }
    },
    components: {
      'app-quote': Quote,
      'app-author': Author,
      'app-new': New
    }
  }
</script>

<style>

</style>
