import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCoGlOFXYGG3IytAhE6FhSbgImJwqL1Zos",
  authDomain: "cooking-site-27fc2.firebaseapp.com",
  projectId: "cooking-site-27fc2",
  storageBucket: "cooking-site-27fc2.appspot.com",
  messagingSenderId: "30701514667",
  appId: "1:30701514667:web:1cd65fe7b622d744aa2cee"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }