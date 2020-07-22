import Vue from 'vue';
import App from './App.vue';
import Carousel3d from 'vue-carousel-3d';
import router from './router'

Vue.use(Carousel3d);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
