import Home from '@/components/Home.vue'
import VueRouter from 'vue-router';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})