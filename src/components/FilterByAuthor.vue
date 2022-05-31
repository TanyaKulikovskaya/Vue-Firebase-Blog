<template>
  <div class="py-6 px-3">
    <p class="text-lg text-cyan-800 mb-5">Choose an Author</p>
    <ul>
      <li
        v-for="(author, index) in authors"
        :key="index"
        class="text-zinc-600 mb-1"
      >
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
export default {
  name: 'FilterByAuthor',
  props: {
    authors: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
