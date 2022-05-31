<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <PostsListItem v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script>
import PostsListItem from '@/components/PostsListItem.vue'

export default {
  name: 'PostList',
  components: {
    PostsListItem,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
