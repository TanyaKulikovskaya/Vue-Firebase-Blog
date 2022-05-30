<template>
  <div v-if="post" class="container mx-auto">
    <h4 class="text-3xl text-zinc-500 font-semibold mb-6">{{ post.title }}</h4>
    <p class="text-zinc-900 text-lg mb-10">
      Written by
      <span class="text-teal-700 underline underline-offset-2"
        >{{ post.authorFullName }} </span
      >,
      <span>{{ post.authorEmail }}</span>
    </p>
    <p class="text-xl text-zinc-500 mb-16">{{ post.body }}</p>
    <p class="text-xl text-teal-700 mb-4">Comments:</p>
    <ul>
      <li
        v-for="(comment, index) in post.comments"
        :key="index"
        class="text-zinc-400 mb-4"
      >
        {{ comment }}
      </li>
    </ul>
  </div>
  <div v-else></div>
</template>

<script>
import { useRoute } from 'vue-router'
import getPost from '@/composables/getPost'
export default {
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const { post, load } = getPost(route.params.id)
    load()
    return { post }
  },
}
</script>
