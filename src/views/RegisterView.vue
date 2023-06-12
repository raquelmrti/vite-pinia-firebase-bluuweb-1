<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/userStore"

const userStore = useUserStore()

const email = ref("email@gmail.com")
const password = ref("password123")

const handleSubmit = async () => {
  if(!email.value || password.value.length < 6){
    return alert("Llena ambos campos y asegúrate de que la contraseña contiene al menos 5 caracteres.")
  }
  await userStore.registerUser(email.value, password.value)
};
</script>

<template>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Ingrese email" v-model.trim="email"/>
    <input type="password" placeholder="Ingrese contraseña" v-model.trim="password"/>
    <button type="submit">Crear usuario</button>
  </form>
</template>

<style scoped></style>
