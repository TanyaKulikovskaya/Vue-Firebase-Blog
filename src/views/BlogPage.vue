<template>
  <main class="container mx-auto">
    <h2 class="text-center text-2xl font-medium text-teal-900 mb-6">
      # Our Articles
    </h2>
    <div class="md:grid md:grid-cols-6">
      <div class="md:col-span-1">
        <FilterByAuthor :posts="posts" />
      </div>
      <PostsList :posts="posts" class="md:col-span-5" />
    </div>
  </main>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import FilterByAuthor from '@/components/FilterByAuthor.vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'BlogPage',
  components: {
    PostsList,
    FilterByAuthor,
  },
  setup() {
    const { posts, load } = getPosts()
    load()
    return { posts }
  },
}
</script>
