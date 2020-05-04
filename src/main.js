import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/employees';

new Vue({
  el: '#app',
  render: h => h(App)
})