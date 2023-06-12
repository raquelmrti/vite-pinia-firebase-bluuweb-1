<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/userStore"
// import { useRouter } from "vue-router"

const userStore = useUserStore()
// const router = useRouter()

const email = ref("email@gmail.com")
const password = ref("password123")

const handleSubmit = async () => {
  if(!email.value || password.value.length < 6){
    return alert("Llena ambos campos y asegúrate de que la contraseña contiene al menos 5 caracteres.")
  }
  await userStore.loginUser(email.value, password.value)
  // router.push("/")
};
</script>

<template>
  <h1>Log In</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Ingrese email" v-model.trim="email"/>
    <input type="password" placeholder="Ingrese contraseña" v-model.trim="password"/>
    <button type="submit" :disabled="userStore.loadingUser">Acceder</button>
  </form>
</template>
