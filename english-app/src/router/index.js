import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from '@/views/StartScreen.vue'
import PlayScreen from '@/views/PlayScreen'
import SettingScreen from '@/views/SettingScreen'
import NotFoundScreen from '@/views/NotfoundScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen
  },
  {
    path: '/play',
    name: 'Play',
    component: PlayScreen
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingScreen
  },
  {
    path: '/:notFound(.*)',
    name: 'error.404',
    component: NotFoundScreen
  }
  // 他のルートをここに追加していきます
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
