<template>
  <main class="container mx-auto">
    <h2 class="text-center text-2xl font-medium text-teal-900 mb-6">
      # Articles
    </h2>
    <PostsList :posts="postsByAuthor" />
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'AuthorPosts',
  components: {
    PostsList,
  },
  setup() {
    const route = useRoute()
    const { posts, load } = getPosts()
    load()

    const postsByAuthor = computed(() => {
      return posts.value.filter(
        (post) => post.authorLastName === route.params.author
      )
    })

    return { posts, postsByAuthor }
  },
}
</script>
