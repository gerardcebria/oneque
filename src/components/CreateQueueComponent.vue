<template>
    <div class="container">
        <h2>Formulario de Evento</h2>
        <form @submit="submitForm">
            <div class="form-group">
                <label for="eventName">Nombre del evento:</label>
                <input type="text" class="form-control" id="eventName" v-model="eventName" required>
            </div>
            <div class="form-group">
                <label for="companyName">Nombre de la empresa:</label>
                <input type="text" class="form-control" id="companyName" v-model="companyName" required>
            </div>
            <div class="form-group">
                <label for="duration">Duración:</label>
                <input type="text" class="form-control" id="duration" v-model="duration" required>
            </div>
            <div class="form-group">
                <label for="startTime">Inicio:</label>
                <input type="datetime-local" class="form-control" id="startTime" v-model="startTime">
            </div>
            <div class="form-group">
                <label for="endTime">Final:</label>
                <input type="datetime-local" class="form-control" id="endTime" v-model="endTime">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            eventName: '',
            companyName: '',
            duration: '',
            startTime: '',
            endTime: ''
        };
    },
    methods: {
        submitForm() {
            // Aquí puedes realizar la lógica de envío del formulario
            console.log('Formulario enviado');
            console.log('Nombre del evento:', this.eventName);
            console.log('Nombre de la empresa:', this.companyName);
            console.log('Duración:', this.duration);
            console.log('Inicio:', this.startTime);
            console.log('Final:', this.endTime);
        }
    }
};
</script>
  
<style scoped>
.container {
    margin-top: 20px;
}
</style>
  