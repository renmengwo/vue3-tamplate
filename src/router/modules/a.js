import Layout from '@/layout';

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/list',
  name: 'Table',
  meta: { title: '自定义表格' },
  children: [
    {
      path: 'list',
      name: 'tableList',
      component: () => import('@/pages/table/index.vue'),
      meta: { title: '表格' }
    }
  ]
};
export default tableRouter;
