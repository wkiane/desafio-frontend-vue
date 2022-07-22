import { Login } from './login_model'

describe('LoginModel', () => {
    describe('criação', () => {
        it('deve ter as propriedades default setadas corretamente', () => {
            const l = new Login()
            expect(l.email).toBe("")
            expect(l.senha).toBe("")
        })
    })
})