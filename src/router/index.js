import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostList.vue'

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
