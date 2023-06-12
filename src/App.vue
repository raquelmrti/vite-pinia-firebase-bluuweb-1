<script setup>

</script>

<template>
<h1>App</h1>
<nav>
<router-link to="/">Home</router-link> |
<router-link to="/register">Register</router-link> |
<router-link to="/login">Log In</router-link> |
<button>Log Out</button>
</nav>

<router-view></router-view>

</template>

<style scoped>

</style>