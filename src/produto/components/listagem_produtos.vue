<template>
    <div class="columns is-desktop is-3-desktop">
        <div class="column" v-for="(produto, index) in produtos" :key="index">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-square">
                        <img v-bind:src="'data:image/jpeg;base64,'+produto.imagem" alt="Foto produto">
                    </figure>
                </div>
                <div class="card-content is-right">
                    <div class="content">
                        <p><strong>{{ produto.descricao }}</strong></p>
                        <hr>
                        <span>{{ produto.descricaoDetalhada}}</span>
                        <br>
                        <span>R$ {{ produto.preco }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('initProdutos')
    },
    computed: {
        produtos() {
            return this.$store.getters.produtos.produtos
        }
    }
}
</script>

<style>

</style>