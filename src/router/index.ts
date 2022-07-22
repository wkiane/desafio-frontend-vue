import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../home/views/home.vue'
import Login from '../login/views/login.vue'
import DetalhesProduto from '../produto/views/detalhes_produto.vue'
import Categoria from '../categoria/views/categoria.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:id',
    name: 'DetalhesProduto',
    component: DetalhesProduto
  },
  {
    path: '/categorias/:id',
    name: 'Categoria',
    component: Categoria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
