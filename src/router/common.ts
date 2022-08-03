import type { RouteRecordRaw } from 'vue-router';

const common: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@views/Test/index.vue'),
    meta: {
      title: 'test页面'
    }
  }
];
export default common;
