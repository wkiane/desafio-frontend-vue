import { Produto } from '@/produto/models/produto_model'
import { get_produto } from '@/produto/services/produto_service'

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
        async initProduto({ commit }: any, data: { id: string }) {
            const produto = await get_produto(data.id);
            commit('setProduto', produto)
        }
    },
    getters: {
        produto(state: any) {
            return state.produto
        }
    }
}