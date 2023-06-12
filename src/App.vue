<script setup>
import { useUserStore } from "./stores/userStore";
const userStore = useUserStore();
</script>

<template>
  <h1>App</h1>
  <nav v-if="!userStore.loadingSession">
    <router-link to="/" v-if="userStore.userData">Home</router-link> |
    <router-link to="/register" v-if="!userStore.userData">Register</router-link> |
    <router-link to="/login" v-if="!userStore.userData">Log In</router-link> |
    <button @click="userStore.logoutUser" v-if="userStore.userData">Log Out</button>
  </nav>
  <div v-else>
    <p>Loading user...</p>
  </div>

  <router-view></router-view>
</template>

<style scoped></style>
