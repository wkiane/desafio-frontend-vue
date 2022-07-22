import { Produto } from '@/produto/models/produto_model'
import { get_produtos, IParametrosProdutos } from '@/produto/services/produto_service'

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
        async initProdutos({ commit }: any, data: { id: string }) {
            const parametros : IParametrosProdutos = {};
            if(data.id != '') parametros.categoria = data.id;
            
            const produtos = await get_produtos(parametros);
            commit('setProdutos', produtos)
        },
        async filterProdutos({ commit }: any, data: {id: string, nomeOuDescricao: string }) {
            const parametros : IParametrosProdutos = {};
            if(data.id != '') parametros.q = data.id;
            if(data.nomeOuDescricao != '') parametros.q = data.nomeOuDescricao;

            const produtos = await get_produtos(parametros);
            commit('setProdutos', produtos)
        }
    },
    getters: {
        produtos(state: any) {
            return state.produtos
        }
    }
}