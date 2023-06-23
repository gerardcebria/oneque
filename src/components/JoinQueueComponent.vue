<template>
    <div >
            <div class="col-sm"></div>
            <div class="col-sm">
                <form @submit.prevent="enviarDatos">

                    <div class="form-group form-floating mb-3">
                        <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Nombre" required>
                        <label for="nombre">Nombre</label>
                    </div>


                    <div class="form-group form-floating mb-3">
                        <input type="text" class="form-control" id="apellidos" v-model="apellidos" placeholder="Apellidos" required>
                        <label for="apellidos">Apellidos</label>
                    </div>

                    <div class="form-group form-floating mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                        <label for="exampleInputEmail1">Email address</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input type="text" class="form-control" id="telefono" v-model="telefono" placeholder="Apellidos"
                        required>
                        <label for="telefono">Telefono</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-sm"></div>
        </div>
</template>
  
<script>
import {sendUserData} from '../api/user'


export default {
    data() {
        return {

            nombre: '',
            apellidos: '',
            email: '',
            telefono: ''        };
    },
    mounted() {
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
            // Lógica para enviar los datos a la base de datos
            sendUserData(datos)
        }
    }
};
</script>
  