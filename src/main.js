import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import JoinQueueComponent from './components/JoinQueueComponent';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/join',
            component: JoinQueueComponent
        }
    ]
});

const app = createApp({});

app.use(router);

app.mount('#app');
