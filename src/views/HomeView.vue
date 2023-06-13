<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { useDatabaseStore } from "../stores/databaseStore";
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const router = useRouter();

databaseStore.getUrls();

const newUrl = ref();

const handleSubmit = () => {
  // validaciones de esa URL
  databaseStore.addUrl(newUrl.value)
};
</script>

<template>
  <h1>Home</h1>
  <p>Hi, {{ userStore.userData?.email }}</p>

  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Ingrese URL" v-model="newUrl" />
    <button type="submit">Agregar</button>
  </form>

  <p v-if="databaseStore.loadingDoc">Loading docs...</p>
  <ul v-else>
    <li v-for="item of databaseStore.documents" :key="item.id">
      <span><strong>ID:</strong> {{ item.id }}</span>
      <br>
      <span><strong>Name:</strong> {{ item.name }}</span>
      <br>
      <button @click="databaseStore.deleteUrl(item.id)">Delete</button>
      <button @click="router.push(`/edit/${item.id}`)">Edit</button>
    </li>
  </ul>
</template>

<style>
ul {
  padding-inline-start: 0;
}

li {
  list-style-type: none;
}
</style>
