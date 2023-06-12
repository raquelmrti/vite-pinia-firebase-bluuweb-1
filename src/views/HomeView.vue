<script setup>
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
const { userData } = userStore;
</script>

<template>
  <h1>Home</h1>
  <p>{{ userData }}</p>
</template>

<style scoped></style>
