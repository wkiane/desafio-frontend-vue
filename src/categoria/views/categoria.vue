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
                <listagemProdutos :categoria="$route.params.id"></listagemProdutos>
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
    data () {
        return {}
    }
}
</script>

<style>

</style>