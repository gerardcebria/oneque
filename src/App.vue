<template>
  <div class="app">
    <div class="background"></div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  display: flex;
  justify-content:center;
  align-items:center;
  height: 100%;
}

</style>
