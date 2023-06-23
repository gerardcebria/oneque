<template>
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <h1>{{ nombre_cola }}</h1>
                <h2>Hay {{n_personas}} personas delante de ti</h2>
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
    </div>
</template>
  
<script>
import {getQueueById} from '../api/queue'
import {getUserQuantity, sendUserData} from '../api/user'


export default {
    data() {
        return {
            nombre_cola: '',
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
        getQueueById(this.queue_id).then((queue)=>{
            this.nombre_cola = queue.nombre
        })
        getUserQuantity(this.queue_id).then((response)=>{
            this.n_personas = response;
        })
        
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
            sendUserData(datos)


        }
    }
};
</script>
  