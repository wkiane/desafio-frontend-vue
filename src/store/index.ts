import Vue from 'vue'
import Vuex from 'vuex'

import categorias from './modules/categorias'
import produtos from './modules/produtos'
import produto from './modules/produto'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categorias,
        produtos,
        produto
    }
})
