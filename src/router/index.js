import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';

import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
  ]
});

/* eslint-disable */

router.beforeEach((to, from, next) => {
  if (to.name == 'login') {
      next();
  }

  if (!localStorage.user) {
    next('/login');
  }
  else {
    next();
  }
});

export default router;