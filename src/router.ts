import { createRouter, createWebHistory } from 'vue-router';

import WebDemo01 from './views/WebDemo01.vue';
import WebDemo02 from './views/WebDemo02.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/web-demo01', component: WebDemo01 },
    { path: '/web-demo02', component: WebDemo02 },
  ]
});

export default router;
