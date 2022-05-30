import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBxhEaOUrze7zEqfpjzvcfPkRtw3Spm6lI',
  authDomain: 'vue-firebase-f7db7.firebaseapp.com',
  projectId: 'vue-firebase-f7db7',
  storageBucket: 'vue-firebase-f7db7.appspot.com',
  messagingSenderId: '1012862102635',
  appId: '1:1012862102635:web:64ccc40597fc205dc8d52e',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
