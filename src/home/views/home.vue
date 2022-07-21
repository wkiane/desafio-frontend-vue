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
                <listagemProdutos :produtos="produtos"></listagemProdutos>
            </div>
        </div>
    </div>
</template>

<script>
import listagemProdutos from '@/produto/components/listagem_produtos'
import sidebarCategorias from '@/categoria/components/sidebar_categorias'

export default {
    components: {
        listagemProdutos,
        sidebarCategorias
    },
    created() {
        this.$store.dispatch('initProdutos', {
            id: ''
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