import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

console.log(routes)

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout/home',
    },
    ...routes,
  ],
})
