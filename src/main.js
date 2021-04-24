import Vue from 'vue'
import App from './App.vue'
import router from './router';
import 'element-ui/lib/theme-chalk/index.css'
import {Popover,
  Icon,
  Carousel,
  Divider,
  CarouselItem} 
  from 'element-ui';

Vue.use(Popover);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Divider);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
