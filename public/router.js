import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/App.vue';
import JoinQueueComponent from './src/JoinQueueComponent.vue';

Vue.use(VueRouter);

const router = new VueRouter({
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

export default router;
