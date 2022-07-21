import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import home from './home.vue'
import produtoModule from '@/store/modules/produtos'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('home.vue', () => {
    let actions:any
    let state:any
    let store:any

    beforeEach(() => {
        state = {
            produtos: []
        }

        actions = {
            initProdutos: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                produtoModule: {
                    state,
                    actions,
                    getters: produtoModule.getters
                }
            }
        })
    })

    it('verifica se a action initProdutos foi chamada', () => {
        const wrapper = shallowMount(home, { store, localVue})

        expect(actions.initProdutos).toHaveBeenCalled()
    })
})