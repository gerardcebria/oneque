<template>
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <h2>Formulario de Evento</h2>
                <form @submit="submitForm">
                    <div class="form-group form-floating mb-3">
                        <input type="text" class="form-control" id="eventName" v-model="eventName" required>
                        <label for="eventName">Nombre del evento:</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input type="text" class="form-control" id="companyName" v-model="companyName" required>
                        <label for="companyName">Nombre de la empresa:</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input type="datetime-local" class="form-control" id="startTime" v-model="startTime">
                        <label for="startTime">Inicio:</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input type="datetime-local" class="form-control" id="endTime" v-model="endTime">
                        <label for="endTime">Final:</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            eventName: '',
            companyName: '',
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
  