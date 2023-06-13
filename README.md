# Vite + Pinia + Firebase // Bluuweb Udemy Course

This is a project from Ignacio bluuweb's Udemy Course, [Vue js 3 Actualizado Desde cero + Vite + Firebase 9 + MEVN](https://www.udemy.com/course/curso-vue/), in which we'll use Vite, Pinia and Firebase. Here I will track my progress through it and possibly add some notes.

### **12/06/2023:**

- Set up the structure of the project and the router.
- Set up `userStore` (there will be user register and auth). We're using an Options Store, so there's state, getters and actions.
- Implemented user registration and log in with Firebase. We made two actions, (`registerUser` and `loginUser`) in the user store that contain Firebase's `createUserWithEmailAndPassword` and `signInWithEmailAndPassword` methods.
- Implemented user sign out with Firebase's `signOut` method.
- Added `currentUser` method to the store, which we can use to get the user data each time the auth status changes (`onAuthStateChanged`).
- Added navigation guard to `HomeView` so that only logged in users can access it.
- Made `databaseStore` and added a Firestore database to store documents.
- Displayed the data from the database in `HomeView`.
  - **IMPORTANT:** We must use `where("user", "==", auth.currentUser.uid)` in the database query so it only gets the documents from the currently authenticated user.
- Used the `$reset` method in the user store to reset the data in the database store when the user logs out.
- Made the `addUrl` function to add documents to our urls collection via an HTML input.
- Made the `deleteUrl` function to delete documents from our urls collection. We made sure to verify that the document being deleted belongs to the currently authenticated user, though it's still not fully secure yet.


### **13/06/2023:**
- Made the `readUrl` and `updateUrl` functions for the user to change the urls when they click the "Edit" button. With `readUrl`, we retreive the url that's stored in the database, and with updateUrl we make the petition to Firebase to update the document (using its `updateDoc` method). We also update the documents array in our code by mapping through it.
- Added Firestore security rules.