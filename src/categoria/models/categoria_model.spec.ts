import { Categoria } from './categoria_model'

describe('CategoriaModel', () => {
    describe('criação', () => {
        it('deve ter as propriedades default setadas corretamente', () => {
            const c = new Categoria()

            expect(c.text).toBe("")
            expect(c.href).toBe("")
        })
    })
})