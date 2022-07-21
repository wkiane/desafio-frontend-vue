import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sidebarCategorias from '@/categoria/components/sidebar_categorias.vue'
import categoriasModule from './categorias'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('sidebar_categorias.vue', () => {
    let actions:any
    let state:any
    let store:any

    beforeEach(() => {
        state = {
            categorias: []
        }

        actions = {
            initCategorias: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                categoriasModule: {
                    state,
                    actions,
                    getters: categoriasModule.getters
                }
            }
        })
    })

    it('verifica se a action initCategorias foi chamada', () => {
        const wrapper = shallowMount(sidebarCategorias, { store, localVue })
        expect(actions.initCategorias).toHaveBeenCalled()
    })
})