import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '@/views/BlogPage.vue'
import PostDetails from '@/views/PostDetails.vue'
import CreatePost from '@/views/CreatePost.vue'
import AuthorPosts from '@/views/AuthorPosts.vue'

const routes = [
  {
    path: '/',
    name: 'BlogPage',
    component: BlogPage,
  },
  {
    path: '/posts/:id',
    name: 'PostDetails',
    component: PostDetails,
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/authors/:author',
    name: 'AuthorPosts',
    component: AuthorPosts,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
