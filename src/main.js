import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import JoinQueueComponent from './components/JoinQueueComponent';


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
        }
    ]
});

const app = createApp({});

app.use(router);

app.mount('#app');
