<template>
    <div class="custom-card">
      <div class="title mt-4">
        <h1>Oneque</h1>
      </div>
      <div class="buttons-container">
        <div class="custom-container mb-3">
          <RouterLink to="/create">
            <v-btn class="btn btn-primary">Crear cola</v-btn>
          </RouterLink>
        </div>
        <div class="custom-container mb-3">
          <RouterLink to="/join">
            <v-btn class="btn btn-primary">Unirse a la cola</v-btn>
          </RouterLink>
        </div>
      </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink:RouterLink
    }
}
</script>
<style>

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/dinosaurs.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}


.custom-card {
  /* justify-content: center;
  align-items: center;
  text-align: center; */
  box-shadow: 0 0 12px 0 rgba(0,0,0,.1), 0 10px 30px 0 rgba(0,0,0,.2);
  border-radius: 10px;
  background-color: lightgray;
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
}

.buttons-container{
  display: flex;
  flex-direction: column;
  height: 60%;
}

.custom-container {
  margin: auto;

}
</style>