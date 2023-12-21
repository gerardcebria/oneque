<template>
    <div class="container">
        <p>{{ machineId }}</p>
        <div class="row">
            <QRScanner />
        </div>
    </div>
</template>
  
<script>
import QRScanner from '../components/QRScanner.vue'

export default {
    components: {
        QRScanner,
    },
    data() {
        return {
            machineId: null

        };
    },
    mounted() {
        this.getMachineId();
    },
    methods: {
        getMachineId() {
            let machineId = localStorage.getItem('MachineId');
            if (!machineId) {
                machineId = crypto.randomUUID();
                localStorage.setItem('MachineId', machineId);
            }
            this.machineId = machineId;
            return machineId;
        }
    }
};
</script>
  