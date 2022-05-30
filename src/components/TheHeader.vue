<template>
  <header
    class="flex flex-nowrap justify-between items-center h-26 px-6 py-2 bg-teal-700"
  >
    <router-link class="mr-4" :to="{ name: 'BlogPage' }">
      <h1 class="text-3xl font-medium text-teal-50">The Vue Blog</h1>
    </router-link>
    <nav class="h-full py-5">
      <ul class="h-full flex flex-nowrap items-center">
        <li class="h-full mr-5">
          <router-link
            class="flex items-center h-full px-3 py-1 text-teal-50 hover:text-teal-300"
            :to="{ name: 'BlogPage' }"
          >
            Blog
          </router-link>
        </li>
        <li class="h-full">
          <router-link
            class="flex items-center h-full px-3 py-1 rounded bg-teal-50 text-teal-900 hover:bg-teal-500 hover:text-teal-50"
            :to="{ name: 'CreatePost' }"
          >
            New Post
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
