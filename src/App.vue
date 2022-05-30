<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <router-view class="flex-grow px-6 py-4" />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
