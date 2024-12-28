import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/FirstView.vue') },
  { path: '/tour/:id', name: 'tour', component: () => import('@/views/ItemPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;