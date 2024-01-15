import DisplayView from '../views/DisplayView.vue';
import EditView from '../views/EditView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DisplayView
    },
    {
      path: '/add',
      name: 'add',
      component: EditView
    }
  ]
});

export default router;
