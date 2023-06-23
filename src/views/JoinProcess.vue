<template>
    <div class="container">
        <div class="row">
            <h1>{{ nombre_cola }}</h1>
            <h2>Hay {{ n_personas }} personas delante de ti</h2>
            <div v-if="!joined">
                <JoinQueueComponent />
            </div>
            <div v-else>
                <QueueStatus/>
            </div>
        </div>
    </div>
</template>
  
<script>
import { getQueueById } from '../api/queue'
import { getUserQuantity } from '../api/user'
import JoinQueueComponent from '../components/JoinQueueComponent'
import QueueStatus from '../components/QueueStatus'


export default {
    components: {
        JoinQueueComponent,
        QueueStatus
    },
    data() {
        return {
            nombre_cola: '',
            n_personas: 'error',
            joined: false
        };
    },
    mounted() {
        // Obtener el ID de la URL y realizar la llamada a la base de datos para obtener la queue correspondiente
        this.queue_id = this.$route.params.id;
        getQueueById(this.queue_id).then((queue) => {
            this.nombre_cola = queue.nombre
        })
        getUserQuantity(this.queue_id).then((response) => {
            this.n_personas = response;
        })

    },
    methods: {
    }
};
</script>
  