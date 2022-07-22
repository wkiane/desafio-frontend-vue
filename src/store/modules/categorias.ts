import { Categoria } from '@/categoria/models/categoria_model'
import { get_categorias } from '@/categoria/services/categoria_service'

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
        async initCategorias({ commit }: any) {
            const categorias = await get_categorias();
            commit('setCategorias', categorias)
        }
    },
    getters: {
        categorias(state: any) {
            return state.categorias
        }
    }
}