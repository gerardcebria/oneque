<template>
    <div>
      <h2>{{ event.nombre }}</h2>
      <p>{{ event.fecha }}</p>
      <p>{{ event.hora }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'


  export default {
    name: 'EventDetail',
    data() {
      return {
        event: {},
      };
    },
    mounted() {
      // Obtén el parámetro de la URL
      // const eventId = this.$route.params.eventId;
  
      // Realiza una llamada a la base de datos para obtener información del evento
      this.fetchEvent();
      // this.fetchEvent(eventId);
    },
    methods: {
      // fetchEvent(eventId) {
      fetchEvent() {

        // Realiza una solicitud HTTP a la API del backend para obtener los detalles del evento
        // Aquí puedes usar Axios o cualquier otra biblioteca de HTTP para realizar la llamada a la API
  
        // Ejemplo de solicitud GET con Axios
        console.log('entra')
        // axios.get(`/api/eventos/${eventId}`)
        axios.get(`http://localhost:5000/queue`)
        .then(response => {
            console.log(response)
            this.event = response.data[0];
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  