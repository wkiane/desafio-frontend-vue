<template>
    <div class="columns" v-if="produto">
        <div class="column">
            <img v-bind:src="'data:image/jpeg;base64,'+produto.imagem" alt="Foto produto">
        </div>
       <div class="column">
            <p>{{ produto.categoria }}</p>
            <h1 class="title is-1">{{ produto.descricao }}</h1>
            <h3 class="subtitle is-3">R$ {{ produto.preco }}</h3>
            <p class="subtitle is-6">{{ produto.descricaoDetalhada }}</p>

            <div class="select mr-2">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
            <button class="button bd-fat-button is-primary mb-3">Adcionar ao carrinho</button>
            <p>{{produto.qtdEstoque }} Restantes</p>
       </div>
    </div>
    <div v-else>
        <h1 class="has-text-centered subtitle is-3">Produto não encontrado :/</h1>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('initProduto', {
            id: this.$route.params.id
        })
    },
    computed: {
        produto() {
            return this.$store.getters.produto
        }
    }
}
</script>

<style>

</style>