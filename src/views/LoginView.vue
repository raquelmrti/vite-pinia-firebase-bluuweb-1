<script setup>
import { computed } from "vue";
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();
const { userData } = userStore;

const userMayuscula = computed(() => userData.toUpperCase())
</script>

<template>
  <h1>Log In</h1>
  <p>{{ userMayuscula }}</p>
  <p>{{ userStore.userMinuscula }}</p>
</template>

<style scoped>

</style>