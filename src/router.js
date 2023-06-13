import {createRouter, createWebHistory} from 'vue-router'
import { useUserStore } from './stores/userStore'
import Register from "./views/RegisterView.vue"
import Login from './views/LoginView.vue'

const requireAuth = async(to, from, next) => {
  const userStore = useUserStore()
  userStore.loadingSession = true
  // Verify if the session is active
  const user = await userStore.currentUser()
  if(user) {
    next()
  } else {
    next("/login")
  }
  userStore.loadingSession = false
}


const routes = [
  {
    path: "/",
    component: () => import("./views/HomeView.vue"),
    beforeEnter: requireAuth,
  },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router