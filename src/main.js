import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/employees';
Vue.http.interceptors.push((request, next) => {
  console.log(request.method);
  next(response => {
    console.log('intercepted response ',response);
  });
});


new Vue({
  el: '#app',
  render: h => h(App)
})