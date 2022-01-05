import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout';
import tableRouter from '@/router/modules/a';
export const errorPath = { path: '*', redirect: '/404', hidden: true };

export const asyncRoutes = [
  tableRouter
];

export const constantRoutes = [{
  path: '/',
  name: 'layout',
  component: Layout,
  redirect: '/index',
  hidden: true,
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import(/* webpackChunkName: "layout" */'@/pages/main.vue')
    }
  ]
}];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
});
export default router;
