import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory } from 'vue-router';
import JoinQueueComponent from './components/JoinQueueComponent';
import CreateQueueComponent from './components/CreateQueueComponent';
import TestQR from './components/TestQR';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/join/:id',
            component: JoinQueueComponent
        },
        {
            path: '/create',
            component: CreateQueueComponent
        },
        {
            path: '/test/:id',
            component: TestQR
        }
    ]
});


const vuetify = createVuetify({
    components,
    directives
})

const app = createApp({});

app.use(router);
app.use(vuetify)


app.mount('#app');
