<script setup>
import { useUserStore } from "../stores/userStore";
import { useDatabaseStore } from "../stores/databaseStore";
const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls();
</script>

<template>
  <h1>Home</h1>
  <p>Hi, {{ userStore.userData?.email }}</p>
  <p v-if="databaseStore.loadingDoc">Loading docs...</p>
  <ul v-else>
    <li v-for="item of databaseStore.documents" :key="item.id">
      {{ item.id }}
      <br />
      {{ item.name }}
    </li>
  </ul>
</template>
