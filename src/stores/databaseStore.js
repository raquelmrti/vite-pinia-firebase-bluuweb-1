import { collection, getDocs, addDoc, query, where } from "firebase/firestore/lite"
import { db } from "../firebaseConfig"
import { defineStore } from "pinia"
import { auth } from "../firebaseConfig"
import { nanoid } from "nanoid"

export const useDatabaseStore = defineStore("databaseStore", {
  state: () => ({
    documents: [],
    loadingDoc: false
  }),
  actions: {
    async getUrls() {
      if (this.documents.length !== 0){
        return
      }

      this.loadingDoc = true
      try {
        const q = query(
          collection(db, "urls"),
          // get the documents from the user that's currently authenticated
          where("user", "==", auth.currentUser.uid)
        )
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data())
          this.documents.push({
            id: doc.id,
            // pushing a copy of the data object
            ...doc.data()
          })
        })
      } catch (error) {
        console.log(error)
      } finally {
      this.loadingDoc = false
      }
    },
    async addUrl(name) {
      try {
        const objectDoc = {
          // name: name
          name,
          short: nanoid(6),
          user: auth.currentUser.uid,
        }
        const docRef = await addDoc(collection(db, "urls"), objectDoc)
        // docRef has an auto generated id, so we use it for our object
        this.documents.push({
          ...objectDoc,
          id: docRef.id
        })
      } catch (error) {
          console.log(error)
      } finally {

      }
    }
  },
})
