<script setup>
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
</script>

<template>
  <h1>Register</h1>
  <button @click="userStore.registerUser('Ignacio')">Ingresar</button>
</template>

<style scoped></style>
