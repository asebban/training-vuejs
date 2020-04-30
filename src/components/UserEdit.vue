<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me! I'm {{ name }}</p>
        <button @click="editName">Edit name</button>
    </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    props: ['name'],
    methods: {
      editName() {
        this.name = 'Samir';
        eventBus.$emit('nameWasEdited', this.name);
      }
    }
  }
</script>



<style scoped>
    div {
        background-color: lightgreen !important;
    }
</style>
