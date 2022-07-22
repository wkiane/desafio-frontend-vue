<template>
  <div class="card">
    <form @submit.prevent="submit" class="card-content">
      <input @focus="clearErro" v-model="email" class="input mb-2" type="text" placeholder="teste@teste.com" />
      <input @focus="clearErro" v-model="senha" class="input mb-2" type="password" placeholder="12345" />
      <p class="help is-danger mb-2" v-if="erroLogin">{{ erroLogin }}</p>
      <button class="button is-primary">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  computed: {
    login() {
      return this.$store.getters.login;
    },
    erroLogin() {
        return this.$store.getters.erroLogin;
    }
  },
  methods: {
    clearErro: function () {
      this.$store.dispatch("atualizaErro", null);
    },
    submit: async function () {
      if (this.email === "" || this.senha === "") {
        this.$store.dispatch("atualizaErro", "Preencha todos os campos!");
        return;
      }
      await this.$store.dispatch("fazerLogin", {
        email: this.email,
        senha: this.senha,
      });
    },
  },
};
</script>


<style scoped>
.card {
  margin: 0 auto;
  max-width: 800px;
}
</style>