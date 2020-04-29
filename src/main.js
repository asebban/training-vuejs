import Vue from 'vue'
import App from './App.vue'
import Home from './Home'

Vue.config.productionTip = false

Vue.component('servers', Home);

new Vue({
  render: h => h(App),
}).$mount('#app')
