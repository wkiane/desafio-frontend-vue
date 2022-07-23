import { ProdutoCarrinho } from "./carrinho_model"

describe('ProdutoCarrinhoModel', () => {
    describe('criação', () => {
        it('deve ter as propriedades default setadas corretamente', () => {
            const p = new ProdutoCarrinho()

            expect(p.id).toBeUndefined()
            expect(p.descricao).toBe("")
            expect(p.qtd).toBe(0)
            expect(p.preco).toBe(0)
            expect(p.precoTotal).toBe(0)
            expect(p.imagem).toBe("")
        })
    })
})