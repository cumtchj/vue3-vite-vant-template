/**
 * @ Author: Haojun.Cao
 * @ Create Time: 2022-07-20 23:27:31
 * @ Description: 路由模块统一导出
 */

import { createRouter, createWebHashHistory, Router } from 'vue-router';
import commonRouter from './common';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [...commonRouter]
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  document.title = to.meta.title;
  next();
});

export default router;
