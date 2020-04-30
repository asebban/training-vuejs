<template>
  <div class="container">
    <app-switch v-model="dataSwitch"></app-switch>
    Switched: {{ dataSwitch }}
  </div>
</template>

<script>
  import Switch from './components/Switch';

  export default {
    data() {
      return {
        dataSwitch: true
      }
    },
    components: {
      'app-switch' : Switch
    }
  }
</script>

<style scoped>
</style>
