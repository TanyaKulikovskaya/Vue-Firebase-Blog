<template>
  <main class="container mx-auto">
    <h2 class="text-center text-2xl font-medium text-teal-900 mb-6">
      # Our Articles
    </h2>
    <div v-if="posts" class="md:grid md:grid-cols-6">
      <div class="md:col-span-1">
        <SortByAlphabet @sort="sortPosts" />
        <FilterByAuthor :authors="authors" />
      </div>
      <PostsList :posts="posts" class="md:col-span-5" />
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import PostsList from '@/components/PostsList.vue'
import FilterByAuthor from '@/components/FilterByAuthor.vue'
import SortByAlphabet from '@/components/SortByAlphabet.vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'BlogPage',
  components: {
    PostsList,
    FilterByAuthor,
    SortByAlphabet,
  },
  setup() {
    const { posts, load } = getPosts()
    load()

    const authors = computed(() => {
      return [
        ...new Set(
          posts.value
            .map((post) => post.authorLastName)
            .sort((a, b) => a.localeCompare(b))
        ),
      ]
    })

    const sortPosts = () => {
      posts.value = posts.value.sort((a, b) => a.title.localeCompare(b.title))
    }
    return { posts, authors, sortPosts }
  },
}
</script>
