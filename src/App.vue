<template>
  <div>
    <div class="container">
      <v-btn to="/create" color="primary">Crear cola</v-btn>
    </div>
    <div class="container">
      <v-btn to="/join" color="primary">Unirse a la cola</v-btn>
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
