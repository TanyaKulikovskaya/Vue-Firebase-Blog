<template>
  <div class="py-6 px-3">
    <p class="text-lg text-cyan-800 mb-5">Choose an Author</p>
    <ul v-for="(author, index) in authors" :key="index">
      <li class="text-zinc-600 mb-1">
        <router-link
          :to="{ name: 'AuthorPosts', params: { author } }"
          class="hover:underline hover:underline-offset-2 hover:text-cyan-800"
        >
          {{ author }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FilterByAuthor',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const authors = computed(() => {
      return [...new Set(props.posts.map((post) => post.authorLastName))]
    })
    return { authors }
  },
}
</script>
