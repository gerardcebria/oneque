<template>
  <div>
    <div class="background"></div>
    <div class="custom-card">
      <div class="title">
        <h1>Oneque</h1>
      </div>
      <div class="custom-container mb-3">
        <router-link to="/create">
          <v-btn class="btn btn-primary">Crear cola</v-btn>
        </router-link>
      </div>
      <div class="custom-container mb-3">
        <router-link to="/join">
          <button class="btn btn-primary">Unirse a la cola</button>
        </router-link>
      </div>
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
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/dinosaurs.jpg'); /* Cambia esto a la ruta de tu imagen */
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.content {
  text-align: center;
  z-index: 1;
}

.custom-card {
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 12px 0 rgba(0,0,0,.1), 0 10px 30px 0 rgba(0,0,0,.2);
  border-radius: 10px;
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
}

.custom-container {

}
</style>
