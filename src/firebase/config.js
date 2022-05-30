import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBxhEaOUrze7zEqfpjzvcfPkRtw3Spm6lI',
  authDomain: 'vue-firebase-f7db7.firebaseapp.com',
  projectId: 'vue-firebase-f7db7',
  storageBucket: 'vue-firebase-f7db7.appspot.com',
  messagingSenderId: '1012862102635',
  appId: '1:1012862102635:web:64ccc40597fc205dc8d52e',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
