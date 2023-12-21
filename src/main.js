import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"  
import router from './router'
import VueQrcodeReader from 'vue-qrcode-reader';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
  })



const app = createApp(App);

app.use(router);
app.use(vuetify)
app.use(VueQrcodeReader)



app.mount('#app');
