<template>
    <div class="columns" v-if="produto">
        <div class="column">
            <img v-bind:src="'data:image/jpeg;base64,'+produto.imagem" alt="Foto produto">
        </div>
       <div class="column">
            <p>{{ produto.categoria }}</p>
            <h1 class="title is-1">{{ produto.descricao }}</h1>
            <h3 class="subtitle is-3">R$ {{ produto.preco * qtd }}</h3>
            <p class="subtitle is-6">{{ produto.descricaoDetalhada }}</p>

            <div class="select mr-2">
                <select v-model="qtd">
                    <option v-for="numero in produto.qtdEstoque" :key="numero" :value="numero">{{ numero }}</option>
                </select>
            </div>
            <button @click="addToCarrinho" class="button bd-fat-button is-primary mb-3">Adcionar ao carrinho</button>
            <p>{{produto.qtdEstoque }} Restantes</p>
       </div>
    </div>
    <div v-else>
        <h1 class="has-text-centered subtitle is-3">Produto não encontrado :/</h1>
    </div>
</template>

<script>
import { ProdutoCarrinho } from '@/carrinho/models/carrinho_model'
export default {
    created() {
        this.$store.dispatch('initProduto', {
            id: this.$route.params.id
        })

        console.log(this.$store.getters.carrinho.length)
    },
    computed: {
        produto() {
            return this.$store.getters.produto
        }
    },
    methods: {
        addToCarrinho() {
            const produto = new ProdutoCarrinho({
                id: this.produto.id,
                descricao: this.produto.descicao,
                qtd: this.qtd,
                preco: this.produto.preco,
                precoTotal: this.produto.preco * this.qtd,
                imagem: this.produto.imagem
            })
            this.$store.dispatch('addProdutoToCarrinho', produto)
            this.$store.dispatch('setVisibilidadeCarrinho', true)
        }
    },
    data () {
        return {
            qtd: 1,
        }
    }
}
</script>

<style>

</style>