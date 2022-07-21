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
        initProdutos({ commit }: any, data: { id: string }) {
            let listaProdutosSelecionados = produtos.produtos;
            if(data.id != "") {
                listaProdutosSelecionados = produtos.produtos.filter(_produto => _produto.categoria === data.id);
            }
            commit('setProdutos', listaProdutosSelecionados)
        }
    },
    getters: {
        produtos(state: any) {
            return state.produtos
        }
    }
}