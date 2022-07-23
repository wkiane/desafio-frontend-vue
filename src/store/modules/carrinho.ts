import { ProdutoCarrinho } from '@/carrinho/models/carrinho_model';
import { get_produtos_carrinho, limpar_carrinho, set_produtos_carrinho } from '@/carrinho/services/carrinho_service'

function adcionaOuAtualizaProdutoNoCarrinho (carrinho: ProdutoCarrinho[], novoProduto: ProdutoCarrinho) {
    const carrinhoAtualizado = carrinho;
    const i = carrinhoAtualizado.findIndex(produto => produto.id === novoProduto.id);
    if (i > -1) carrinhoAtualizado[i] = {...carrinhoAtualizado[i], qtd: carrinhoAtualizado[i].qtd + novoProduto.qtd, precoTotal: novoProduto.preco * (carrinhoAtualizado[i].qtd + novoProduto.qtd) };
    else carrinhoAtualizado.push(novoProduto);
    return carrinhoAtualizado;
}

export default {
    state: {
        carrinho: [],
        visivel: false
    },
    mutations: {
        setCarrinho(state: any, carrinho: ProdutoCarrinho[]) {
            state.carrinho = carrinho
        },
        setVisibilidadeCarrinho(state: any, visibilidade: boolean | null) {
            state.visivel = typeof visibilidade === 'boolean' ? visibilidade : !state.visivel
        }
    },
    actions: {
        setVisibilidadeCarrinho({ commit }: any, data?: boolean) {
            commit('setVisibilidadeCarrinho', data)
        },
        initCarrinho({ commit }: any,) {
            const carrinho = get_produtos_carrinho();
            commit('setCarrinho', carrinho)
        },
        addProdutoToCarrinho({ commit }: any, data: ProdutoCarrinho) {
            const carrinhoAntigo = get_produtos_carrinho();
            const carrinhoAtualizado = adcionaOuAtualizaProdutoNoCarrinho(carrinhoAntigo, data);
            set_produtos_carrinho(carrinhoAtualizado);
            commit('setCarrinho', carrinhoAtualizado)
        },
        updateProdutoCarrinho({ commit }: any, data: ProdutoCarrinho) {
            const carrinhoAtualizado = get_produtos_carrinho().map(produto => produto.id === data.id ? data : produto)
            set_produtos_carrinho(carrinhoAtualizado);
            commit('setCarrinho', carrinhoAtualizado)
        },
        async removeProdutoToCarrinho({ commit }: any, data: { id: string }) {
            const carrinhoAtualizado = get_produtos_carrinho().filter(produto => produto.id !== data.id)
            set_produtos_carrinho(carrinhoAtualizado)
            commit('setCarrinho', carrinhoAtualizado)
        },
        limparCarrinho({ commit }: any) {
            limpar_carrinho();
            commit('setCarrinho', [])
        },
    },
    getters: {
        carrinho(state: any) {
            return state.carrinho
        },
        carrinhoVisivel(state: any) {
            return state.visivel
        }
    }
}