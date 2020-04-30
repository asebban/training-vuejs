<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details. My name is {{ name }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    methods: {
      resetName() {
        this.name = 'Ahmed';
        eventBus.$emit('nameWasEdited', this.name);
      }
    },
    created() {
      eventBus.$on('nameWasEdited', (name) => {
        this.name = name;
      });
    }
  }
</script>


<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>
