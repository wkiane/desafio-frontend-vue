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
                <filtro></filtro>
                <listagemProdutos></listagemProdutos>
            </div>
        </div>
    </div>
</template>

<script>
import listagemProdutos from '@/produto/components/listagem_produtos'
import sidebarCategorias from '@/categoria/components/sidebar_categorias'
import filtro from '@/filtro/components/filtroProdutos.vue'

export default {
    components: {
        listagemProdutos,
        sidebarCategorias,
        filtro
    },
    created() {
        this.$store.dispatch('initProdutos', {
            id: ''
        })
    },
    
    data () {
        return {}
    }
}
</script>

<style>

</style>