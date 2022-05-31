<template>
  <main class="container mx-auto">
    <h4 class="text-center text-3xl text-zinc-500 font-semibold mb-6">
      Create a new post
    </h4>
    <div class="mx-auto max-w-screen-md p-6">
      <form class="flex flex-col w-full" @submit.prevent="handleSubmit">
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label class="label">First Name</label>
            <input v-model="firstName" class="input" type="text" required />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="label">Last Name</label>
            <input v-model="lastName" class="input" type="text" required />
          </div>
        </div>
        <label class="label">Title</label>
        <input v-model="title" type="text" class="input" required />
        <label class="label">Content</label>
        <textarea
          v-model="body"
          rows="10"
          class="input resize-none"
          required
        ></textarea>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3">
            <label class="label">Email</label>
            <input v-model="email" class="input" type="email" required />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <button
              class="bg-teal-900 text-teal-50 p-3 mt-5 rounded block w-full"
            >
              Add post
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { doc, setDoc } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'
import { useRouter } from 'vue-router'
export default {
  name: 'CreatePost',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const title = ref('')
    const body = ref('')
    const email = ref('')
    const router = useRouter()
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        authorFirstName: firstName.value,
        authorLastName: lastName.value,
        authorEmail: email.value,
      }
      const randomID = Math.random().toString(36).substring(2)
      await setDoc(doc(db, 'posts', randomID), post)
      router.push({ name: 'BlogPage' })
    }
    return { firstName, lastName, title, body, email, handleSubmit }
  },
}
</script>
<style scoped>
.label {
  @apply block text-zinc-700 text-xs mb-1;
}

.input {
  @apply appearance-none block w-full bg-zinc-100 text-zinc-700 border border-zinc-700 rounded p-3 mb-3 focus:outline-none focus:bg-white;
}
</style>
