<template>
  <li
    class="p-6 rounded shadow-lg shadow-zinc-200 border-0 hover:scale-105 transition duration-300"
  >
    <router-link
      class="flex flex-col h-full"
      :to="{ name: 'PostDetails', params: { id: post.id } }"
    >
      <h4 class="text-xl font-semibold text-zinc-500 mb-4">
        {{ post.title }}
      </h4>
      <p class="flex-1 text-zinc-900 font-thin text-lg mb-4">
        {{ truncatedPostBody }}
      </p>
      <span class="text-right font-semibold text-teal-600">Read article</span>
    </router-link>
  </li>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'PostsListItem',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const truncatedPostBody = computed(() => {
      return props.post.body.length > 210
        ? props.post.body.slice(0, 209) + '...'
        : props.post.body
    })
    return { truncatedPostBody }
  },
}
</script>
