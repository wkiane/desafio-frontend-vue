import Vue from 'vue'
import Vuex from 'vuex'

import produtos from './modules/produtos'
import produto from './modules/produto'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        produtos,
        produto
    }
})
