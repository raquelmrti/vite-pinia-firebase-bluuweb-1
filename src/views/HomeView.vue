<script setup>
import { useUserStore } from '../stores/userStore'
import { useDatabaseStore } from '../stores/databaseStore';
const userStore = useUserStore()
const databaseStore = useDatabaseStore()

databaseStore.getUrls()

</script>

<template>
  <h1>Home</h1>
  <p>Hi, {{ userStore.userData?.email }}</p>
</template>
