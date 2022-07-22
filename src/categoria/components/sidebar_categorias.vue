<template>
  <ul class="menu-list">
    <li v-for="categoria in categorias" :key="categoria.href">
      <router-link :to="categoria.href">
        {{ categoria.text }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initCategorias");
  },
  computed: {
    categorias() {
      return this.$store.getters.categorias;
    },
  },
  data() {
    return {};
  },
};
</script>
