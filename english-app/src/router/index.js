import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from '@/views/StartScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen
  },
  // 他のルートをここに追加していきます
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
