<template>
  <div class="container">
    <p v-highlight.delayed="'red'">Texte</p>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        dataSwitch: true
      }
    },
    directives: {
      'highlight': {
        bind(el, binding){

          var delay = 0;

          if (binding.modifiers['delayed']) {
            delay = 3000;
          }

          setTimeout(() => {
            if (binding.arg == 'background')
              el.style.backgroundColor = binding.value;
            else
              el.style.color = binding.value;
          },delay);
        }
      }
    }
  }
</script>

<style scoped>
</style>
