import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../home/views/home.vue'
import DetalhesProduto from '../produto/views/detalhes_produto.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'DetalhesProduto',
    component: DetalhesProduto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
