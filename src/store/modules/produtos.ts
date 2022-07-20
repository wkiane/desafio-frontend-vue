import produtos from '@/data/produtos.json'
import { Produto } from '@/produto/models/produto_model'

export default {
    state: {
        produtos: []
    },
    mutations: {
        setProdutos(state: any, produtos: Produto[]) {
            state.produtos = produtos
        }
    },
    actions: {
        initProdutos({ commit }: any) {
            commit('setProdutos', produtos)
        }
    },
    getters: {
        produtos(state: any) {
            return state.produtos
        }
    }
}