import { Produto } from './produto_model'

describe('ProdutoModel', () => {
    describe('criação', () => {
        it('deve ter as propriedades default setadas corretamente', () => {
            const p = new Produto()

            expect(p.id).toBeUndefined()
            expect(p.descricao).toBe("")
            expect(p.descricaoDetalhada).toBe("")
            expect(p.categoria).toBe("")
            expect(p.qtdEstoque).toBe(0)
            expect(p.preco).toBe(0)
            expect(p.imagem).toBe("")
        })
    })
})