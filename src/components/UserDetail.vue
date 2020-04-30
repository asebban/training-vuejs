<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details. My name is {{ name }}</p>
        <button @click="name = 'Ahmed'">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>


<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>
