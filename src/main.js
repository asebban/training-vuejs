import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus'


Vue.config.productionTip = false

Vue.component('server-status', ServerStatus);

new Vue({
  render: h => h(App),
}).$mount('#app')
