<template>
  <div>
    <div class="container mb-3">
      <router-link to="/create">
        <v-btn class="btn btn-primary">Crear cola</v-btn>
      </router-link>
    </div>
    <div class="container mb-3">
      <router-link to="/join">
        <button class="btn btn-primary">Unirse a la cola</button>
      </router-link>
    </div>
  </div>
  <!-- <QRComponent />
  <EventDetail /> -->
</template>

<script>
// import EventDetail from './components/EventDetail.vue'
// import QRComponent from './components/QRComponent.vue'

export default {
  name: 'App',
  components: {
    // EventDetail,
    // QRComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
