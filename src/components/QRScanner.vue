<template>
  <div>
    <p>{{ machineId }}</p>
    <p>{{ scannedData }}</p>
    <p>{{ rawValue }}</p>
    <div v-if="scannedData">
      <p>Resultado del escaneo:</p>
    </div>
    <input capture="environment" />
    <qrcode-stream :capture="null" @detect="onDecode" @init="onInit"></qrcode-stream>

  </div>
</template>
  
<script>
import { QrcodeStream } from 'vue-qrcode-reader'
// import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  data() {
    return {
      scannedData: null,
      rawValue: null,
    };
  },
  components: {
    QrcodeStream
  },
  methods: {
    onInit() {
      console.log('Escáner iniciado');
    },
    onDecode(content) {
      this.scannedData = content;
      console.log(this.scannedData)
      this.rawValue = content[0].rawValue
    },

  },
};
</script>
  
<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
  