import { createRouter, createWebHistory } from 'vue-router'

import CadastrarProfessor from '@/views/CadastrarProfessor.vue'
import CadastroSala from '../views/CadastroSala.vue'

const routes = [
  {
    path: '/',
    component: CadastrarProfessor
  },
  {
    path: '/salas',
    component: CadastroSala
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router