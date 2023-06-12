import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD3UhkNPY1HRFelntVChzr61rbTTf6F_wM",
  authDomain: "bluuweb-vue-1.firebaseapp.com",
  projectId: "bluuweb-vue-1",
  storageBucket: "bluuweb-vue-1.appspot.com",
  messagingSenderId: "533577135144",
  appId: "1:533577135144:web:43048407bd5da89107311d",
}

initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }