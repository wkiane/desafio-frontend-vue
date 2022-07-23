import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'

import detalhesProduto from '@/produto/views/detalhes_produto.vue'

import produtoModule from './produto'
import { Produto } from '@/produto/models/produto_model'


const localVue = createLocalVue()


localVue.use(Vuex)


describe('detalhesProduto.vue', () => {

    let actions:any

    let state:any

    let store:any


    beforeEach(() => {

        state = {

            produto: new Produto({ id: '1'})

        }


        actions = {

            initProduto: jest.fn()

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


    it('verifica se a action initProduto foi chamada', () => {
        const wrapper = shallowMount(detalhesProduto, { store, localVue, mocks: {
            $route: {
                params: {
                    id: 1
                }
            }
        }})
        expect(actions.initProduto).toHaveBeenCalled()
    })

})
