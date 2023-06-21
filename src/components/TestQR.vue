<template>
    <h1> Prueba </h1>
    <div>
        <canvas ref="qrCode"></canvas>
    </div>
</template>
<script>


import QRious from 'qrious';

export default {
    data() {
        return {
            base_url: 'http://192.168.1.106:8080/join/', // URL que quieres convertir en QR
            qr: null, // Instancia de QRious
        };
    },
    mounted() {
        this.eventId = this.$route.params.id;
        this.generateQR();
    },
    methods: {
        generateQR() {
            this.qr = new QRious({
                element: this.$refs.qrCode, // Referencia a un elemento HTML donde se mostrará el QR
                value: this.base_url + this.eventId, // URL que se convertirá en QR
                size: 200, // Tamaño del QR en píxeles
            });
        },
    },
};

</script>