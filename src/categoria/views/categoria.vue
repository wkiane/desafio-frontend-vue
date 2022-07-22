<template>
    <div>
        <div class="columns">
            <div class="column is-one-fifth">
                <aside class="menu">
                    <p class="menu-label">Categoria</p>
                    <sidebarCategorias></sidebarCategorias>
                </aside>
            </div>
            <div class="column">
                <listagemProdutos></listagemProdutos>
            </div>
        </div>
    </div>
</template>

<script>
import listagemProdutos from '@/produto/components/listagem_produtos'
import sidebarCategorias from '../components/sidebar_categorias'

export default {
    components: {
        listagemProdutos,
        sidebarCategorias
    },
    created() {
        this.$store.dispatch('initProdutos', {
            id: this.$route.params.id
        })
    },
    computed: {
        produtos() {
            return this.$store.getters.produtos
        }
    },
    data () {
        return {}
    }
}
</script>

<style>

</style>