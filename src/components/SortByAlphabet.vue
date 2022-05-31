<template>
  <div class="py-6 px-3">
    <button
      class="py-2 bg-teal-800 text-teal-50 w-full rounded text-center opacity-75"
      @click="handleSort"
    >
      Sort by alphabet
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['sort'])
const handleSort = () => {
  emit('sort')
}
</script>
