<template>
  <div>
    <button>
      <router-link to="/create" class="button">Crear cola</router-link>
    </button>
    <button>
      <router-link to="/join" class="button">Unirse a la cola</router-link>
    </button>
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
