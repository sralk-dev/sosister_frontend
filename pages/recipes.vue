<template>
  <div>
    <Recipes />
  </div>
</template>

<script>
import Recipes from "../components/Recipes";

export default {
  components: {
    Recipes,
  },
  async fetch({ store, route }) {
    if (route.query.page) {
      store.commit("recipes/setCurrentPage", route.query.page);
    }
    await store.dispatch("recipes/fetchRecipes");
  },
};
</script>