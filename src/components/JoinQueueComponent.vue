<template>
    <div>
      <h1>{{ nombre_cola }}</h1>
      <h2>Hay {{n_personas}} delante de ti</h2>
      <v-form @submit.prevent="enviarDatos">
        <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
        <v-text-field v-model="apellidos" label="Apellidos" required></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
        <v-text-field v-model="telefono" label="Teléfono" type="tel" required></v-text-field>
        <v-btn type="submit" color="primary">Enviar</v-btn>
      </v-form>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            nombre_cola:'',
            nombre: '',
            apellidos: '',
            email: '',
            telefono: '',
            n_personas: 'error'
        };
    },
    mounted() {
        // Obtener el ID de la URL y realizar la llamada a la base de datos para obtener la queue correspondiente
        this.queue_id = this.$route.params.id;
        // Lógica para obtener la queue basada en el ID y actualizar los datos en el componente
        axios.get(`http://localhost:5000/queue/` + this.queue_id)
            .then(response => {
                console.log(response)
                this.event = response.data;
                this.nombre_cola = this.event.nombre
            })
            .catch(error => {
                console.error(error);
            });
        axios.get(`http://localhost:5000/user-quantity/${this.queue_id}`)
            .then(response => {
                console.log('THIS', response)
                this.n_personas = response.data['count(id)'];
            })
            .catch(error => {
                console.error(error);
            });
    },
    methods: {
        enviarDatos() {
            // Aquí puedes realizar la lógica para enviar los datos a la base de datos "onequeue" en la tabla "users"
            const datos = {
                name: this.nombre,
                lastname: this.apellidos,
                email: this.email,
                phone: this.telefono,
                queue: this.queue_id
            };
            console.log(datos)
            // Lógica para enviar los datos a la base de datos
            axios.post(`http://localhost:5000/user`, datos)
                .then(response => {
                    // Maneja la respuesta exitosa
                    console.log(response.data); // Puedes mostrar la respuesta en la consola o realizar otras acciones necesarias
                })
                .catch(error => {
                    // Maneja el error
                    console.error(error);
                });


        }
    }
};
</script>
  