import { ref } from 'vue'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'

const getPost = (id) => {
  const post = ref(null)

  const load = async () => {
    const postRef = doc(db, 'posts', id)
    const postSnap = await getDoc(postRef)

    if (postSnap.exists()) {
      post.value = { ...postSnap.data(), id: postSnap.id }
    }
  }
  return { post, load }
}

export default getPost
