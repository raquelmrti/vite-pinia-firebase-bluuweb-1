import { defineStore } from "pinia"
import router from "../router"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
  }),
  actions: {
    async registerUser(email, password) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        this.userData = { email: user.email, uid: user.uid }
        router.push("/")
      } catch (error) {
        console.log(error)
      }
    },
    async loginUser(email, password) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        this.userData = { email: user.email, uid: user.uid }
        router.push("/")
      } catch (error) {
        console.log(error)
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        // Dejamos userData en null, de lo contrario, nuestra store
        // seguirá teniendo los datos del usuario
        this.userData = null
        router.push("/login")
      } catch (error) {
        console.log(error)
      }
    }
  },
})
