import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: 'list',
          component: () => import('@/views/home/list/index.vue'),
          meta: {
            title: 'List',
          },
          children: [
            {
              path: 'detail-one',
              component: () => import('@/views/home/list/detail-one/index.vue'),
              meta: {
                title: 'Detail One',
              },
            },
            {
              path: 'detail-two',
              component: () => import('@/views/home/list/detail-two/index.vue'),
              meta: {
                title: 'Detail Two',
              },
            },
          ],
        },
      ],
    },
  ],
})
