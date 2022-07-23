import { ProdutoCarrinho } from "../models/carrinho_model";

export function get_produtos_carrinho()  {
    const carrinho = localStorage.getItem('carrinho');
    if(carrinho) {
        const produtos: ProdutoCarrinho[] = JSON.parse(carrinho)
        return produtos;
    }
    return [];
}

export function set_produtos_carrinho(produtos: ProdutoCarrinho[]) {
    localStorage.setItem('carrinho', JSON.stringify(produtos));
}

export function limpar_carrinho() {
    localStorage.removeItem('carrinho')
}