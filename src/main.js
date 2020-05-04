import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log('navigating from ' + from.path + ' to ' + to.path);
  next();
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')