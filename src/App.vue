<template>
  <div class="container">
    <button class="btn btn-primary" @click="show = !show">Toggle alert</button>
    <transition name="fade">
      <div class="alert alert-info" v-if="show">My message is here!</div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
