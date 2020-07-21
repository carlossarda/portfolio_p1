import Vue from 'vue';
import App from './App.vue';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
