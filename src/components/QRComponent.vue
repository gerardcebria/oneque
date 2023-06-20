<template>
    <div>
        <canvas ref="qrCode"></canvas>
    </div>
</template>
<script>


import QRious from 'qrious';

export default {
    data() {
        return {
            base_url: 'https://localhost:8080/', // URL que quieres convertir en QR
            qr: null, // Instancia de QRious
        };
    },
    mounted() {
        this.eventId = this.$route.params.eventId;
        this.generateQR();
    },
    methods: {
        generateQR() {
            this.qr = new QRious({
                element: this.$refs.qrCode, // Referencia a un elemento HTML donde se mostrará el QR
                value: this.url + this.eventId, // URL que se convertirá en QR
                size: 200, // Tamaño del QR en píxeles
            });
        },
    },
};

</script>