# Vite + Pinia + Firebase // Bluuweb Udemy Course

This is a project from Ignacio bluuweb's Udemy Course, [Vue js 3 Actualizado Desde cero + Vite + Firebase 9 + MEVN](https://www.udemy.com/course/curso-vue/), in which we'll use Vite, Pinia and Firebase. Here I will track my progress through it and possibly add some notes.

### **12/06/2023:**

- Set up the structure of the project and the router.
- Set up `userStore` (there will be user register and auth). We're using an Options Store, so there's state, getters and actions.
- Implement user registration and log in with Firebase. We made two actions, (`registerUser` and `loginUser`) in the user store that contain Firebase's `createUserWithEmailAndPassword` and `signInWithEmailAndPassword` methods.
- Implement user sign out with Firebase's `signOut` method.