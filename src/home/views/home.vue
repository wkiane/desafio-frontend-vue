<template>
    <div>
        <div class="columns">
            <div class="column is-one-fifth">
                <aside class="menu">
                    <p class="menu-label">Categoria</p>
                    <ul class="menu-list">
                        <li><a>Eletrônicos</a></li>
                    </ul>
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

export default {
    components: {
        listagemProdutos 
    },
    data () {
        return {}
    }
}
</script>

<style>

</style>