<template>
  <div>
    <div class="category__title">
      <h1>Категория: {{$route.params.category}}</h1>
    </div>
    <Recipes v-if="showRecipes" />
    <div v-else>
      <p>Для данной категории пока нет рецептов.</p>
    </div>
  </div>
</template>

<script>
import Recipes from "../../components/Recipes";

export default {
  components: {
    Recipes,
  },
  async fetch({ store, route }) {
    if (route.query.page) {
      store.commit("recipes/setCurrentPage", route.query.page);
    } else {
      store.commit("recipes/setCurrentPage", 1);
    }
    store.commit("recipes/setCategory", route.params.category);
    await store.dispatch("recipes/fetchRecipes");
  },
  computed: {
    showRecipes() {
      return this.$store.getters["recipes/showRecipes"];
    },
  },
};
</script>

<style scoped>
.category__title h1 {
  padding: 20px 0;
  text-align: center;
}
</style>