import { Categoria } from '@/categoria/models/categoria_model'
import categorias from '@/data/categorias.json'

export default {
    state: {
        categorias: []
    },
    mutations: {
        setCategorias(state: any, categorias: Categoria[]) {
            state.categorias = categorias
        }
    },
    actions: {
        initCategorias({ commit }: any) {
            commit('setCategorias', categorias)
        }
    },
    getters: {
        categorias(state: any) {
            return state.categorias
        }
    }
}