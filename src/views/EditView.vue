<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDatabaseStore } from "../stores/databaseStore";
const route = useRoute();
const databaseStore = useDatabaseStore();
const { readUrl, updateUrl } = databaseStore;

const handleSubmit = () => {
  // validate input...
  updateUrl(route.params.id, newUrl.value)
};

const newUrl = ref("")

onMounted(async () => {
  newUrl.value = await readUrl(route.params.id);
});
</script>

<template>
  <h1>Edit item</h1>
  <h2>{{ route.params.id }}</h2>

  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Ingrese URL" v-model="newUrl"/>
    <button type="submit">Edit</button>
  </form>
</template>

<style scoped></style>
