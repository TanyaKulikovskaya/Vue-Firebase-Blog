<template>
  <main>
    <h2 class="text-center text-2xl font-medium text-teal-900 mb-6">
      # Our Articles
    </h2>
    <PostsList :posts="posts" />
  </main>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'BlogPage',
  components: {
    PostsList,
  },
  setup() {
    const { posts, load } = getPosts()
    load()
    return { posts }
  },
}
</script>
