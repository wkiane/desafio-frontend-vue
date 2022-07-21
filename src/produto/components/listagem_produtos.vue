<template>
    <div class="columns is-multiline is-desktop is-3-desktop">
        <router-link :to="'/' + produto.id" class="column is-one-fifth-desktop" v-for="(produto, index) in produtos" :key="index">
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
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['produtos'],
}
</script>

<style>

</style>