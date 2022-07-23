<template>
    <div v-if="carrinho.length" class="carrinho">
        <div>Total R$ {{ total }}</div>

        <div class="column">
            <div v-for="produto in carrinho" :key="produto.id" class="mt-2 columns is-align-items-center">
                <img class="image is-64x64" v-bind:src="'data:image/jpeg;base64,'+produto.imagem" alt="Foto produto">
                <div class="item-carrinho-descricao">
                    <div class="subtitle">{{ produto.descricao }}</div>
                    <input min="1" v-on:input="() => atualizaProduto(produto)" v-model="produto.qtd" class="input small-input" type="number" />
                    <div>R$ {{ produto.precoTotal }}</div>
                    <button @click="() => removerProduto(produto.id)" class="button is-small">-</button>
                </div>
            </div>

            <button @click="finalizarCompra" class="button is-primary mt-4 mr-2">Checkout</button>
            <button @click="limparCarrinho" class="button mt-4">Limpar Carrinho</button>
        </div>
    </div>
    <div v-else class="carrinho">
        <p class="subtitle">Sem Produtos no carrinho</p>
    </div>
</template>

<script>
export default {
    computed: {
        carrinho() {
            return this.$store.getters.carrinho
        },
        total() {
            return this.$store.getters.carrinho.reduce((total, produto) => total + produto.precoTotal, 0);
        }
    },
    methods: {
        limparCarrinho() {
            this.$store.dispatch("limparCarrinho");
        },
        removerProduto(id) {
            this.$store.dispatch("removeProdutoToCarrinho", { id });
        },
        atualizaProduto(produto) {
            produto.qtd = produto.qtd ? parseInt(produto.qtd) : 0
            if(produto.qtd === 0) {
                this.$store.dispatch("removeProdutoToCarrinho", { id: produto.id });
            } else {
                produto.precoTotal = produto.preco * produto.qtd;
                this.$store.dispatch("updateProdutoCarrinho", produto);
            }
        },
        finalizarCompra() {
            const login = this.$store.getters.login
            if(login) {
                this.$store.dispatch("limparCarrinho");
                alert('Compra finalizada com sucesso. Volte sempre! :)')
                this.$store.dispatch("setVisibilidadeCarrinho", false);
            } else {
                this.$router.push('/login')
                alert('Você precisa fazer o login para terminar o pagamento.')
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .carrinho {
        position: absolute;
        top: 71px;
        right: 20px;
        z-index: 2;
        min-width: 200px;
        padding: 10px 20px;
        background: white;
        border: 1px solid #464646;
    }

    .small-input {
        width: 60px;
    }

    .item-carrinho-descricao {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        .carrinho {
            top: 65px;
        }
    }
</style>