import Vue from 'vue';
import App from './App.vue';
import routes from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  // to remove '/#' from url path, production server needs to be configured to make this work
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
