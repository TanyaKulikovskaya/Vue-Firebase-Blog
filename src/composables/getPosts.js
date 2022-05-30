import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'

const getPosts = () => {
  const posts = ref([])

  const load = async () => {
    const postsCollection = collection(db, 'posts')
    const postsList = await getDocs(postsCollection)
    posts.value = postsList.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }
  return { posts, load }
}

export default getPosts
