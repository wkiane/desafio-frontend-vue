<template>
  <div class="column">
    <div class="field">
      <label class="label">Pesquisar</label>
      <div class="control">
        <input v-model="filtroNomeDescricao" class="input" type="text" placeholder="IPhone 22 Max" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
    watch: {
        filtroNomeDescricao: function (value) {
            this.$store.dispatch('filterProdutos', {
                id: this.$route.params.id || '',
                nomeOuDescricao: value
            })
        }
    },
   data () {
        return {
            filtroNomeDescricao: ""
        }
    }
}
</script>
