<template>
    <div>
        <h1>Formulario</h1>
        <form @submit.prevent="enviarDatos">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required>

            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" v-model="apellidos" required>

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>

            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" v-model="telefono" required>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            nombre: '',
            apellidos: '',
            email: '',
            telefono: '',
        };
    },
    mounted() {
        // Obtener el ID de la URL y realizar la llamada a la base de datos para obtener la queue correspondiente
        const queue_id = this.$route.params.id;
        // Lógica para obtener la queue basada en el ID y actualizar los datos en el componente
        axios.get(`http://localhost:5000/queue/` + queue_id)
            .then(response => {
                console.log(response)
                this.event = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    methods: {
        enviarDatos() {
            // Aquí puedes realizar la lógica para enviar los datos a la base de datos "onequeue" en la tabla "users"
            const datos = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                email: this.email,
                telefono: this.telefono,
            };
            // Lógica para enviar los datos a la base de datos
            axios.post('https://api.onequeue.com/users', datos)
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
  