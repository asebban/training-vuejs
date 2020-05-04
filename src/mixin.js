export const mixin = {
    data() {
      return {
        text: 'Hello There!'
      }
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase();
      }
    }
  }
  