import produtos from '@/data/produtos.json'
import { Produto } from '@/produto/models/produto_model'

export default {
    state: {
        produto: null
    },
    mutations: {
        setProduto(state: any, produto: Produto) {
            state.produto = produto
        }
    },
    actions: {
        initProduto({ commit }: any, data: { id: string }) {
            const produto = produtos.produtos.find(_produto => _produto.id.toString() === data.id)
            commit('setProduto', produto)
        }
    },
    getters: {
        produto(state: any) {
            return state.produto
        }
    }
}