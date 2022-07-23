import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'

import listagemProdutos from '@/produto/components/listagem_produtos.vue'

import produtoModule from './produtos'


const localVue = createLocalVue()


localVue.use(Vuex)


describe('listagem_produtos.vue', () => {

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

        const wrapper = shallowMount(listagemProdutos, { store, localVue})


        expect(actions.initProdutos).toHaveBeenCalled()

    })

})
