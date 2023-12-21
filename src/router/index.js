import { createRouter,  createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinView from '../views/JoinView.vue'
import JoinProcess from '../views/JoinProcess.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/join/',
        component: JoinView
    },
    {
        path: '/join/:id',
        component: JoinProcess
    },
    // {
    //     path: '/create',
    //     component: CreateQueueComponent
    // },
    // {
    //     path: '/test/:id',
    //     component: TestQR
    // }

  ]
})

export default router
